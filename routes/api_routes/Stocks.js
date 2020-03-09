const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')
//Stock model
const Stock = require('../../models/Stocks');

//@route Get api/stocks
//@desc Get ALL stock
router.get('/', (req, res) => {
    Stock.find()
        .sort({ date: -1 })
        .then(stocks => res.json(stocks))
});

//@route POST api/stocks
//@desc  create stock
router.post('/', auth, (req, res) => {
    const newStock = new Stock({
        name: req.body.name
    });
    newStock.save().then(stock => res.json(stock));
});

//@route DELETE api/stocks
//@desc delete stock
router.delete('/:id', auth, (req, res) => {
    Stock.findById(req.params.id)
        .then(stock => stock.remove().then(() => res.json({ success: true })))
        /* for some reason it always works but sends a 404 ////Recise Later*/
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;