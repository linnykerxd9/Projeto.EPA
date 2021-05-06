module.exports = app => {
    app.route('/materia')
        .get((req, res) => {
        res.send("bem vindo a rota da materia")
    })
}