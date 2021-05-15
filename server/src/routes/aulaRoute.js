module.exports = app => {
    const aulaController = require('../controllers/aulaController');
    
    app.route('/aula')
        .get(aulaController.listAll)
        .post(aulaController.createOne)

    app.route('/aula/:id')
       .get(aulaController.listOne)
}