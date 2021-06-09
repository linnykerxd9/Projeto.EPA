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
    
    config.findAll({where:{id:1}})
    .then(config => {

        var preAula = config[0].dataValues.preAula;
        var  ultimoIdAula = config[0].dataValues.ultimoIdAula;
        var ultimoIdAula = ultimoIdAula + 1;
        var id = `${preAula}-${ultimoIdAula}`;

        updateIdAula(ultimoIdAula);

    Status.create({ id,descricao })
    .then(status => res.send(status))
    .catch(err => res.send(err))
})
.catch(err => res.send(err))
}
exports.listOne = (req, res) => {
	Status.findAll(
        {where: {id:req.params.id},
         include: [
             {model: Status}

            ]

})
	 .then(status => res.send(status))
    .catch(err => res.send(err))
}
updateIdStatus = (idStatus) => {
     config.update({ultimoIdStatus: idStatus},{where:{id:1}})
}
