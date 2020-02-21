import express from "express";
import routes from "../routes";
import { home, join, login, confirmAccount } from "../controllers/globalCtrl";
import { cour } from "../controllers/courseCtrl";
const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login); 
globalRouter.get(routes.confirmAccount, confirmAccount);
globalRouter.get(routes.courses, cour); // 얜 course거입니다.

export default globalRouter;