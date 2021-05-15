module.exports = app => {

    const statusController = require('../controllers/statusController');

    app.route('/status')
        .get(statusController.listAll)
        .post(statusController.createOne)

    app.route('/status/:id')
       .get(statusController.listOne)
}