import { NextFunction, Request, Response } from "express";


export const logger = (req: Request, res:Response, next: NextFunction) => {
    console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
    next(); // pass control to the next middleware
};