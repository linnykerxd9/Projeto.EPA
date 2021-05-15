module.exports = app => {
    const localizacaoController = require('../controllers/localizacaoController');
    
        app.route('/localizacao')
            .get(localizacaoController.listAll)
            .post(localizacaoController.createOne)

        app.route('/localizacao/:id')
           .get(localizacaoController.listOne)
}