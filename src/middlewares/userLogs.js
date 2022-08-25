const fs = require('fs')
const path = require('path')
module.exports = (req, res, next) => {

    fs.appendFileSync(path.join(__dirname, '../logs/userLogs.text'),`El usuario ingresó a la ruta: ${req.url} \n`)
   
    next()
}  