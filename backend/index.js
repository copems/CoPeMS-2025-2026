import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userAccountRoutes from './gb_routes/UserAccountRoute.js';

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();
app.use('/api', userAccountRoutes);


const PORT = process.env.PORT || 3000;  
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});