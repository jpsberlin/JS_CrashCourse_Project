const PranayamaModel = require('../models/pranayama')

async function findAll() {
    return PranayamaModel.find()
}

async function add(pranayama) {
    return PranayamaModel.create(pranayama)
}

async function del(_id) {
    return PranayamaModel.remove({ _id })
}

async function find(_id) {
    return PranayamaModel.findOne({ _id })
}

module.exports = {
    findAll,
    find,
    add,
    del
}
