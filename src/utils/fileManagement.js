const fs = require('fs')
const pathjoin = require('path').join

function readCsvFile (filePath) {
  const lines = fs.readFileSync(filePath, 'utf-8').split('\n')
  return lines.map((line) => line.trim().split(','))
}

function isValidRow ([_, text, number, hex]) {
  return text && number && hex && /^[0-9a-fA-F]{32}$/.test(hex)
}

function parseCsvFile (file) {
  const filePath = pathjoin(__dirname, '../data', file)
  const csvData = readCsvFile(filePath)
  const lines = csvData.filter(isValidRow).map(([_, text, number, hex]) => ({ text, number: Number(number), hex }))
  return { file, lines }
}

module.exports = { parseCsvFile, readCsvFile, isValidRow }
