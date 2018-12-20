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
    str: {
        type: Number,
        required: true
    },
    dex: {
        type: Number,
        required: true
    },
    con: {
        type: Number,
        required: true
    },
    int: {
        type: Number,
        required: true
    },
    wis: {
        type: Number,
        required: true
    },
    cha: {
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

mongoose.model('Character', CharacterSchema)