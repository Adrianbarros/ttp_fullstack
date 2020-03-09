const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken')
const auth = require('../../../middleware/auth')
//User model
const Stock = require('../../models/User');

//@route Post api/auth
//@desc Auth user
//@acess Public
router.post('/', (req, res) => {
    const { email, password } = req.body;
    //simple auth
    if (!email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' })
    }
    //check if user exists
    User.findOne({ email })
        .then(user => {
            if (!user) return res.status(400).json({ msg: 'User doesnt exists' });


            //validate the password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });
                    jwt.sign(
                        { id: user.id },
                        config.get('jwtSecret'),
                        { expiresIn: 3600 },
                        (err, token) => {
                            if (err) throw err;
                            res.json({
                                token,
                                user: {
                                    id: user.id,
                                    name: user.name,
                                    email: user.email
                                }
                            });
                        }
                    )
                })

        })

});
//@route Get api/auth
//@desc Get user data
//@acess private
router.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user));
});

module.exports = router;