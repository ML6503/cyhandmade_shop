const app = require('./index');
const sequelize = require('./db');

const PORT = process.env.PORT || 5000;
let server;

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    server = app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    server.on('connection', (connection) => {
      connections.push(connection);
      connection.on(
        'close',
        () => (connections = connections.filter((curr) => curr !== connection))
      );
    });
  } catch (e) {
    console.log(e);
  }
};

start();

let connections = [];

const gracefulShutdownHandler = function gracefulShutdownHandler(signal) {
  console.log(` Caught ${signal}, gracefully shutting down`);
  // stop the server from accepting new connections
  server.close(() => {
    console.log('Closed out remaining connections');
    process.exit(0);
  });

  setTimeout(() => {
    console.log('🤞 Shutting down application');
    process.exit(1);
  }, 10000);

  // if not all connections closed in a browser we destroy them
  connections.forEach((curr) => curr.end());
  setTimeout(() => connections.forEach((curr) => curr.destroy()), 5000);
};

// The SIGINT signal is sent to a process by its controlling terminal when a user wishes to interrupt the process.
process.on('SIGINT', gracefulShutdownHandler);

// The SIGTERM signal is sent to a process to request its termination.
process.on('SIGTERM', gracefulShutdownHandler);
