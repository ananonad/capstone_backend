require("dotenv").config();
const { PORT, MONGODB_URL } = process.env;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const methodOverride = require("method-override");
const connection = require("./config/db.connection.js");
const controllers = require('./controllers/index');




//middleware  
    app.use(cors());
    app.use(morgan("dev")); 
    app.use(express.json()); 
    app.use(methodOverride("_method"));
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static("public"));
    app.use('/list', controllers.list);
    // app.use('/', controllers.user);
    app.use('/post', controllers.post);
    app.use('/review', controllers.review);

    app.get("/ping", (req, res) => {
        res.send("Hello World");
    });

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));