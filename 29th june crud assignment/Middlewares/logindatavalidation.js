exports.LoginValidation = (req,res,next) => {
    const {email,password} = req.body
    if(req.body && email && password)
    {
        next()
    }
    else{
        res.status(400).send({msg:"all input values are required"})
    }
}