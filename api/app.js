const express = require('express');
const session = require('express-session');
// const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const app = express();
const config = require('config');



// const stocks = require('./routes/api_routes/Stocks');


//body parser middleware
app.use(express.json());
//DB Config
const db = config.get('mongoURI');
//connect to MongoDB
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true
    })//adding a new mongo parser
    .then(() => console.log('Mongo connected...'))
    .catch(err => console.log(err));
//Use Routes
app.use('/api/stocks', require('./routes/api_routes/Stocks'));
app.use('/api/users', require('./routes/api_routes/Users'));
app.use('/api/auth', require('./routes/api_routes/Auth'));


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('/'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'src', 'build', 'index.html'));
    });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));