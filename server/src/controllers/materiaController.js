const Materia = require('../models').Materia;

exports.listAll = (req, res) => {
    Materia.findAll()
    .then(materia => res.send(materia))
    .catch(err => res.send(err))
}
exports.createOne = (req, res) => {
    const { id,nome,valorMateria,escolaridade } = req.body;
    Materia.create({  id,nome,valorMateria,escolaridade })
    .then(materia => res.send(materia))
    .catch(err => res.send(err))
}
exports.listOne = (req, res) => {
	Materia.findAll({where: {id:req.params.id}})
	.then(materia => res.send(materia))
	.catch(err => res.send(err))
}
exports.updateOne = (req, res) => {
  const{nome,ValorMateria,escolaridade} = req.body;
  Materia.update({nome,ValorMateria,escolaridade},{where:{id:req.params.id}})
  .then(materia => {
  	res.json({
  		message: "Matéria atualizada"
  	})
  })
  .catch(err => res.send(err))
}