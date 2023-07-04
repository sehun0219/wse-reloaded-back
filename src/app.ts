import express, { Request, Response, NextFunction } from "express";
import router from "./routers/root";
import userRouter from "./routers/user";
import recipeRouter from "./routers/recipe";

const app = express();

app.use("/", router);
app.use("/users", userRouter);
app.use("/recipes", recipeRouter);

app.listen("8001", () => {
  console.log(`
  ################################################
  🛡️  Server listening on port: 8001🛡️
  ################################################
`);
});
