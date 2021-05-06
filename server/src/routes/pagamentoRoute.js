module.exports = app => {
    app.route('/pagamento')
        .get((req, res) => {
        res.send("bem vindo a rota de pagamento")
    })
}