module.exports = app => {
    const alunoController = require('../controllers/alunoController');
    
    app.route('/aluno')
        .get(alunoController.listAll)
        .post(alunoController.createOne)

    app.route('/aluno/:id')
      .get(alunoController.listOne)
}