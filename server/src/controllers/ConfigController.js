const Config = require('../models').Config

exports.listAll = (req, res) => {
    Config.findAll({where:{id:1}})
        .then(config => {
            res.send(config)
            return config;
        })
    .catch(err => res.send(err))
}

exports.updateUltimoNumero = (req, res) => {
    const { ultimoIdProfessor, ultimoIdAluno, ultimoIdAula, ultimoIdAvaliacao,
        ultimoIdDoacao,ultimoIdLocalizacao,ultimoIdMateria,ultimoIdAgenda,
        ultimoIdPagamento,ultimoIdStatus,ultimoIdMateriaProf,ultimoIdPedidoDoacao } = req.body
    Config.update({
        ultimoIdProfessor, ultimoIdAluno, ultimoIdAula, ultimoIdAvaliacao,
        ultimoIdDoacao,ultimoIdLocalizacao,ultimoIdMateria,ultimoIdAgenda,
        ultimoIdPagamento,ultimoIdStatus,ultimoIdMateriaProf,ultimoIdPedidoDoacao
        },
        {
            where:
            {
                id: req.params.id
            }
        })
    .then(config => res.send(config))
    .catch(err => res.send(err))
}

exports.listOne = (req, res) => {
    Config.findAll({where: {id:req.params.id}})
    .then(config => res.send(config))
    .catch(err => res.send(err))

}