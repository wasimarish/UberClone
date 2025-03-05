const userModel=require('../models/user.model');
const userService=require('../services/user.service')
const {validationResult}=require('express-validator')
const blacklistTokenModel=require('../models/blacklistToken.model')

module.exports.registerUser=async (req,res,next)=>{
    const error= validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error:error.array() });
    }

    const{fullname,email,password}=req.body;

    const isCaptainAlreadyExist=await userModel.findOne({email});
    if(isCaptainAlreadyExist){
        return res.status(400).json({message : 'user already Exist'})
    }
    
    const hashedPassword=await userModel.hashPassword(password);
    /* console.log(req.body)*/
  
    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    });

    
    const token =user.generateAuthToken();
    res.status(201).json({token,user});

}

// module.exports.loginUser=async (req,res,next)=>{

//     const error= validationResult(req);
//     console.log(req.body);
//     if(!error.isEmpty()){
//         return res.status(401).json({error:error.array() });
//     }
//     // console.log(req.body);

//     const {email,password}=req.body;
//     // console.log(email);
//     // console.log(password);
//     const user =await userModel.findOne({email}).select('+password');
//     if(!user){
//         return res.status(401).json({message: 'Invalid Email or Password'});
//     }
   
   
//     const isMatch=await user.comparePassword(password);
//     if(!isMatch){
//         res.status(401).json({message: 'Invalid Email or Password'});
//     }

//     const token = user.generateAuthToken();
//     res.status(200).json({token,user});
  
// }



module.exports.loginUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ er: errors.array() });
    }

    const { email, password } = req.body;
    const user = await userModel.findOne({ email }).select('+password');

    if (!user) {
        return res.status(401).json({ message: 'Invalid Email or Password' });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid Email or Password' });
    }

    const token = user.generateAuthToken();
    res.cookie('token',token);

    res.status(200).json({ token, user });
};

module.exports.getUserProfile=async(req,res,next)=>{
    res.status(200).json(req.user);
}

module.exports.logoutUser=async(req,res,next)=>{
    
    const token =req.cookies.token || req.headers.authorization.split(' ')[1];
    await blacklistTokenModel.create({token});
    res.clearCookie('token');
    res.status(200).json({message: 'Logged Out'})
}