const config = require('./config.js')
const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerSpec = require('./swagger')
const cors = require('cors')

const app = express()

app.use(cors())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// router
app.use('/api/v1', require('./src/routes/files-routes.js'))

app.listen(config.apps[0].env.PORT, () => console.log(`Example app listening on port ${config.apps[0].env.PORT}!`))

module.exports = app
