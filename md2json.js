const fs = require('fs')
const yamlFront = require('yaml-front-matter')
const marked = require('marked')

const config = require('./md2json-config.js')

fs.readdir(config.articleFolderPath,
  (err, files) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(err)
      throw err
    }
    const articleIds = files.filter(file => isExistFile(`${config.articleFolderPath}/${file}/${config.mdFileName}`))
    md2jsons(articleIds)
  }
)

const md2json = (inputFileName, outputFileName) => {
  fs.readFile(inputFileName, 'utf-8', (err, fileContents) => {
    if (err !== null) {
      // eslint-disable-next-line no-console
      console.log(err)
      throw err
    }
    if (fileContents === undefined) {
      // eslint-disable-next-line no-console
      console.log('fileContents is undefind')
      throw err
    }

    const obj = yamlFront.loadFront(fileContents)
    if (obj.__content === undefined) {
      // eslint-disable-next-line no-console
      console.log('Error: __content is undefind')
      throw err
    }

    obj.html = marked(obj.__content)
    delete obj.__content
    obj.summary = obj.html.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, ' ').slice(0, 50)

    const json = JSON.stringify(obj)

    fs.writeFile(outputFileName, json, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log(err)
        throw err
      }
    })
  })
}

const md2jsons = (articleIds) => {
  let articleIdsJsContent = 'export default ['
  articleIds.forEach((articleId, idx) => {
    md2json(`${config.articleFolderPath}/${articleId}/${config.mdFileName}`, `${config.articleFolderPath}/${articleId}/${config.jsonFileName}`)

    articleIdsJsContent += ` '/article/${articleId}'${(idx === articleIds.length - 1) ? ' ]\n' : ','}`
  })
  fs.writeFile(config.extendsNuxtConfig, articleIdsJsContent, (err) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(err)
      throw err
    }
  })
}

function isExistFile (file) {
  try {
    fs.statSync(file)
    return true
  } catch (err) {
    if (err.code === 'ENOENT') {
      return false
    }
  }
}
