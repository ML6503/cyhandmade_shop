const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: 'USER' },
  isActivated: { type: DataTypes.BOOLEAN, defaultValue: false },
  activationLink: { type: DataTypes.STRING },
});

const UserAddress = sequelize.define('user_address', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  line1: { type: DataTypes.STRING },
  line2: { type: DataTypes.STRING },
  city: { type: DataTypes.STRING },
  country: { type: DataTypes.STRING },
  code: { type: DataTypes.INTEGER },
  phone: { type: DataTypes.INTEGER },
});

const Token = sequelize.define('token', {
  refreshToken: { type: DataTypes.STRING, require: true },
});

// const Basket = sequelize.define('basket', {
//   id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
// });

// const BasketItem = sequelize.define('basket_item', {
//   id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
// });

const Item = sequelize.define('item', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  //   rating: { type: DataTypes.INTEGER, defaultValue: 0 },
  img: { type: DataTypes.STRING, allowNull: false },
});

const Type = sequelize.define('type', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Order = sequelize.define('order', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
});

const OrderItem = sequelize.define('order_item', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
});

const ItemInfo = sequelize.define('item_info', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  stock: { type: DataTypes.INTEGER },
});

User.hasOne(Token);
Token.belongsTo(User);

// User.hasOne(Basket);
// Basket.belongsTo(User);

User.hasOne(UserAddress);
UserAddress.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

// Basket.hasMany(BasketItem);
// BasketItem.belongsTo(Basket);

// Item.hasMany(BasketItem);
// BasketItem.belongsTo(Item);

Order.hasMany(OrderItem);
OrderItem.belongsTo(Order);

Item.hasMany(OrderItem);
OrderItem.belongsTo(Item);

Item.hasMany(ItemInfo, { as: 'info' });
ItemInfo.belongsTo(Item);

Type.hasMany(Item);
Item.belongsTo(Type);

module.exports = {
  User,
  Token,
  // Basket,
  // BasketItem,
  Item,
  ItemInfo,
  Type,
  Order,
  OrderItem,
};
