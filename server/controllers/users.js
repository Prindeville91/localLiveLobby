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
    
        var id = req.params.what
        User.findById(id, (err, user)=>{
            if(err){res.json(err)}
            else{res.json(user)}
        })
    },
  
    getUserByUsername:(req,res)=>{
        console.log(req.params)
        console.log("USERS JS PRE FIND")
        User.find({username: req.params.username}, (err,user)=>{
            console.log("USERS JS POST GOT")
            if(err){
                console.log(err)
                res.json(err)}
            else{
                console.log(user)
                res.json(user)}
        })
        
    },
    getUserByEmail:(req,res)=>{
        User.find({email: req.params.email}, (err,user)=>{
            if(err){res.json(err)}
            else{res.json(user)}
        })

    },
    findUserByZip:(req,res)=>{
        console.log(req.params)
        User.find({zipCode: req.params.what}, (err,user)=>{
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
    login: (req, res)=>{
        console.log(req.body)
        var username = req.body.user
        var password = req.body.pw
        console.log(username, password)
        User.findOne({'username': username},(req, user)=>{
            console.log(user._id)
            if (user == null){
                console.log("user does not exit")
            }
            else{
                user.verifyPassword(password, (err, valid)=>{
                    if(err){res.json(err)}
                    else if(valid){res.json(user)}
                    else{
                        console.log("BAD MATCH")
                        res.redirect('/')
                    }
                })
            }
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