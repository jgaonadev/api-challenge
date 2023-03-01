const config = require('../../../config.js')
const axios = require('axios')

const configAxios = {
  method: 'get',
  url: config.API_URL_BASE,
  headers: {
    authorization: 'Bearer ' + config.API_KEY
  }
}

async function getApiFiles () {
  const configWithFiles = { ...configAxios, url: configAxios.url + '/files' }
  return axios(configWithFiles)
    .then(response => {
      const data = response.data
      return data
    })
    .catch(error => {
      console.log(error)
      throw new Error('Error al obtener los datos de la API')
    })
}

async function getApiFile (fileName) {
  const configWithFiles = { ...configAxios, url: configAxios.url + '/file' + '/' + fileName }
  return axios(configWithFiles)
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.warn('Error al obtener los datos de la API - ' + error.response.data.message)
      return error.response.data
    })
}

module.exports = {
  getApiFiles,
  getApiFile
}
