const MeditationModel = require('../models/meditation')

async function findAll() {
    return MeditationModel.find()
}

async function add(meditation) {
    return MeditationModel.create(meditation)
}

async function del(_id) {
    return MeditationModel.remove({ _id })
}

async function find(_id) {
    return MeditationModel.findOne({ _id })
}

module.exports = {
    findAll,
    find,
    add,
    del
}
