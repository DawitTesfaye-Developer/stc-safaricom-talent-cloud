// error handling middleware

import { NextFunction, Request, Response } from "express";

//Error Handling middleware function

export const errorHandler = (err: Error, req:Request,res:Response, next:NextFunction) => {
    console.error("Error occured:", err.message);
    res.status(500).json({})
    
};

// the middleware for handling 404 errors
export const notFoundHandler = (req: Request, res:Response) => {
    res.status(404).json({ error: 'Something went wrong!' });
};

