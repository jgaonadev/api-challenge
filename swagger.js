const swaggerJSDoc = require('swagger-jsdoc')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'api-challenge',
      version: '1.0.0',
      description: 'Este es un API REST que se encarga de obtener información de una API externa' +
       'y reformatearla para exponerla de una manera más adecuada. El API se comunica con la API externa' +
       'a través de llamadas HTTP, y procesa los datos recibidos para ofrecer una estructura de respuesta' +
       'consistente y fácil de usar.<br/>' +
       '<br/> La funcionalidad principal del API es obtener los datos de la API externa y reformatearlos' +
       'para exponerlos de una manera más conveniente. Esto incluye ' +
       'la validación y normalización de los datos, y la generación de una estructura de respuesta coherente y fácil de usar.<br/>' +
       '<br/>En cuanto a las librerías y frameworks utilizadas<br/>' +
    '• [ExpressJs](https://expressjs.com/)<br/>' +
    '• [Mocha](https://mochajs.org/)<br/>' +
    '• [Chai](https://www.chaijs.com/)<br/>' +
    '• [StandardJs](https://standardjs.com/)<br/>'
    },
    servers: [
      {
        url: 'http://localhost:3000/api/v1',
        description: 'Local development server'
      },
      {
        url: 'https://api-challenge-2021.herokuapp.com/api/v1',
        description: 'Production server'
      }
    ],
    tags: [
      {
        name: 'Files',
        description: 'Informacion de Archivos'
      }
    ],
    paths: {
      '/files/data': {
        get: {
          tags: [
            'Files'
          ],
          summary: 'Lista los archivos disponibles',
          description: 'Obtiene la lista de archivos disponibles',
          operationId: 'getFiles',
          responses: {
            200: {
              description: 'Successful operation',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/FileListResponse'
                  }
                }
              }
            },
            500: {
              description: 'Internal server error',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/ErrorResponse'
                  }
                }
              }
            }
          }
        }
      }
    },
    components: {
      schemas: {
        FileListResponse: {
          type: 'object',
          properties: {
            file: {
              type: 'string',
              description: 'Nombre del archivo',
              example: 'file1.csv'
            },
            lines: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  text: {
                    type: 'string',
                    description: 'Texto del archivo',
                    example: 'RgTya'
                  },
                  number: {
                    type: 'integer',
                    description: 'Numero del archivo',
                    example: 64075909
                  },
                  hex: {
                    type: 'string',
                    description: 'Hexadecimal del archivo',
                    example: '70ad29aacf0b690b0467fe2b2767f765'
                  }
                }
              }
            }
          }
        },
        ErrorResponse: {
          type: 'object',
          properties: {
            code: {
              type: 'string',
              description: 'Código de error',
              example: 'API-500'
            },
            message: {
              type: 'string',
              description: 'Error al obtener los datos de la API',
              example: 'File error'
            },
            details: {
              type: 'string',
              description: 'Detalles del error',
              example: 'FILE_ERROR'
            }
          },
          required: [
            'code',
            'message',
            'details'
          ],
          example: {
            code: 'API-500',
            message: 'File error',
            details: 'FILE_ERROR',
            status: 500
          }
        }
      }
    }
  },
  apis: ['./routes/*.js']
}

const swaggerSpec = swaggerJSDoc(options)

module.exports = swaggerSpec
