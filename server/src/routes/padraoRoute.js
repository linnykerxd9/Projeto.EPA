module.exports = app => {
    app.route('/')
        .get((req, res) => {
        res.send("bem vindo a rota padrao")
    })
}