const api = require('../services/api/api-service')
const pathjoin = require('path').join
const fs = require('fs')
const { parseCsvFile } = require('../utils/fileManagement')

async function getFiles (req, res, next) {
  try {
    const data = await api.getApiFiles()
    const filesNames = data.files
    await getFile(filesNames)
    const processedFiles = processFiles()
    res.json(processedFiles)
  } catch (error) {
    next(error)
  }
}

async function getFile (fileNames) {
  for (const fileName of fileNames) {
    try {
      const data = await api.getApiFile(fileName)
      if (!data.status) {
        await fs.promises.writeFile(pathjoin(__dirname, '../data/' + fileName), data || '')
      }
    } catch (error) {
      console.error(error)
    }
  }
}

function processFiles () {
  const files = fs.readdirSync(pathjoin(__dirname, '../data')).filter((file) => file.endsWith('.csv'))
  const data = files.map(parseCsvFile).filter(({ lines }) => lines.length > 0)
  return data
}

async function getFilesList (res, req, next) {
  try {
    const data = await api.getApiFiles()
    const filesNames = data.files
    next(JSON.stringify(filesNames))
  } catch (error) {
    next(error)
  }
}

module.exports = { getFiles, getFile, processFiles, getFilesList }
