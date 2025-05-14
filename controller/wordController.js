 const mongoose = require('mongoose') ;
 const User = require('../models/Word'); 
 const jwt = require('jsonwebtoken') ;
 exports.createUser = async (req , res) => {
    const {fullName , email , number} = req.body ;
    if(!fullName || !email || !number){
        return res.status(400).json({
            success: false,
            message : "All field are required"
        })
    }
    try {  
        const user = await User.create({
            fullName , email , number
        })
        
        return res.status(200).json({
            success : true ,
            message:"User created successfully",
            user ,
            token
        })

    } catch (error) {
        console.error("Error occured in Create user") ;
        return res.status(500).json({
            success : false ,
            message:"Error occured in Create user" 
        })
    }

 }

 exports.getOneUser = async(req , res) =>{
 try {
    const {email} = req.body ;
    const Oneuser = await User.findOne({email}) ;
    if(!Oneuser){
        return res.status(400).json({
        message : "Here is not any user",
        success : false 
    })
}
   const token = jwt.sign({userId : Oneuser._id} , process.env.JWT_SECRET , {
        expiresIn: "2h"
    })

    console.log(token) ;
    console.log(Oneuser) ;
    res.cookie("token" , token , {
        httpOnly: true ,
        maxAge: 2 * 60 * 60 * 1000
    })
    
    return res.status(200).json({
        message : "Here is the user",
        success : true ,
        Oneuser
    })
 } catch (error) {
     return res.status(400).json({
        message : "error in get one user",
        success : false 
    })
 }
 }
 exports.AllUser = async(req , res) => {
    try {
        const user = await User.find() ;
        if(!user){
            return res.status(400).json({
                success : false ,
                message : "no user found"
            })
        }
        return res.status(200).json({
            success : true ,
            message : "these are all user",
            user
        })
    } catch (error) {
        return res.status(500).json({
            success : false ,
            message : "error in get all user",
        })
    }
 }