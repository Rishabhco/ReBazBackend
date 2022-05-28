const express = require("express");
var bodyParser = require('body-parser');
const cors=require("cors");
const db=require("./db/connection");
const userRouter = require("./routers/user");
const itemRouter = require("./routers/item");
const res = require("express/lib/response");

require("dotenv").config();

const app = express();

const port = process.env.PORT || 3000;

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

app.use("/", ()=>{
  res.status(200).send("Welcome to the ReBazz Backend API");
});

app.use("/user", userRouter);
app.use("/items", itemRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});