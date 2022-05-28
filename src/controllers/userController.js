const User = require('../models/user.js')

const home=(req,res)=>{
    console.log("Hello this is backend server of ReBaz for Code.pdf");
    res.status(200).send("Hello this is backend server of ReBaz for Code.pdf");
}

module.exports={
    home
}