const Avaliacao = require('../models').Avaliacao;
const Aula = require('../models').Aula;

exports.listAll = (req, res) => {
    Avaliacao.findAll()
    .then(avaliacao => res.send(avaliacao))
    .catch(err => res.send(err))
}
exports.createOne = (req, res) => {
    const { id,idAula,idAluno,idProfessor,estrelas,comentario } = req.body;
    Avaliacao.create({  id,idAula,idAluno,idProfessor,estrelas,comentario})
    .then(avaliacao => res.send(avaliacao))
    .catch(err => res.send(err))
}
exports.listOne = (req, res) => {
	Avaliacao.findAll({where: {id:req.params.id}})
	.then(avaliacao => res.send(avaliacao))
	.catch(err => res.send(err))
}