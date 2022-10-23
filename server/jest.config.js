module.exports = {
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  globalTeardown: './test-teardown-globals.js',
  testEnvironment: 'node',
  verbose: true,
};
