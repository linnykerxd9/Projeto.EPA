const Localizacoes = require('../models').Localizacoes;
const Professor = require('../models').Professor;
const config = require('../models').Config;

exports.listAll = (req, res) => {
    Localizacoes.findAll()
    .then(localizacoes => res.send(localizacoes))
    .catch(err => res.send(err))
}
exports.createOne = (req, res) => {
    const { id,longitude,latitude,situacao,idProfessor } = req.body;
    
    config.findAll({where: {id:1}})
    .then(config => {
   
        var preLocalizacoes = config[0].dataValues.preLocalizacoes;
        var  ultimoIdLocalizacoes = config[0].dataValues.ultimoIdLocalizacoes;
        var ultimoIdLocalizacoes = ultimoIdLocalizacoes + 1;
        var id = `${preALocalizacoes}-${ultimoIdLocalizacoes}`;
   
        updateIdLocalizacoes(ultimoIdLocalizacoes);
    Localizacoes.create({  id,longitude,latitude,situacao,idProfessor })
    .then(localizacoes => res.send(localizacoes))
    .catch(err => res.send(err))
})
.catch(err => res.send(err))
}
exports.listOne = (req,res) => {
	Localizacoes.findAll(
        {where: {id: req.params.id},
         include: [
             {model: Localizacoes},
             {model: Professor}
            ]

})
	.then(localizacoes => res.send(localizacoes))
    .catch(err => res.send(err))
}
updateIdLocalizacoes = (idLocalizacoes) => {
     config.update({ultimoIdLocalizacoes: idLocalizacoes},{where:{id:1}})
}