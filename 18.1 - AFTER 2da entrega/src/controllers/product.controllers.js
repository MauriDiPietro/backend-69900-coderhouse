import * as service from "../services/product.services.js";

export const getAll = async (req, res, next) => {
  try {
    const { page, limit, name, sort } = req.query;
    const response = await service.getAll(page, limit, name, sort);
    // let url = `http://localhost:8080/products?page=${response.nextPage}`
    // if(sort !== undefined) url + `&sort=${sort}`
    const nextLink = response.hasNextPage ? `http://localhost:8080/products?page=${response.nextPage}` : null;
    const prevLink = response.hasPrevPage ? `http://localhost:8080/products?page=${response.prevPage}` : null;
    res.status(200).json({
      status: 'success',
      payload: response.docs,
      totalPages: response.totalDocs,
      prevPage: response.prevPage,
      nextPage: response.nextPage,
      page,
      hasNextPage: response.hasNextPage,
      hasPrevPage: response.hasPrevPage,
      prevLink,
      nextLink
    });
  } catch (error) {
    next(error.message);
  }
};

export const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await service.getById(id);
    if (!response) res.status(404).json({ msg: "Product Not found!" });
    else res.status(200).json(response);
  } catch (error) {
    next(error.message);
  }
};

export const create = async (req, res, next) => {
  try {
    const newProd = await service.create(req.body);
    if (!newProd) res.status(404).json({ msg: "Error create product!" });
    else res.status(200).json(newProd);
  } catch (error) {
    next(error.message);
  }
};

export const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const prodUpd = await service.update(id, req.body);
    if (!prodUpd) res.status(404).json({ msg: "Error update product!" });
    else res.status(200).json(prodUpd);
  } catch (error) {
    next(error.message);
  }
};

export const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    const prodDel = await service.remove(id);
    if (!prodDel) res.status(404).json({ msg: "Error delete product!" });
    else res.status(200).json({ msg: `Product id: ${id} deleted` });
  } catch (error) {
    next(error.message);
  }
};
