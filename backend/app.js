const express = require('express');
const cors = require('cors');
const userRoute = require('./routes/userRoute');


const app =express();
// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/auth/', userRoute);


module.exports = app;