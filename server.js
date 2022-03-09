require("dotenv").config();
const { PORT, MONGODB_URL } = process.env;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const controllers = require('./controllers/index');




//middleware  
    app.use(cors());
    app.use(morgan("dev")); 
    app.use(express.json()); 
    app.use('/list', controllers.list);
    app.use('/', controllers.user);



app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));