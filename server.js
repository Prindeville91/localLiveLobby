var express, app, bodyParser, server, mongoose, path, bcrypt, session, cors

express = require('express')
cors = require('cors')

crypto = require('crypto')
app = express()
app.use(cors())
session = require("express-session");
bodyParser = require('body-parser')
path = require('path')
bcrypt = require('mongoose-bcrypt')

app.use(session({
    secret:"gnomon",
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}))

app.use(bodyParser.json())

app.use(express.static(__dirname + '/localLiveLobby/dist/localLiveLobby'))

require('./server/config/mongoose')

mongoose = require('mongoose')
mongoose.promise = global.Promise

var User = mongoose.model('User')

require('./server/config/routes')(app)

server = app.listen(1337)

app.all("*", (req, res,next)=>{
    res.sendFile(path.resolve("./localLiveLobby/dist/localLiveLobby/index.html"))
})

