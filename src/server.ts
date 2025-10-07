import { connectToMongoDB } from './database/mongoose';
import { app } from './app';
import { PORT } from './config';


// Start the mongodb Connection
connectToMongoDB();

  // Start the Server
  app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });



