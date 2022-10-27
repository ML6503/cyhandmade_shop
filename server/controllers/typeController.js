const { Type } = require('../models/modelsDb');
const ApiError = require('../error/ApiError');

class TypeController {
  async create(req, res, next) {
    try {
      const { name } = req.body;
      if (!name) {
        return next(ApiError.badRequest('No type name provided'));
      }
      const type = await Type.create({ name });
      return res.json(type);
    } catch (e) {
      next(e);
    }
  }

  async getAll(req, res) {
    try {
      const types = await Type.findAll();
      return res.json(types);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new TypeController();
