module.exports = app => {
    const alunoController = require('../controllers/alunoController');
    
    app.route('/aluno')
        .get(alunoController.listAll)
        .post(alunoController.createOne)
}