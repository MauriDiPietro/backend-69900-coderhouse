import express from "express";
import handlebars from "express-handlebars";
import { __dirname } from "./utils.js";

const app = express();
app.use(express.json());
app.use(express.static(__dirname + "/public"));

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

app.listen(8080, () => {
  console.log("Escuchando al puerto 8080");
});
