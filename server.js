require("dotenv").config();
const { PORT = 3000, MONGODB_URL } = process.env;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

mongoose.connection
    .on("open", () => console.log("Your are connected to mongoose"))
    .on("close", () => console.log("Your are disconnected from mongoose"))
    .on("error", (error) => console.log(error));


    
    app.use(cors()); // to prevent cors errors, open access to all origins
    app.use(morgan("dev")); // logging
    app.use(express.json()); // parse json bodies



app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));