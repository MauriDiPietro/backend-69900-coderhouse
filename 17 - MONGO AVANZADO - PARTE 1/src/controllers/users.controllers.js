import * as service from "../services/users.services.js";

export const addPetToUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { petId } = req.params;
    const newPetToUser = await service.addPetToUser(userId, petId);
    if(!newPetToUser) res.status(404).json({ msg: 'User or Pet not exists' });
    else res.json(newPetToUser);
  } catch (error) {
    next(error)
  }
}

export const createFileCtr = async (req, res, next) => {
  try {
    const newUsers = await service.createFileUser();
    if (!newUsers) res.status(404).json({ msg: "Error create user" });
    else res.json(`${newUsers} Usuarios Insertados correctamente`);
  } catch (error) {
    next(error);
  }
};

export const getByNameCtr = async (req, res, next) => {
  try {
    const { name } = req.query;
    const item = await service.getByNameUser(name);
    if (!item) res.status(404).json({ msg: "User not found" });
    else res.json(item);
  } catch (error) {
    next(error);
  }
};

export const getByIdCtr = async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = await service.getByIdUser(id);
    if (!item) res.status(404).json({ msg: "User not found" });
    else res.json(item);
  } catch (error) {
    next(error);
  }
};

export const getByEmailCtr = async (req, res, next) => {
  try {
    const { email } = req.params;
    const item = await service.getByEmailUser(email);
    if (!item) res.status(404).json({ msg: "User not found" });
    else res.json(item);
  } catch (error) {
    next(error);
  }
};

export const getAllCtr = async (req, res, next) => {
  try {
    const items = await service.getAllUsers();
    res.json(items);
  } catch (error) {
    next(error);
  }
};

export const createCtr = async (req, res, next) => {
  try {
    const user = { ...req.body };
    const newUser = await service.createUser(user);
    if (!newUser) res.status(404).json({ msg: "Error create user" });
    else res.json(newUser);
  } catch (error) {
    next(error);
  }
};

export const updateCtr = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, description, price, stock } = req.body;

    const userUpdated = await service.updateUser(id, {
      name,
      description,
      price,
      stock,
    });

    if (!userUpdated) res.status(404).json({ msg: "Error update user" });

    res.json({
      msg: "User updated",
      data: userUpdated,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteCtr = async (req, res, next) => {
  try {
    const { id } = req.params;

    const userDel = await service.deleteUser(id);
    if (!userDel) res.status(404).json({ msg: "Error delete user" });
    else
      res.json({
        msg: "User deleted",
      });
  } catch (error) {
    next(error);
  }
};
