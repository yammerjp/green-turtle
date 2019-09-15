const fs = require('fs')

const isExistFile = (file) => {
  try {
    fs.statSync(file)
    return true
  } catch (err) {
    if (err.code === 'ENOENT') {
      return false
    }
  }
}

const deleteFile = (path) => {
  if (!isExistFile(path)) {
    console.log(` ... notfound : ${path}`)
    return
  }
  fs.unlink(path, (err) => {
    if (err) {
      throw err
    }
    console.log(`Delete: ${path}`)
  })
}

const config = require('./md2json-config.js')
if (!isExistFile(config.extendsNuxtConfig)) { return }
const articleIdPaths = require(config.extendsNuxtConfig)

articleIdPaths.forEach((path) => {
  deleteFile(`${path}/${config.jsonFileName}`)
})

deleteFile(config.extendsNuxtConfig)
deleteFile(`assets/allArticles.json`)
