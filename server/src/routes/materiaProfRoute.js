module.exports = app => {

    const materiaProf = require('../controllers/materiaProfController');

    app.route('/materiaProf')
        .get(materiaProf.listAll)
        .post(materiaProf.createOne)

    app.route('/materiaProf/:id')
       .get(materiaProf.listOne)
}