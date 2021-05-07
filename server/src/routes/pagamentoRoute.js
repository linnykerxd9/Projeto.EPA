module.exports = app => {

    const pagamentoController = require('../controllers/pagamentoController');

    app.route('/pagamento')
        .get(pagamentoController.listAll)
        .post(pagamentoController.createOne)
}