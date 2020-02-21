import express from "express";
import routes from "../routes"
import { v2, v2Remove, v2Edit } from "../controllers/apiV2Ctrl";
const apiV2Router = express.Router();

apiV2Router.get(routes.apiV2, v2);
apiV2Router.get(routes.apiV2Remove, v2Remove);
apiV2Router.get(routes.apiV2Edit, v2Edit);

export default apiV2Router;