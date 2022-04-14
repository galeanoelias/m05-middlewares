const adminUsers = ['Ada', 'Greta', 'Vim', 'Tim']

const admin = (req, res, next) => {
    if(adminUsers.includes(req.query.user)) {
        next()
    }
    res.send("No tienes los privilegios para ingresar")
}

module.exports = admin