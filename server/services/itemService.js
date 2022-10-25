const uuid = require('uuid');
const path = require('path');
const { Item, ItemInfo } = require('../models/models');
const ApiError = require('../error/ApiError');

class ItemService {
  INFO = 'info';

  async create(name, price, typeId, info, img, imgUrl) {
    let fileName;
    if (imgUrl) {
      fileName = imgUrl;
    }
    fileName = uuid.v4() + '.jpg';
    img.mv(path.resolve(__dirname, '..', 'static', fileName));
    const item = await Item.create({ name, price, typeId, img: fileName });

    if (info) {
      info = JSON.parse(info);
      info.forEach((i) =>
        ItemInfo.create({
          title: i.title,
          description: i.description,
          itemId: item.id,
        })
      );
    } else {
      throw ApiError.badRequest('No item info');
    }

    return item;
  }

  async findAll(typeId, limit, offset) {
    let items;
    if (!typeId) {
      items = await Item.findAndCountAll({ limit, offset });
    }
    // if (brandId && !typeId) {
    //   items = await Item.findAndCountAll({ where: { brandId }, limit, offset });
    // }
    if (typeId) {
      items = await Item.findAndCountAll({ where: { typeId }, limit, offset });
    }

    // if (brandId && typeId) {
    //   items = await Item.findAndCountAll({ where: { brandId, typeId }, limit, offset });
    // }

    return items;
  }

  async findOne(id) {
    const item = await Item.findOne({
      where: { id },
      include: [{ model: ItemInfo, as: this.INFO }],
    });

    return item;
  }

  async deleteOne(id) {
    const item = Item.findOne({
      where: { id },
      include: [{ model: ItemInfo, as: this.INFO }],
    });

    if (!item) {
      throw ApiError.badRequest('No item with such id');
    }

    const countDeleted = await Item.destroy({
      where: { id },
    });

    return countDeleted;
  }
}

module.exports = new ItemService();
