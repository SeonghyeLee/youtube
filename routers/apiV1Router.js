import express from "express";
import routes from "../routes";
import { v1, v1Buy, v1Refund} from "../controllers/apiV1Ctrl";
const apiV1Router = express.Router();

apiV1Router.get(routes.apiV1, v1);
apiV1Router.get(routes.apiV1Buy, v1Buy);
apiV1Router.get(routes.apiV1Refund, v1Refund);

export default apiV1Router;