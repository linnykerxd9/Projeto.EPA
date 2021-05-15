module.exports = (app) => {
    const configController = require('../controllers/ConfigController');

    app.route('/config/:id')
        .get(configController.listAll)
        .put(configController.updateUltimoNumero)

    app.route('/config/:id/config')
    .get(configController.listOne)

}