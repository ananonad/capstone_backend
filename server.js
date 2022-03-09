require("dotenv").config();
const { PORT, MONGODB_URL } = process.env;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const controller = require('./controllers/index');


// mongoose.connect(MONGODB_URL, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
// });

// mongoose.connection
//     .on("open", () => console.log("Your are connected to mongoose"))
//     .on("close", () => console.log("Your are disconnected from mongoose"))
//     .on("error", (error) => console.log(error));


    
    app.use(cors());
    app.use(morgan("dev")); 
    app.use(express.json()); 
    app.use('/list', controller.list);

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));