const mongoose = require('mongoose')

const AsanaSchema = new mongoose.Schema({
    name: String,
    time: Number
})

module.exports = mongoose.model('Asana', AsanaSchema);
