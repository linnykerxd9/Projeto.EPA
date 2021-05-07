const Pagamento = require('../models').Pagamento;
exports.listAll = (req, res) => {
    Pagamento.findAll()
        .then(pagamento => {
            console.log(req.body);
            res.send(pagamento)
        })
        .catch(err => { console.log(req.body);res.send(err) })
}
exports.createOne = (req, res) => {
    const { id,valor,metodoPagamento,contaBancoReceber,contaBancoPagador,idAula,idStatus } = req.body;
    Pagamento.create({  id,valor,metodoPagamento,contaBancoReceber,contaBancoPagador,idAula,idStatus })
    .then(pagamento => res.send(pagamento))
    .catch(err => res.send(err))
}