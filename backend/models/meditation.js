const mongoose = require('mongoose')

const MeditationSchema = new mongoose.Schema({
    name: String,
    time: Number
})

module.exports = mongoose.model('Meditation', MeditationSchema);
