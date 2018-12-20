const mongoose = require('mongoose'),
    User = mongoose.model('User'),
    users = require('../controllers/users'),
    characters = require('../controllers/characters')
    
module.exports = function (app) {
    app.get('/users', (req, res) => {
        users.getAll(req, res)
    })
    app.get('/users/:how/:what', (req, res) => {
        console.log("ROUTES JS")
        if (req.params.how === "name") {
            console.log(req.params.what)
            users.getUserByUsername(req, res)
        }
        else if (req.params.how === "email") {
            console.log(req.params.what)

        }
        else if (req.params.how === "id") { console.log(req.params.what) }
    })
    app.post('/login', (req, res) => {
        console.log("ROUTES JS")
        users.login(req, res)


    })
    app.post('/users', (req, res) => {
        users.create(req, res)
        console.log("ROUTES JS")
    })
    app.put('/users/:id', (req, res) => {
        console.log("ROUTES", req.body)
        users.update(req, res)

    })
    app.delete('/users/:id', (req, res) => {
        users.destroy(req, res)
    })

    app.post('/createCharacter/:id', (req, res) => {
        console.log("create character Route")
        characters.createCharacter(req, res)
    })

    app.get('/getAllCharacters/:id', (req, res) => {
        console.log("Get all characters Route")
        characters.getAllCharacters(req, res)
    })

    app.get('/getCharacter/:id', (req, res) => {
        console.log("Get character Route")
        characters.getCharacter(req, res)
    })

    app.delete('/deleteCharacter/:id', (req, res) => {
        console.log("Delete Character Route")
        characters.deleteCharacter(req, res)
    })

    app.delete('/removeCharacter/:pId/:cId', (req, res) => {
        console.log("Remove character Route")
        characters.removeCharacter(req, res)
    })
}