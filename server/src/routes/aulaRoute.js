module.exports = app => {
    app.route('/aula')
        .get((req, res) => {
        res.send("bem vindo a rota de aula")
    })
}