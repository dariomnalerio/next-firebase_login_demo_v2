import { Request, Response } from "express";
import { createUser, updateUser } from "../services/userServices";

export const createUserController = async (req: Request, res: Response) => {
  try {
    const { uid, email, firstName, lastName, age } = req.body;

    const data = { uid, email };

    const result = await createUser(data);

    if (!result) {
      return res.status(400).json({
        message: "Bad request",
      });
    } else {
      return res.status(201).json({
        message: "User created",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const updateUserController = async (req: Request, res: Response) => {
  try {
    const { uid, email, firstName, lastName, age } = req.body;

    const data = { uid, email, firstName, lastName, age };

    const result = await updateUser(data);

    if (!result) {
      return res.status(400).json({
        message: "Bad request",
      });
    } else {
      return res.status(200).json({
        message: "User updated",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
