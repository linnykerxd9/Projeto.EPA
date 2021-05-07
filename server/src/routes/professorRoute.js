module.exports = app => {

    const professorController = require('../controllers/professorController');

    app.route('/professor')
        .get(professorController.listAll)
        .post(professorController.createOne)
}