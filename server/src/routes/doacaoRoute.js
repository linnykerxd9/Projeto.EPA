module.exports = app => {
    app.route('/doacao')
        .get((req, res) => {
        res.send("bem vindo a rota de doacao")
    })
}