
require('./config/config')
require('./models/db');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
var app = express();

// middleware
app.use(bodyParser.json());
app.use(cors({origin:"*"}));

const rtsIndex = require('./routes/index.router');
const userRoute = require('./routes/image.router');
const { db } = require('./models/user.model');

app.use('/api', rtsIndex);

app.use(passport.initialize());

// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});


 // Make "public" Folder Publicly Available
 const path=require('path')
//  app.use(express.static(path.join(__dirname,'/public')));
app.use('/public', express.static('public'));

// API Route
app.use('/api',userRoute)

// Error favicon.ico
app.get('/favicon.ico', (req, res) => res.status(204));


 
 
// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));