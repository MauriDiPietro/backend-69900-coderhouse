import UserManager from "../manager/user.manager.js";
const userManager = new UserManager("./src/data/users.json");

import { Router } from "express";
const router = Router();

router.post("/register", async (req, res) => {
  try {
    const user = await userManager.createUser(req.body);
    res.redirect('/users')
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

export default router;
