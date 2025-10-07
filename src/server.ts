import { connectToMongoDB } from './database/mongoose';
import { app } from './app';
import { Request, Response } from 'express';


const PORT = 3000;

// Start the mongodb Connection
connectToMongoDB();


app.get('/hello', (req: Request, res:Response) => {
    res.send({message: 'Hello World!'})
})

  // Start the Server
  app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });



