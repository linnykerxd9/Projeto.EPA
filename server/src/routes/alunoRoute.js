module.exports = app => {
    app.route('/aluno')
        .get((req, res) => {
        res.send("bem vindo a rota de aluno")
    })
}