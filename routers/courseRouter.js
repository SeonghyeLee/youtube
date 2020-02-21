import express from "express";
import routes from "../routes";
import { cour, courNew, courMine} from "../controllers/courseCtrl";
const courseRouter = express.Router();

courseRouter.get(routes.courses, cour);
courseRouter.get(routes.coursesNew, courNew);
courseRouter.get(routes.coursesMine, courMine);

export default courseRouter;