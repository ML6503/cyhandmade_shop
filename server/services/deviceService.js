const uuid = require('uuid');
const path = require('path');
const { Device, DeviceInfo } = require('../models/models');
const ApiError = require('../error/ApiError');

class DeviceService {
  INFO = 'info';

  async create(name, price, brandId, typeId, info, img) {
    let fileName = uuid.v4() + '.jpg';
    img.mv(path.resolve(__dirname, '..', 'static', fileName));
    const device = await Device.create({ name, price, typeId, brandId, img: fileName });

    if (info) {
      info = JSON.parse(info);
      info.forEach((i) =>
        DeviceInfo.create({
          title: i.title,
          description: i.description,
          deviceId: device.id,
        })
      );
    } else {
      throw ApiError.badRequest('No device info');
    }

    return device;
  }

  async findAll(typeId, brandId, limit, offset) {
    let devices;
    if (!typeId && !brandId) {
      devices = await Device.findAndCountAll({ limit, offset });
    }
    if (brandId && !typeId) {
      devices = await Device.findAndCountAll({ where: { brandId }, limit, offset });
    }
    if (!brandId && typeId) {
      devices = await Device.findAndCountAll({ where: { typeId }, limit, offset });
    }

    if (brandId && typeId) {
      devices = await Device.findAndCountAll({ where: { brandId, typeId }, limit, offset });
    }

    return devices;
  }

  async findOne(id) {
    const device = await Device.findOne({
      where: { id },
      include: [{ model: DeviceInfo, as: this.INFO }],
    });

    return device;
  }
}

module.exports = new DeviceService();
