const Pagamento = require('../models').Pagamento;
const Status = require('../models').Status

exports.listAll = (req, res) => {
    Pagamento.findAll()
        .then(pagamento =>{ res.send(pagamento)})
        .catch(err =>{ res.send(err) } )
}
exports.createOne = (req, res) => {
    const { id,valor,metodoPagamento,contaBancoReceber,contaBancoPagador,idAula,idStatus } = req.body;
    
    config.findAll({where:{id:1}})
.then(config => {

        var prePagamento = config[0].dataValues.prePagamento;
        var  ultimoIdPagamento = config[0].dataValues.ultimoIdPagamento;
        var ultimoIdPagamento = ultimoIdPagamento + 1;
        var id = `${prePagamento}-${ultimoIdPagamento}`;

        updateIdAula(ultimoIdAula);

    Pagamento.create({  id,valor,metodoPagamento,contaBancoReceber,contaBancoPagador,idAula,idStatus })
    .then(pagamento => res.send(pagamento))
    .catch(err => res.send(err))
})
.catch(err => res.send(err))
}

exports.listOne = (req, res) => {
	Pagamento.findAll(
        {
            where: {id:req.params.id},
            include: [
             {model: Pagamento},
             {model: Aula},
             {model: Status}
            ]

})
	.then(pagamento => res.send(pagamento))
	.catch(err => res.send(err))
}
updateIdPagamento = (idAvaliacao) => {
     config.update({ultimoIdPagamento: idPagamento},{where:{id:1}})
}