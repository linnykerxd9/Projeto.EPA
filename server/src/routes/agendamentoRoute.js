module.exports = app => {
    app.route('/agendamento')
        .get((req, res) => {
        res.send("bem vindo a rota de agendamento")
    })
}