require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors())

// Connect to mongoDB
const URI = process.env.CONNECTING_DB

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

const connected = mongoose.connection;

connected.once('open', () => {
    console.log('Database Connected')
})


// Routes
app.use('/user', require('./routes/userRoutes'));
app.use('/api', require('./routes/categoryRoutes'));


// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Server running on port: ', PORT)
})