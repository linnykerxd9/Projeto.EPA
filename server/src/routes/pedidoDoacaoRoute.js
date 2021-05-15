module.exports = app => {

    const pedidoDoacaoController = require('../controllers/pedidoDoacaoController');

    app.route('/pedidoDoacao')
        .get(pedidoDoacaoController.listAll)
        .post(pedidoDoacaoController.createOne)
    app.route('/pedidoDoacao/:id')
        .get(pedidoDoacaoController.listOne)
}