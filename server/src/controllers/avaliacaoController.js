const Avaliacao = require('../models').Avaliacao;
exports.listAll = (req, res) => {
    const status = {
        status:"pendente"
    }
    res.send(status);
}
exports.createOne = (req, res) => {
    const response = {
        message: "status criado com sucesso",
        data: req.body
    }
    res.send(response)
}