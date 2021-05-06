
exports.listAll = (req, res) => {
    const status = {
        status:"jonas"
    }
    res.send(status);
}
exports.createOne = (req, res) => {
    const response = {
        message: "professor criado com sucesso",
        data: req.body
    }
    res.send(response)
}