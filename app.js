import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import globalRouter from "./routers/globalRouter";
import courseRouter from "./routers/courseRouter";
import apiRouter from "./routers/apiRouter";
import apiV1Router from "./routers/apiV1Router";
import apiV2Router from "./routers/apiV2Router";
import routes from "./routes";
const app = express();

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(morgan("dev"));
app.use(helmet());


app.use(routes.home, globalRouter);
app.use(routes.courses, courseRouter);
app.use(routes.api, apiRouter);
app.use(routes.apiV1, apiV1Router);
app.use(routes.apiV2, apiV2Router);

export default app;



