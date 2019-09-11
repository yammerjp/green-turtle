# green-turtle

> Blog system using Nuxt.js

## Build Setup

``` bash
# install dependencies
$ yarn install

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## 次のような手順を想定 最終的なデプロイは自動化する

- git clone 記事リポジトリ
- 記事のjson化
- git clone green-turtleリポジトリ
- nuxt generate
- distのコピー
- 画像ファイルなどのコピー
