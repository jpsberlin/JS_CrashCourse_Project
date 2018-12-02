const AsanaModel = require('../models/asana')

async function findAll() {
    return AsanaModel.find()
}

async function add(asana) {
    return AsanaModel.create(asana)
}

async function del(_id) {
    return AsanaModel.remove({ _id })
}

async function find(_id) {
    return AsanaModel.findOne({ _id })
}

module.exports = {
    findAll,
    find,
    add,
    del
}
