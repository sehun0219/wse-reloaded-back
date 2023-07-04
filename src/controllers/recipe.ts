import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
  res.send("Hello World!");
};
export const search = (req: Request, res: Response) => {};
export const watch = (req: Request, res: Response) => {};
export const getEdit = (req: Request, res: Response) => {};
export const postEdit = (req: Request, res: Response) => {};
export const deleteRecipe = (req: Request, res: Response) => {};
export const getUpload = (req: Request, res: Response) => {};
export const postUpload = (req: Request, res: Response) => {};
