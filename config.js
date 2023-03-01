require('dotenv').config()

module.exports = {

  NODE_ENV: process.env.NODE_ENV || 'development',
  HOST: process.env.HOST || '127.0.0.1',
  PORT: process.env.PORT || 3000,
  API_KEY: process.env.API_KEY || 'aSuperSecretKey',
  API_URL_BASE: process.env.API_URL_BASE || 'https://echo-serv.tbxnet.com/v1/secret'

}
