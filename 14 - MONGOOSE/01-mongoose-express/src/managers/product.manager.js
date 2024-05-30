export default class ProductManager {
  // constructor(collection, schema) {
  //   this.collection = model(collection, schema);
  // }

  constructor(model){
    this.model = model;
  }

  async getAll() {
    try {
      return await this.model.find({});
    } catch (error) {
      console.log(error);
    }
  }

  async getById(id) {
    try {
      return await this.model.findById(id);
    } catch (error) {
      console.log(error);
    }
  }

  async create(obj) {
    try {
      return await this.model.create(obj);
    } catch (error) {
      console.log(error);
    }
  }

  async update(id, obj) {
    try {
      return await this.model.findByIdAndUpdate(id, obj, { new: true });
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id) {
    try {
      return await this.model.findByIdAndDelete(id);
    } catch (error) {
      console.log(error);
    }
  }
}
