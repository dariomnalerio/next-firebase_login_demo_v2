import {
  createUserController,
  updateUserController,
} from "../controllers/userController";

const express = require("express");
const Router = express.Router();

Router.post("/", createUserController);
Router.put("/", updateUserController);

export { Router };
