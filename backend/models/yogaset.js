const mongoose = require('mongoose')

const YogasetSchema = new mongoose.Schema({
    name: String,
    time: Number,
    yogakriya: [{
        type: mongoose.Schema.Types.ObjectId,
        
    }]
})

module.exports = mongoose.model('Yogaset', YogasetSchema);
