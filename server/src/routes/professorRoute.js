module.exports = app => {
    
    app.route('/professor')
        .get((req, res) => {
        res.send("Bem vindo a rota do professor")
    })
}