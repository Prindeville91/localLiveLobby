var User = require('../models/user'),
    mongoose = require('mongoose'),
    Character = mongoose.model('Character')
User = mongoose.model('User')

module.exports = {

    createCharacter: (req, res) => {
        console.log("Por favor")
        console.log(req.params.id)
        let character = new Character(req.body)
        character.save(function (err) {
            console.log("cID:",character._id)
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
    }
}