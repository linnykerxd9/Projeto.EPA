const Materia = require('../models').Materia;
const materiaProf = require('../models').materiaProf;

exports.listAll = (req, res) => {
    Materia.findAll()
    .then(materia => res.send(materia))
    .catch(err => res.send(err))
}
exports.createOne = (req, res) => {
    const { id,nome,valorMateria,escolaridade,serie } = req.body;
    
    config.findAll({where: {id:1}})
    .then(config => {
   
        var preMateria = config[0].dataValues.preMateria;
        var  ultimoIdMateria = config[0].dataValues.ultimoIdMateria;
        var ultimoIdMateria = ultimoIdMateria + 1;
        var id = `${preMateria}-${ultimoIdMateria}`;
   
        updateIdMateria(ultimoIdMateria);
    Materia.create({  id,nome,valorMateria,escolaridade,serie })
    .then(materia => res.send(materia))
    .catch(err => res.send(err))
})
.catch(err => res.send(err))
}
exports.listOne = (req, res) => {
	Materia.findAll(
        {where: {id:req.params.id}})

	.then(materia => res.send(materia))
	.catch(err => res.send(err))
}
exports.updateOne = (req, res) => {
  const{nome,ValorMateria,escolaridade,serie} = req.body;
  Materia.update({nome,ValorMateria,escolaridade,serie},{where:{id:req.params.id}})
  .then(materia => {
  	res.json({
  		message: "Matéria atualizada"
  	})
  })
  .catch(err => res.send(err))
}
exports.deleteOne = (req, res) => {
  Materia.destroy({cascade: true, where:{id:req.params.id}})
  .then(materia => {
         res.json({
            message: "materia deletado com sucesso",
            data: materia
          })
        })
      .catch(err => console.log(err))
}
updateIdMateria = (idMateria) => {
  convaMateriafig.update({ ultimoIdMateria: idMateria }, { where: { id: 1 } })
}