module.exports = app => {
    const avalicaoController = require('../controllers/avaliacaoController');
    
    app.route('/avaliacao')
        .get(avalicaoController.listAll)
        .post(avalicaoController.createOne)
}