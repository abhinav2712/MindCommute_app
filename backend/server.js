import express, { Router } from 'express';
import mysql from 'mysql2';
import expressLayouts from 'express-ejs-layouts';
import post from './api/postRoutes.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

// Middleware
app.use(express.json());
app.set('view engine', 'ejs') // For now.
app.set('views', `${__dirname}/views`)
app.set('layout', '/layouts/layout')
app.set(expressLayouts)
app.use(express.static('public'));

// Database Setup
let connect = mysql.createConnection({
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});
console.log(connect.error)
if (connect.error){
    console.log(`Error: ${err.message}`)
} else{
    console.log('Connected to MySQL server.')
}

// Config properties
const PORT = 4000;

// Routes
app.use('/posts/', post)

app.listen(PORT, ()=> {
    console.log(`MindCommute is live at ${process.env.PORT || PORT}`)
});

