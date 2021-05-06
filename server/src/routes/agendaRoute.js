module.exports = app => {
    app.route('/agenda')
        .get((req, res) => {
        res.send("bem vindo a rota de agenda")
    })
}