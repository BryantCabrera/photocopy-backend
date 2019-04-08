/********** REQUIRES **********/
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const Creator = require('../models/creator');

/********** MIDDLEWARE **********/

/********** ROUTES **********/
// Log-In
router.post('/login', async (req, res) => {
    try {
        //finds logged in user 
        //gets email from req.body (username was attached via form and kept in req.body)
        const loggedCreator = await Creator.findOne({ email: req.body.email });
        console.log(loggedCreator, ' this is loggedCreator');
        //if Creator exists
        if (loggedCreator) {
            //checks if the passwords match, if they do, redirect to page, if not, keep on splash page with message
            //compares password from req.body to Creator's hashedpassword in database
            if (bcrypt.compareSync(req.body.password, loggedCreator.password) && req.body.email === loggedCreator.email) {
                //once Creator is found, create a session
                req.session.user = loggedCreator;
                req.session.message = '';
                req.session.logged = true;

                const { _id, name, email, img, children, sex, location, caretakers } = loggedCreator
                const responseLoggedCreator = {
                    _id: _id,
                    name: name,
                    email: email,
                    img: img, 
                    children: children,
                    sex: sex,
                    location: location,
                    caretakers: caretakers
                }
                // res.json({ loggedCreator, isLoggedIn: true });
                res.json({
                    status: 200,
                    message: 'login successful',
                    data: responseLoggedCreator
                })
            } else {
                // res.json({ isLoggedIn: false });
                res.json({
                    message: 'The password you entered is incorrect!'
                })
            }
        } else {
            res.json({
                status: 200,
                message: 'That Creator doesn\'t exist!'
            });
        }
    } catch (err) {
        res.json({
            status: 200,
            message: 'Couldn\'t connect to database.'
        });
    }
});

// Log-Out


module.exports = router;