import express from "express";
import routers from "../routes";
import { apiHome, apiDocu } from "../controllers/apiCtrl";
const apiRouter = express.Router();

apiRouter.get(routers.api, apiHome);
apiRouter.get(routers.apiDocument, apiDocu);

export default apiRouter;