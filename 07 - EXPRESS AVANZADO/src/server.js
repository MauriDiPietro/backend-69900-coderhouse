import express from "express";
import { UserManager } from "./managers/user.manager.js";
const userManager = new UserManager("./users.json");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/users", async (req, res) => {
  try {
    const users = await userManager.getUsers(); 
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

app.get("/users/:idUser", async (req, res) => {
  try {
    const { idUser } = req.params;
    const user = await userManager.getUserById(idUser);
    // console.log(user);
    if (!user) res.status(404).json({ msg: "User not found" });
    else res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

app.post("/users", async (req, res) => {
  try {
    // console.log(req.body);
    const user = await userManager.createUser(req.body);
    if (!user) res.status(404).json({ msg: "User already exists" });
    else res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

app.put("/users/:idUser", async (req, res) => {
  try {
    const { idUser } = req.params;
    const response = await userManager.updateUser(req.body, idUser);
    if (!response) res.status(404).json({ msg: "Error updating user" });
    else res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

app.delete("/users/:idUser", async (req, res) => {
  try {
    const { idUser } = req.params;
    const response = await userManager.deleteUser(idUser);
    if (!response) res.status(404).json({ msg: "Error delete user" });
    else res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

const PORT = 8085;

app.listen(PORT, () => console.log(`Server ok on port ${PORT}`));
