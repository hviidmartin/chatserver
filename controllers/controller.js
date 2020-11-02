// controller.js
const mongoose = require('mongoose');
const config = require('../config');
const voresjokes = require('../models/voresjokes');
const config = require('../config');

mongoose.connect(config.databaseURI, {useNewUrlParser: true, useUnifiedTopology: true});

exports.createJoke = function (setup, punchline) {
    return voresjokes.create({
        setup,
        punchline
        
    })
};

exports.getVoresJob = function (id) {
    return besked.findById(id).exec();
};

exports.getVoresJokes = function () {
    return voresJokes.find().exec();
};