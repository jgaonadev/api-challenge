const swaggerJSDoc = require('swagger-jsdoc')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'api-challenge',
      version: '1.0.0',
      description: 'Api Challenge documentation'
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Local development server'
      }
    ],
    tags: [
      {
        name: 'Files',
        description: 'Informacion de Archivos'
      },
      {
        name: 'FilesList',
        description: 'Lista de Archivos'
      }
    ]
  },
  apis: ['./routes/*.js']
}

const swaggerSpec = swaggerJSDoc(options)

module.exports = swaggerSpec
