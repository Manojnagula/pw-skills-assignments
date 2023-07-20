const express = require('express')
const {getUser,RegisterUser,LoginUser} = require("../Controllers/userControllers.js")
const {RegistrationValidation} = require("../Middlewares/registrationdatavalidation.js")
const {LoginValidation} = require("../Middlewares/logindatavalidation.js")

const userRoute = express.Router()

userRoute.post("/registeruser",RegistrationValidation,RegisterUser)  //restring purpose
userRoute.post("/loginuser",LoginValidation,LoginUser)  //login purpose
userRoute.get("/getuser",getUser) //for getting users

module.exports = {userRoute}