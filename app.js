import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import connectToDB from './config/database.js';
import blogRoutes from "./routes/blogRoutes.js";

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDB();

app.use('/', blogRoutes);

export default app;