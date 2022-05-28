const express = require("express");
var bodyParser = require('body-parser');
const cors=require("cors");

const app = express();

require("dotenv").config();

const port = process.env.PORT || 5500;

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}
 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
app.use(express.urlencoded({ extended: true }))

app.use(cors(corsOptions))
app.use(express.json());

require("./db/connection");
require("./models/user");

const userRouter = require("./routers/user");
app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log("env:", process.env.PG_URL);
});