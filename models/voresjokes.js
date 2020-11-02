const mongoose = require('mongoose');

const voresjokes = new mongoose.Schema({
    setup: String,
    punchline: String
});

module.exports = mongoose.model('voresjokes', voresjokes);
