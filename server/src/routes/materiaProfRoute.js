module.exports = app => {

    const materiProf = require('../controllers/materiaProfController');

    app.route('/materiaProf')
        .get(materiProf.listAll)
        .post(materiProf.createOne)
}