const Express = require('express')
const routes = Express.Router()
const { getFiles, getFilesList } = require('../controllers/files-controller')

routes.get('/files/data', getFiles)

routes.get('/files/list', getFilesList)

module.exports = routes
