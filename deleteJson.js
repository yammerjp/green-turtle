const fs = require('fs')
const articleIdPaths = require('./article-ids-extends-nuxt-config.js')
const config = require('./md2json-config.js')

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

articleIdPaths.forEach((path) => {
  deleteFile(`${path}/${config.jsonFileName}`)
})

// eslint-disable-next-line no-use-before-define
deleteFile('./article-ids-extends-nuxt-config.js')
