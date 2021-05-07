const pedidoDoacao = require('../models').pedidoDoacao;
exports.listAll = (req, res) => {
    pedidoDoacao.findAll()
    .then(pedidoDoacao => res.send(pedidoDoacao))
    .catch(err => res.send(err))
}
exports.createOne = (req, res) => {
    const { id,idAluno,idDoacao } = req.body;
    pedidoDoacao.create({  id,idAluno,idDoacao })
    .then(pedidoDoacao => res.send(pedidoDoacao))
    .catch(err => res.send(err))
}