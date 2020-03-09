const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 5000;

const stocks = require('./routes/api_routes/Stocks');
//body parser middleware
app.use(bodyParser.json());
//DB Config
const db = require('./config/keys').mongoURI;
//connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('Mongo connected...'))
    .catch(err => console.log(err));
//Use Routes
app.use('/api/stocks', stocks)
app.listen(PORT, console.log(`Server started on port ${PORT}`));