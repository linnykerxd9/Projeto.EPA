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
        var preLocalizacao = config[0].dataValues.preLocalizacao;
        var ultimoIdLocalizacao = config[0].dataValues.ultimoIdLocalizacao;
        var ultimoIdLocalizacao = ultimoIdLocalizacao + 1;
        var id = `${preLocalizacao}-${ultimoIdLocalizacao}`;
   
        updateIdLocalizacoes(ultimoIdLocalizacao);
    Localizacoes.create({  id,longitude,latitude,situacao,idProfessor })
    .then(localizacoes => res.send(localizacoes))
    .catch(err => console.log(err))
})
.catch(err => console.log(err))
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
updateIdLocalizacoes = (ultimoIdLocalizacao) => {
     config.update({ultimoIdLocalizacao: ultimoIdLocalizacao},{where:{id:1}})
}