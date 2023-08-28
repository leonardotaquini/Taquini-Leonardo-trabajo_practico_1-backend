import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import postRoutes from './routes/post.routes.js';
import userRoutes from './routes/user.routes.js';


dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/post', postRoutes );
app.use('/api/user', userRoutes );

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});