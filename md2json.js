const fs = require('fs')
const yamlFront = require('yaml-front-matter')
const marked = require('marked')

const config = require('./md2json-config.js')

const allArticles = []
let articleIds = []

fs.readdir(config.articleFolderPath,
  (err, files) => {
    if (err) {
      console.log(err)
      throw err
    }
    articleIds = files.filter(file => isExistFile(`${config.articleFolderPath}/${file}/${config.mdFileName}`))
    md2jsons(articleIds)
  }
)

const md2json = (inputFileName, outputFileName, articleId, articlesLength) => {
  fs.readFile(inputFileName, 'utf-8', (err, fileContents) => {
    if (err !== null) {
      console.log(err)
      throw err
    }
    if (fileContents === undefined) {
      console.log('fileContents is undefind')
      throw err
    }

    const obj = yamlFront.loadFront(fileContents)
    if (obj.__content === undefined) {
      console.log('Error: __content is undefind')
      throw err
    }
    obj.id = articleId

    const html = marked(obj.__content)
    delete obj.__content
    obj.summary = html.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, ' ').slice(0, 50)

    // 本当はdeep copyして値渡ししたい allArticles.jsonに前記事のHTMLが存在することになるので
    allArticles.push(obj)
    if (allArticles.length === articlesLength) {
      writeAllArticles()
    }

    obj.html = html
    const json = JSON.stringify(obj)

    fs.writeFile(outputFileName, json, (err) => {
      if (err) {
        console.log(err)
        throw err
      }
      console.log(`Convert: ${inputFileName} => ${outputFileName}`)
    })
  })
}

const md2jsons = (articleIds) => {
  let articleIdsJsContent = 'module.exports = ['
  articleIds.forEach((articleId, idx) => {
    md2json(`${config.articleFolderPath}/${articleId}/${config.mdFileName}`, `${config.articleFolderPath}/${articleId}/${config.jsonFileName}`, articleId, articleIds.length)

    articleIdsJsContent += ` '/article/${articleId}'${(idx === articleIds.length - 1) ? ' ]\n' : ','}`
  })
  fs.writeFile(config.extendsNuxtConfig, articleIdsJsContent, (err) => {
    if (err) {
      console.log(err)
      throw err
    }
    console.log(`Add: ${config.extendsNuxtConfig}`)
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

const writeAllArticles = () => {
  allArticles.sort((a, b) => {
    const ret = -compareString(a.date, b.date)
    console.log(`${a.date}    ${b.date}     ${ret}`)
    return ret
  })

  // debug
  allArticles.forEach((article, idx) => {
    console.log(`articleData: ${idx} : ${article.date}`)
  })

  const json = JSON.stringify(allArticles)
  fs.writeFile(config.allArticlesPath, json, (err) => {
    if (err) {
      console.log(err)
      throw err
    }
    console.log(`Add: ${config.allArticlesPath}`)
  })
}

const compareString = (str1, str2) => {
  if (str1 === str2) {
    return 0
  }

  const min = (a, b) => { return (a > b) ? b : a }
  const minLength = min(str1.length, str2.length)
  for (let i = 0; i < minLength; i++) {
    const diff = str1.charCodeAt(i) - str2.charCodeAt(i)
    if (diff !== 0) {
      return diff
    }
  }
  return str1.length - str2.length
}
