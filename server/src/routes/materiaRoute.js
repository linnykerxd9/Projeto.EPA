module.exports = app => {

        const materiaController = require('../controllers/materiaController');
    
        app.route('/materia')
            .get(materiaController.listAll)
            .post(materiaController.createOne)

        app.route('/materia/:id')
        .get(materiaController.listOne)
        .put(materiaController.updateOne)
        .delete(materiaController.deleteOne)
    
}