const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const app = express();

const cors = require('cors');
app.use(cors())
//connect database
mongoose.connect(
    'mongodb+srv://admin:admin@qlphongtro-g127b.mongodb.net/test?retryWrites=true&w=majority',
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,  
        useFindAndModify: false        
    },
  
);
// khao báo Router
const chutroRouter = require('./routes/chutro.Router');
const userRouter = require('./routes/user.Router')
const dichvuRouter= require('./routes/dichvu.Router')

//use middleware morgan
app.use(morgan('dev'));

//user middleware bodyParser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// use router 
app.use('/api/chutro',chutroRouter);
app.use('/api/user',userRouter);
app.use('api/dichvu',dichvuRouter);

//use err
app.use((req,res,next) => {
    const error = new Error('not found');
    error.status(404);
    next(error);
})
app.use((err,req,res,next) => {
    res.status(err.status||500);
    res.json({
        error:{
            message: err.message
        }
    })
})
//create node server by express
app.listen(port, () => console.log(`server running on port: ${port}`));


module.exports = app;

