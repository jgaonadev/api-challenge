/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-undef */
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const api = require('../src/services/api/api-service')
const sinon = require('sinon')
const pathjoin = require('path').join
const fs = require('fs')
const { getFiles, getFile, processFiles } = require('../src/controllers/files-controller')

chai.use(chaiAsPromised)
const expect = chai.expect

describe('Controller', () => {
  describe('getFiles', () => {
    it('should return processed files', async () => {
      const data = { files: ['file1.csv', 'file2.csv'] }
      const processedFiles = [{ name: 'file1.csv', lines: [['a', 'b'], ['c', 'd']] }]
      api.getApiFiles = () => Promise.resolve(data)
      let getFile = () => Promise.resolve()
      let processFiles = () => processedFiles

      const req = {}
      const res = { json: () => {} }
      const next = () => {}

      const resJsonSpy = sinon.spy(res, 'json')
      await getFiles(req, res, next)

      expect(resJsonSpy.calledOnce).to.be.true
    })

    it('should call next with error if api.getApiFiles throws an error', async () => {
      const errorMessage = 'An error occurred'
      api.getApiFiles = () => Promise.reject(new Error(errorMessage))

      const req = {}
      const res = {}
      const next = sinon.spy()

      await getFiles(req, res, next)

      expect(next.calledOnce).to.be.true
      expect(next.firstCall.args[0].message).to.equal(errorMessage)
    })
  })

  describe('getFile', () => {
    it('should write file to disk if data status is falsy', async () => {
      const fileName = 'file1.csv'
      const data = { status: false, content: 'a,b\nc,d' }
      api.getApiFile = () => Promise.resolve(data)
      const writeFileStub = sinon.stub(fs.promises, 'writeFile')

      await getFile([fileName])

      expect(writeFileStub.calledOnce).to.be.true
      expect(writeFileStub.firstCall.args[0]).to.equal(pathjoin(__dirname, '../src/data/' + fileName))

      writeFileStub.restore()
    })

    it('should not write file to disk if data status is truthy', async () => {
      const fileName = 'text1.csv'
      const data = { status: true, content: 'a,b\nc,d' }
      api.getApiFile = () => Promise.resolve(data)
      const writeFileStub = sinon.stub(fs.promises, 'writeFile')

      await getFile([fileName])

      expect(writeFileStub.called).to.be.false

      writeFileStub.restore()
    })

    it('should log error if api.getApiFile throws an error', async () => {
      const fileName = 'text1.csv'
      const errorMessage = 'An error occurred'
      api.getApiFile = () => Promise.reject(new Error(errorMessage))
      const consoleErrorStub = sinon.stub(console, 'error')

      await getFile([fileName])

      expect(consoleErrorStub.calledOnce).to.be.true
      expect(consoleErrorStub.firstCall.args[0].message).to.equal(errorMessage)

      consoleErrorStub.restore()
    })
  })

  describe('processFiles', () => {
    afterEach(() => {
      sinon.restore()
    })

    it('should return an empty array if there are no CSV files with non-empty lines', () => {
      sinon.stub(fs, 'readdirSync').returns(['empty1.csv', 'empty2.csv'])
      sinon.stub(fs, 'readFileSync').returns('')

      const expected = []
      const actual = processFiles()

      expect(actual).to.deep.equal(expected)
    })
  })
})
