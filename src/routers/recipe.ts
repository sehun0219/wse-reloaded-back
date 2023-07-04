import { Router } from "express";
import {
  watch,
  getEdit,
  postEdit,
  deleteRecipe,
  getUpload,
  postUpload,
} from "../controllers/recipe";

const recipeRouter = Router();

recipeRouter.get("/:id([0-9a-f]{24})", watch);
recipeRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
recipeRouter.route("/:id([0-9a-f]{24})/delete").get(deleteRecipe);
recipeRouter.route("/upload").get(getUpload).post(postUpload);

export default recipeRouter;
