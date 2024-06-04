import fs from "fs";
import { v4 as uuidv4 } from "uuid";

export default class ProductDaoFS {
  constructor(path) {
    this.path = path;
  }

  async getAll() {
    try {
      if (fs.existsSync(this.path)) {
        const products = await fs.promises.readFile(this.path, "utf-8");
        const productsJSON = JSON.parse(products);
        return productsJSON;
      } else {
        return [];
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async getById(id) {
    try {
      const products = await this.getAll();
      const product = products.find((prod) => prod.id === id);
      if (product) {
        return product;
      }
      return null;
    } catch (error) {
      throw new Error(error);
    }
  }

  async create(obj) {
    try {
      const product = {
        id: uuidv4(),
        ...obj,
      };
      const productsFile = await this.getAll();
      productsFile.push(product);
      await fs.promises.writeFile(this.path, JSON.stringify(productsFile));
      return product;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(obj, id) {
    try {
      const productsFile = await this.getAll();
      const index = productsFile.findIndex((prod) => prod.id === id);
      if (index === -1) {
        return null;
      } else {
        productsFile[index] = { ...obj, id };
      }
      await fs.promises.writeFile(this.path, JSON.stringify(productsFile));
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id) {
    try {
      const productsFile = await this.getAll();
      if (productsFile.length > 0) {
        const newArray = productsFile.filter((prod) => prod.id !== id);
        await fs.promises.writeFile(this.path, JSON.stringify(newArray));
      } else return null;
      
    } catch (error) {
      throw new Error(error);
    }
  }
}
