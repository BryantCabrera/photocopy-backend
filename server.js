/********** REQUIRES **********/
require('dotenv').config();
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const cors = require('cors');

require('./db/db');

const authRouter = require('./routers/auth');
const creatorsRouter = require('./routers/creators');
const photosRouter = require('./routers/photos');

/********** MIDDLEWARE **********/
app.use(session({
    secret: "THIS IS A RANDOM STRING SECRET",
    resave: false,
    saveUninitialized: false
}));

const corsOptions = {
    origin: ['http://localhost:3000'],
    credentials: true,
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));

/********** ROUTERS/CONTROLLERS **********/
app.use('/auth', authRouter);
app.use('/creators', creatorsRouter);
app.use('/photos', photosRouter);

/********** LISTENER **********/
app.listen(process.env.PORT, () => {
    console.log('Server is listening on port 4000.');
});