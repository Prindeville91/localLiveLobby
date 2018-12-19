const mongoose = require('mongoose');

var CharacterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    apperance: {
        type: String
    },
    level: {
        type: Number,
        default: 1,
        required: true
    },
    race: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    alignment: {
        type: String,
        defualt: 'Neutral',
        required: true
    },
    strength: {
        type: Number,
        required: true
    },
    dexterity: {
        type: Number,
        required: true
    },
    constitution: {
        type: Number,
        required: true
    },
    intelligence: {
        type: Number,
        required: true
    },
    wisdom: {
        type: Number,
        required: true
    },
    charisma: {
        type: Number,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})