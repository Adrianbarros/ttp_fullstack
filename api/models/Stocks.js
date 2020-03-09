const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StockSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Stock = mongoose.model('stock', StockSchema);
