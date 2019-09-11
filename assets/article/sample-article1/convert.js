const fs = require('fs')
const yamlFront = require('yaml-front-matter')
const marked = require('marked')

// ./article/のフォルダ一覧を取得 フォルダ名を配列に格納
// 配列をfor
// id/index.mdがあるか検証 あれば変換してjsObjectを作る

// /jsonディレクトリがあれば中身に関わらずrm
// /jsonを掘る
// /json/idディレクトリを掘る
// /json/id/index.jsonに書き出し
// `
// const id = 'sample-article1'
const inputFileName = `index.md`
const outputFileName = `index.json`

const md2json = function (inputFileName, outputFileName) {
  fs.readFile(inputFileName, 'utf-8', (err, fileContents) => {
    if (err !== undefined) {
      return
    }
    if (fileContents === undefined) {
      // eslint-disable-next-line no-console
      console.log('fileContents is undefind')
      return
    }

    const obj = yamlFront.loadFront(fileContents)
    if (obj.__content === undefined) {
      // eslint-disable-next-line no-console
      console.log('Error: __content is undefind')
      return
    }

    obj.html = marked(obj.__content)
    delete obj.__content
    obj.summary = obj.html.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, ' ').slice(0, 50)
    // eslint-disable-next-line no-console
    console.log(obj)

    const json = JSON.stringify(obj)

    fs.writeFile(outputFileName, json, (err) => {
      // eslint-disable-next-line no-console
      if (err) { console.log(err) } else { console.log('write end') }
    })
  })
}

md2json(inputFileName, outputFileName)
