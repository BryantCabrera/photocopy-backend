/********** REQUIRES **********/
require('dotenv').config();
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const cors = require('cors');
const cloudinary = require('cloudinary');
const formData = require('express-form-data');

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

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET
  })

app.use(cors(corsOptions));

app.use(formData.parse());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));


// for uploading the image to cloudinary
app.post('/image-upload', (req,res) => {
    const values = Object.values(req.files)
    const promises = values.map(image => cloudinary.uploader.upload(image.path))
    
    Promise
      .all(promises)
      .then(results => {
          res.json(results)
          console.log(results);
      })
})

/********** ROUTERS/CONTROLLERS **********/
app.use('/auth', authRouter);
app.use('/creators', creatorsRouter);
app.use('/photos', photosRouter);

/********** LISTENER **********/
app.listen(process.env.PORT, () => {
    console.log('Server is listening on port 4000.');
});