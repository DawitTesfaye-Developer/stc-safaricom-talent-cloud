import Express from "express";
import workouts from "./routes/workouts";
import { logger } from "./middlewares/logger";
import { errorHandler, notFoundHandler } from "./middlewares/error";


export const app = Express();
//Built-in Middleware
app.use(Express.json());


// Custom Middleware
app.use(logger);
app.use(errorHandler);
app.use(notFoundHandler);

//Routes
app.use("/mongo-workouts", workouts);

