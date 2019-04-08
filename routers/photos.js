/********** REQUIRES **********/
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const Photo = require('../models/photo');

/********** MIDDLEWARE **********/

/********** ROUTES **********/
//Index Route
router.get('/', async (req, res) => {
    try {
        const allPhotos = await Photo.find({});

        res.json({
            status: 200,
            data: allPhotos
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