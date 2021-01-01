require('dotenv').config({
    path:'./config/config.env'
});
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db")
//config .env to ./config/config.env
const path = require('path');
const app = express();

app.use(cors()); 
//connect to DB
connectDB();




//bodyParser
app.use(bodyParser.json());


//Config for only development
if (process.env.NODE_ENV === 'development') {
    app.use(cors({        
        origin: process.env.CLIENT_URL
    }))
    app.use(morgan('dev'))
    //Morgan gives information about each request
    //Cors is allowed to deal with react for localhost at port 3000 easily
}

//Load all routes

const authRouter = require('./routes/auth.route');
const { connect } = require("http2");

app.use('/api/', authRouter);
if(process.env.NODE_ENV === 'production'){

    app.use(express.static('client/build'));

    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
    });
}

app.use((req, res, next) => {

    res.status(404).json({
        success: false,
        message: "Page not founded"
    })
    
    next();
});




const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{

    console.log("Server on port "+PORT);
});



