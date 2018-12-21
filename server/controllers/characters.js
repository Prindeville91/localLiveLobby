var User = require('../models/user'),
    mongoose = require('mongoose'),
    Character = mongoose.model('Character'),
    User = mongoose.model('User')

module.exports = {

    createCharacter: (req, res) => {
        console.log("Por favor")
        console.log(req.params.id)
        let character = new Character(req.body)
        character.save(function (err) {
            console.log("cID:", character._id)
            User.findByIdAndUpdate(req.params.id, { $push: { characters: character._id } }, function (err, update) {
                if (err) {
                    console.log(err)
                    res.json({
                        message: "Couldn't add character"
                    })
                } else {
                    res.json({
                        message: "Added character to user"
                    })
                }
            })
        })
    },

    getAllCharacters: (req, res) => {
        console.log("Getting all charcters")
        console.log(req.params.id)
        User.findById(req.params.id, function (err, characters) {
            if (err) {
                console.log("Something went wrong finding characters")
                res.json({
                    message: "Could not find characters"
                })
            } else {
                console.log(characters);
                res.json(characters)
            }
        })
    },

    getCharacter: (req, res) => {
        console.log("Getting character")
        console.log(req.params.id)
        Character.findById(req.params.id, function (err, character) {
            if(err) {
                console.log("Something went wrong finding character")
                res.json ({
                    message: "Could not find character"
                })
            } else {
                console.log(character)
                res.json(character)
            }
        })
    },

    deleteCharacter: (req, res) => {
        console.log("Deleting Character:", req.params.id)
        Character.findByIdAndDelete(req.params.id, function(err) {
            if(err) {
                console.log("something went wrong when deleting character")
                res.json({
                    message: "Could not delete character"
                })
            } else {
                console.log("Successfully deleted character")
                res.json({
                    message: "Successfully deleted character"
                })
            }
        })
    },

    removeCharacter: (req, res) => {
        console.log("Removing Character:",req.params.cId,"from:",req.params.pId)
        User.findByIdAndUpdate(req.params.pId, {$pull: {characters: req.params.cId}}, {safe: true}, function (err, data) {
            if(err) {
                console.log("Something went wrong removeing Character")
                res.json({
                    message: "Could not delete Character"
                })
            } else {
                console.log("Successfully removed charcater")
                res.json(data)
            }
        })
    }
}
