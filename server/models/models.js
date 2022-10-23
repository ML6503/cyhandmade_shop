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

const Token = sequelize.define('token', {
  refreshToken: { type: DataTypes.STRING, require: true },
});

const Basket = sequelize.define('basket', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
});

const BasketItem = sequelize.define('basket_item', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
});

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

// const Brand = sequelize.define('brand', {
//   id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
//   name: { type: DataTypes.STRING, unique: true, allowNull: false },
// });

// const Rating = sequelize.define('rating', {
//   id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
//   rate: { type: DataTypes.INTEGER, defaultValue: 0 },
// });

const ItemInfo = sequelize.define('item_info', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
});

// const TypeBrand = sequelize.define('type_brand', {
//   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
// });

User.hasOne(Token);
Token.belongsTo(User);

User.hasOne(Basket);
Basket.belongsTo(User);

// User.hasMany(Rating);
// Rating.belongsTo(User);

Basket.hasMany(BasketItem);
BasketItem.belongsTo(Basket);

Item.hasMany(BasketItem);
BasketItem.belongsTo(Item);

// Item.hasMany(Rating);
// Rating.belongsTo(Item);

Item.hasMany(ItemInfo, { as: 'info' });
ItemInfo.belongsTo(Item);

Type.hasMany(Item);
Item.belongsTo(Type);

// Brand.hasMany(Device);
// Device.belongsTo(Brand);

// Type.belongsToMany(Brand, { through: TypeBrand });
// Brand.belongsToMany(Type, { through: TypeBrand });

module.exports = {
  User,
  Token,
  Basket,
  BasketItem,
  Item,
  ItemInfo,
  Type,
  //   Brand,
  //   Rating,
  //   TypeBrand,
};
