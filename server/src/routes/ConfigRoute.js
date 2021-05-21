module.exports = (app) => {
    const configController = require('../controllers/ConfigController');

    app.route('/config')
        .get(configController.listAll)
        

    app.route('/config/:id')
    .get(configController.listOne)
    .put(configController.updateUltimoNumero)
}