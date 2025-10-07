import Express from "express";
import workouts from "./routes/workouts";
import { logger } from "./middlewares/logger";
import { errorHandler, notFoundHandler } from "./middlewares/error";
import { Request, Response } from 'express';


export const app = Express();
//Built-in Middleware
app.use(Express.json());

app.get('/hello', (req: Request, res:Response) => {
    res.send({message: 'Hello World!'})
})

// Custom Middleware
app.use(logger);
app.use(errorHandler);
app.use(notFoundHandler);

//Routes
app.use("/mongo-workouts", workouts);

