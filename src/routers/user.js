const express=require('express');

const userController=require('../controllers/userController.js')

const router=new express.Router()

router.get('/',userController.home);

module.exports=router