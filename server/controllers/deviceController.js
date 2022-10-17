const uuid = require('uuid');
const path = require('path');
const { Device, DeviceInfo } = require('../models/models');
const ApiError = require('../error/ApiError');
const deviceService = require('../services/deviceService');

class DeviceController {
  ONE_PAGE = 1;
  DEFAULT_LIMIT = 8;

  async create(req, res, next) {
    try {
      let { name, price, brandId, typeId, info } = req.body;
      const { img } = req.files;
      //   let fileName = uuid.v4() + '.jpg';
      //   img.mv(path.resolve(__dirname, '..', 'static', fileName));
      //   const device = await Device.create({ name, price, typeId, brandId, img: fileName });

      //   if (info) {
      //     info = JSON.parse(info);
      //     info.forEach((i) =>
      //       DeviceInfo.create({
      //         title: i.title,
      //         description: i.description,
      //         deviceId: device.id,
      //       })
      //     );
      //   }
      const device = await deviceService.create(name, price, brandId, typeId, info, img);
      return res.json(device);
    } catch (err) {
      next(ApiError.badRequest(err.message));
    }
  }

  async getAll(req, res, next) {
    try {
      let { typeId, brandId, limit, page } = req.query;
      page = page || this.ONE_PAGE;
      limit = limit || this.DEFAULT_LIMIT;
      let offset = page * limit - limit;

      //   let devices;
      //   if (!typeId && !brandId) {
      //     devices = await Device.findAndCountAll({ limit, offset });
      //   }
      //   if (brandId && !typeId) {
      //     devices = await Device.findAndCountAll({ where: { brandId }, limit, offset });
      //   }
      //   if (!brandId && typeId) {
      //     devices = await Device.findAndCountAll({ where: { typeId }, limit, offset });
      //   }

      //   if (brandId && typeId) {
      //     devices = await Device.findAndCountAll({ where: { brandId, typeId }, limit, offset });
      //   }

      const devices = await deviceService.findAll(typeId, brandId, limit, offset);

      return res.json(devices);
    } catch (err) {
      next(ApiError.badRequest(err.message));
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;

      const device = await deviceService.findOne(id);
      //   const device = await Device.findOne({
      //     where: { id },
      //     include: [{ model: DeviceInfo, as: 'info' }],
      //   });
      return res.json(device);
    } catch (err) {
      next(ApiError.badRequest(err.message));
    }
  }
}

module.exports = new DeviceController();
