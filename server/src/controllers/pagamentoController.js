const Pagamento = require('../models').Pagamento;
const Status = require('../models').Status

exports.listAll = (req, res) => {
    Pagamento.findAll()
        .then(pagamento =>{ res.send(pagamento)})
        .catch(err =>{ res.send(err) } )
}
exports.createOne = (req, res) => {
    const { id,valor,metodoPagamento,contaBancoReceber,contaBancoPagador,idAula,idStatus } = req.body;
    Pagamento.create({  id,valor,metodoPagamento,contaBancoReceber,contaBancoPagador,idAula,idStatus })
    .then(pagamento => res.send(pagamento))
    .catch(err => res.send(err))
}

exports.listOne = (req, res) => {
	Pagamento.findAll({where: {id:req.params.id}})
	.then(pagamento => res.send(pagamento))
	.catch(err => res.send(err))
}