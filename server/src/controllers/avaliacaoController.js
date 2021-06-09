const Avaliacao = require('../models').Avaliacao;
const Aula = require('../models').Aula;

exports.listAll = (req, res) => {
    Avaliacao.findAll()
    .then(avaliacao => res.send(avaliacao))
    .catch(err => res.send(err))
}
exports.createOne = (req, res) => {
    const { id,idAula,idAluno,idProfessor,estrelas,comentario } = req.body;
    config.findAll({where:{id:1}})
.then(config => {

        var preAvaliacao = convaliacaofig[0].dataValues.preAvaliacao;
        var  ultimoIdAvaliacao = config[0].dataValues.ultimoIdAvaliacao;
        var ultimoIdAvaliacao = ultimoIdAvaliacao + 1;
        var id = `${preAvaliacao}-${ultimoIdAvaliacao}`;

        updateIdAvaliacao(ultimoIdAvaliacao);

  Avaliacao.create({  id,idAula,idAluno,idProfessor,estrelas,comentario})
    .then(avaliacao => res.send(avaliacao))
    .catch(err => res.send(err))
})
.catch(err => res.send(err))
}


exports.listOne = (req, res) => {
	Avaliacao.findAll(
        {
            where: {id:req.params.id},
            include: [
             {model: Avaliacao},
             {model: Aula},
             {model: Aluno},
             {model: Professor}
            ]

})
	.then(avaliacao => res.send(avaliacao))
	.catch(err => res.send(err))
}
updateIdAvaliacao = (idAvaliacao) => {
     config.update({ultimoIdAvaliacao: idAvaliacao},{where:{id:1}})
}