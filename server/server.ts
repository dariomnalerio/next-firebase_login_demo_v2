import express, { Request, Response } from "express";
import cors from "cors";
import admin from "firebase-admin";
const serviceAccount = require("./serviceAccountKey.json");
import { Router as userRouter } from "./src/routes/userRoutes";

const app = express();

app.use(express.json());

// Allow cross-origin requests from any domain
app.use(cors());

// Initialize Firebase-admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_PROJECT_URL,
});

// Define route handler for the default home page
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome");
});

// Define route handler for the User endpoint
app.use("/user", userRouter);

// Start express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
