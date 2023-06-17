const AppError = require("../utils/error/app-error");
const {StatusCodes} = require("http-status-codes")
class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    return await this.model.create(data);
  }

  async deleteOne(id) {
    return await this.model.deleteOne(id);
  }

  async get(id) {
    const response = await this.model.findById(id);
    if (!response) {
      throw new AppError(
          "Not able to find the resource",
          StatusCodes.NOT_FOUND
      );
    }
    return response;
  }

  async getAll() {
    return await this.model.find();
  }

  async update(id, data) {
    return await this.model.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
  }
}

module.exports = CrudRepository;
