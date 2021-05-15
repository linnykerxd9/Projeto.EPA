const Status = require('../models').Status;
const Config = require('../models').Config;
const ConfigController = require('../controllers/ConfigController')
const { QueryTypes } = require('sequelize');
exports.listAll = (req, res) => {
    Status.findAll()
    .then(status => res.send(status))
    .catch(err => res.send(err))
}
exports.createOne = (req, res) => {
    const { id,descricao } = req.body;
    Status.create({ id,descricao })
    .then(status => res.send(status))
    .catch(err => res.send(err))
}
exports.listOne = (req, res) => {
	Status.findAll({where: {id:req.params.id}})
	 .then(status => res.send(status))
    .catch(err => res.send(err))
}