const express = require('express');
const mongoose = require('mongoose');
const bycrypt = require('bcryptjs');``
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../keys.js')
const requiredLogin = require('../middleware/requiredLogin');


const User = mongoose.model("User")

const router = express.Router();

router.get('/',(req,res)=>{
    res.send("Hello World 123!");
    console.log(req.user);
})

router.get('/protected',requiredLogin,(req,res)=>{
    res.send("Hello Shashank!");
    console.log(req.user._id);
})

router.post('/signup',(req,res)=>{
    const {name,email,password} = req.body;
    if(!email || !password || !name ){
      return res.status(401).json({error:"Please add all the fields!!"});
    }
    User.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error:"User already exists!!"});
        }
        bycrypt.hash(password,12)
        .then(hashedpassword=>{
            const user = new User({
                email,
                password:hashedpassword,
                name
            })
            user.save()
            .then(user=>{
                res.json({message:"Saved Successfully",status:1});
            })
            .catch(err=>{
                console.log(err);
            })  
        })
    })
    .catch(err=>{
        console.log(err);
    })
})


router.post('/signin',(req,res)=>{
    const {email,password}  =req.body;
    if(!email || !password){
        return res.status(422).send({error:'Invalid Email or Password!'});
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
            return res.status(422).json({error:'Invalid Email or Password!'});
        }
        bycrypt.compare(password,savedUser.password)
        .then(domatch=>{
            if(domatch){
                    const token = jwt.sign({_id:savedUser._id},JWT_SECRET);
                    res.json({_id:savedUser.id,
                        name:savedUser.name,
                        email:savedUser.email,
                         token,
                        status:1,
                    message:"Login Successfully."});
            }
            else{
                return res.status(422).json({error:"Invalid Email or Password!"});
            }
        })
        .catch(err=>{
            console.log(err);
        })
    })
})


module.exports = router;