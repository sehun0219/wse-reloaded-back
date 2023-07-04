import { Router } from "express";
import {
  logout,
  getEdit,
  postEdit,
  getChangePassword,
  postChangePassword,
  myProfile,
} from "../controllers/user";
const userRouter = Router();

userRouter.get("/logout", logout);
userRouter.route("/edit").get(getEdit).post(postEdit);
userRouter
  .route("/change-password")
  .get(getChangePassword)
  .post(postChangePassword);

userRouter.get("/:id", myProfile);

export default userRouter;
