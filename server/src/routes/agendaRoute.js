module.exports = app => {
    const   agendaController = require('../controllers/agendaController');
    
    app.route('/agenda')
        .get(agendaController.listAll)
        .post(agendaController.createOne)

    app.route('/agenda/:id')
       .get(agendaController.listOne)
}