module.exports = app => {
    const doacaoController = require('../controllers/doacaoController');
    
    app.route('/doacao')
        .get(doacaoController.listAll)
        .post(doacaoController.createOne)
}