const { Brand } = require('../models/models');
const ApiError = require('../error/ApiError');

class BrandController {
  async create(req, res) {
    const { name } = req.body;
    if (!name) {
      return next(ApiError.badRequest('No brand name provided'));
    }
    const brand = await Brand.create({ name });
    return res.json(brand);
  }

  async getAll(_req, res) {
    const brands = await Brand.findAll();
    return res.json(brands);
  }
}

module.exports = new BrandController();
