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


//Show Route


//Update Route


//Delete Route

module.exports = router;