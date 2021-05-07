module.exports = app => {

        const materiaController = require('../controllers/materiaController');
    
        app.route('/materia')
            .get(materiaController.listAll)
            .post(materiaController.createOne)
    
}