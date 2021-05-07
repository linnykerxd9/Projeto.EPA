const Status = require('../models').Status;

exports.listAll = (req, res) => {
    Status.findAll()
    .then(status => res.send(status))
    .catch(err => res.send(err))
}
exports.createOne = (req, res) => {
    const { id ,descricao } = req.body;
    Status.create({ id ,descricao })
    .then(status => res.send(status))
    .catch(err => res.send(err))
}