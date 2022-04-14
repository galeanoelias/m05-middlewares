const fs = require('fs')

const userLog = (req, res, next) => {
    fs.appendFileSync('src/log/userLogs.txt', `El usuario ingreso a la ruta: ${req.url} \n`)

    next()
}

module.exports = userLog