const fs = require('fs')
const articleIdPaths = require('./article-ids-extends-nuxt-config.js')

const copyArticlePhotos = (articleIdPath) => {
  fs.readdir(`assets${articleIdPath}`, (err, files) => {
    if (err) {
      console.log(err)
      throw err
    }
    const photoFileNames = files.filter((file) => { return /.*\.(jpg|png|gif|svg)$/.test(file) })
    photoFileNames.forEach((file) => {
      fs.copyFile(`assets${articleIdPath}/${file}`, `dist/${articleIdPath}/${file}`, (err) => {
        if (err) {
          console.log(err)
          throw err
        }
        console.log(`copy file: assets${articleIdPath}/${file} => dist/${articleIdPath}/${file}`)
      })
    })
  })
}

articleIdPaths.forEach((path) => {
  copyArticlePhotos(path)
})
