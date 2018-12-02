const mongoose = require('mongoose')

const PranayamaSchema = new mongoose.Schema({
    name: String,
    time: Number
})

module.exports = mongoose.model('Pranayama', PranayamaSchema);
