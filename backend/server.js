import express, { Router } from 'express';
import post from './api/postRoutes.js';
const app = express();

// Middleware
app.use(express.json());

// Config properties
const PORT = 4000;

// Routes
app.use('/posts/', post)

app.listen(PORT, ()=> {
    console.log(`MindCommute is live at ${PORT}`)
});

