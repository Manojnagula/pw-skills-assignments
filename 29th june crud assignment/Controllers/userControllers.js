const {userModel} = require('../Models/userModels.js')

//registration

exports.RegisterUser = async (req,res)=>{
    const{name,email,password} = req.body;
    try {
        await userModel.create({...req.body})
        res.status(200).send({msg:"user successfully created"})
    } catch (error) {
        res.status(400).send({msg:error.message})
    } 
}


//for login

exports.LoginUser = async (req,res)=>{
    const{email,password}=req.body;
    try {
        const userdata = await userModel.findOne({email});
        // check whether email exists in database or not
        if(userdata)
        {
            if(userdata.password==password)
            {
                res.status(200).send({msg:"User logedin successfully"})
                console.log("P:yes")
            }
            else{
                res.status(400).send({msg:"Password is incorrect"})
                console.log("p:no")
            }
        }
        else{
            res.status(400).send({msg:"email not registered yet"})
            console.log("e:no")
        }
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
}

// for getting users

exports.getUser = async (req,res)=>{
    try {
        const users = await userModel.find({})
    res.status(200).send({users})
    
    } catch (error) {
        res.status(400).send({msg:error.message})
    }

}