var     User = require('../models/user'),
        mongoose = require('mongoose'),
        User = mongoose.model('User')

module.exports= {
    getAll: (err, users)=>{
        User.find({}, (err, users)=>{
            res.json(users).sort({zipCode : 1})
        })
    },
    getUserbyId: (req, res) =>{
        var id = req.params.id
        User.findById(id, (err, user)=>{
            if(err){res.json(err)}
            else{res.json(user)}
        })
    },
    getUserByUsername:(req,res)=>{
        User.find({username: req.params.username}, (err,user)=>{
            if(err){res.json(err)}
            else{res.json(user)}
        })
        
    },
    getUserByEmail:(req,res)=>{
        User.find({email: req.params.email}, (err,user)=>{
            if(err){res.json(err)}
            else{res.json(user)}
        })

    },
    findUserByZip:(req,res)=>{
        User.find({zipCode: req.params.zipCode}, (err,user)=>{
            if(err){res.json(err)}
            else{res.json(user)}
        })

    },
    create: (req, res)=>{
        var user = new User
        user.username = req.body.username
        user.email = req.body.email
        user.password = req.body.password
        user.zipCode = req.body.zipCode
        user.firstName = req.body.firstName
        user.save(function(err){
            if(err){res.json(err)}
            else{(res.json(user))}
        })
    },
    update: (req, res)=>{
        User.findByIdAndUpdate(req,params.id, {
            $set:{
                username: req.body.username,
                email : req.body.email,
                password : req.body.password,
                zipCode : releaseEvents.body.zipCode,
                firstName : req.body.firstName,
            },
        },
        {runValidators: true},
        (err, user)=>{
            if(err){re.json(err)}
            else{res.json(user)}
        })
    },
    destroy: (req, res)=>{
        User.findByIdAndRemove(req.params.id, ()=> res.redirect('/'))
    } 
}