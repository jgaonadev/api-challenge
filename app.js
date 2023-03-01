const config = require('./config.js')
const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerSpec = require('./swagger')

const app = express()

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// router
app.use('/api/v1', require('./src/routes/files-routes.js'))

app.listen(config.PORT, () => console.log(`Example app listening on port ${config.PORT}!`))

module.exports = app
