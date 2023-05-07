import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user.js";
import { recipesRouter } from "./routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect(
  "mongodb+srv://abhishek:abhi7721@cluster0.w7d7o6x.mongodb.net/DB1?retryWrites=true&w=majority",
  
  //   mongodb+srv://abhishek:abhi7721@cluster0.w7d7o6x.mongodb.net/
  //   mongodb+srv://abhishek:abhi7721@cluster0.w7d7o6x.mongodb.net/
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.listen(3001, () => console.log("Server started"));
