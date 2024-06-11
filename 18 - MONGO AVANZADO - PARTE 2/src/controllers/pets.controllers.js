import * as service from "../services/pets.services.js";

export const getByIdPet = async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = await service.getByIdPet(id);
    if (!item) res.status(404).json({ msg: "Pet not found" });
    else res.json(item);
  } catch (error) {
    next(error);
  }
};

export const createPet = async (req, res, next) => {
  try {
    const newPet = await service.createPet(req.body);
    if (!newPet) res.status(404).json({ msg: "Error create pet" });
    else res.json(newPet);
  } catch (error) {
    next(error);
  }
};
