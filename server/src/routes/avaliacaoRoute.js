module.exports = app => {
    app.route('/avaliacao')
        .get((req, res) => {
        res.send("bem vindo a rota de avaliacao")
    })
}