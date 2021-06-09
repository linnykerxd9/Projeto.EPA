const pedidoDoacao = require('../models').pedidoDoacao;
const Aluno = require('../models').Aluno;
exports.listAll = (req, res) => {
    pedidoDoacao.findAll()
    .then(pedidoDoacao => res.send(pedidoDoacao))
    .catch(err => res.send(err))
}
exports.createOne = (req, res) => {
    const { id,idAluno,idDoacao } = req.body;
    
    config.findAll({where:{id:1}})
    .then(config => {

        var pre = config[0].dataValues.pre;
        var  ultimoId = config[0].dataValues.ultimoId;
        var ultimoId = ultimoId + 1;
        var id = `${pre}-${ultimoId}`;

        updateIdAula(ultimoIdAula);

    pedidoDoacao.create({  id,idAluno,idDoacao })
    .then(pedidoDoacao => res.send(pedidoDoacao))
    .catch(err => res.send(err))
})
.catch(err => res.send(err))
}

exports.listOne = (req, res) => {
	PedidoDoacao.findAll(
        {
            where: {id:req.params.id},
            include: [
             {model: Avaliacao},
             {model: Aula},
             {model: Aluno},
             {model: Professor}
            ]

})
	.then(pedidoDoacao => res.send(pedidoDoacao))
    .catch(err => res.send(err))
}
updateIdPedidoDoacao = (idPedidoDoacao) => {
     config.update({ultimoIdPedidoDoacao: idPedidoDoacao},{where:{id:1}})
}