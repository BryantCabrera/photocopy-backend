/********** REQUIRES **********/
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const Creator = require('../models/creator');

/********** MIDDLEWARE **********/

/********** ROUTES **********/
//Index Route
router.get('/', async (req, res) => {
    try {
        const allCreators = await Creator.find({});

        res.json({
            status: 200,
            data: allCreators
        });
    } catch (err) {
        console.log(err);
        res.send(err);
    }
});

//Create Route
router.post('/', async (req, res) => {
    let hashedPassword = await bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    req.body.password = hashedPassword;

    console.log(req.body, 'hitting create Creator');
    try {
        const createdCreator = await Creator.create(req.body);
        res.json({
            status: 200,
            message: 'Registration successful.',
            data: createdCreator
        });
        
    } catch (err) {
        console.log(err);
        res.send(err);
    }
});

//Show Route


//Update Route


//Delete Route

module.exports = router;