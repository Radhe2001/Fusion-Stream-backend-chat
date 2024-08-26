const mongoose = require("mongoose");
require("dotenv").config();

mongoose
    .connect(process.env.CONNECTIONSTRING)
    .then((res) =>
        console.log("database connection got established successfully")
    )
    .catch((err) =>
        console.log("Error occured while connectin to database " + err)
    );
