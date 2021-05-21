const Doacao = require('../models').Doacao;
exports.listAll = (req, res) => {
    Doacao.findAll()
    .then(doacao => res.send(doacao))
    .catch(err => res.send(err))
}
exports.createOne = (req, res) => {
    const { id,idDoador,valor } = req.body;
    Doacao.create({  id,idDoador,valor })
    .then(doacao => res.send(doacao))
    .catch(err => res.send(err))
}
