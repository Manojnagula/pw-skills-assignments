exports.RegistrationValidation = (req,res,next) => {
    const {email,password,name} = req.body
    if(req.body && email && name && password)
    {
        next()
    }
    else{
        res.status(400).send({msg:"all input values are required"})
    }
}