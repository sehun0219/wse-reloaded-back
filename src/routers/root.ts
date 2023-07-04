import { Router } from "express";
import { search } from "../controllers/recipe";
import { home } from "../controllers/recipe";
import {
  getLogin,
  postLogin,
  getSignup,
  postSignup,
} from "../controllers/user";

const rootRouter = Router();

rootRouter.get("/", home);
rootRouter.route("/signup").get(getSignup).post(postSignup);
rootRouter.route("/login").get(getLogin).post(postLogin);
rootRouter.get("/search", search);

export default rootRouter;
