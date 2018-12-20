const   mongoose = require('mongoose'),
        User = mongoose.model('User'),
        users = require('../controllers/users')
module.exports = function(app){
    app.get('/users', (req,res)=>{
        users.getAll(req,res)
    })
    app.get('/users/:how/:what', (req,res)=>{
        console.log("ROUTES JS")
        if(req.params.how === "name"){
            console.log(req.params.what)
            users.getUserByUsername(req,res)
        }
        else if(req.params.how === "email"){
            console.log(req.params.what)
            
        }
        else if(req.params.how === "id"){
            
            users.getUserbyId(req,res)
        }
        else if(req.params.how === "zip"){
            console.log(req.params.how, req.params.what)
            
            users.findUserByZip(req,res)
        }
    })
    app.post('/login', (req,res)=>{
        console.log("ROUTES JS")
        users.login(req, res)
        
        
    })
    app.post('/users', (req,res)=>{
        users.create(req,res)
        console.log("ROUTES JS")
    })
    app.put('/users/:id', (req, res)=>{
        console.log("ROUTES",req.body)
        users.update(req,res)
        
    })
    app.delete('/users/:id', (req,res)=>{
        users.destroy(req,res)
    })
    
}