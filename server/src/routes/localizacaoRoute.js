module.exports = app => {
    app.route('/localizacao')
        .get((req, res) => {
        res.send("bem vindo a rota de localizacao")
    })
}