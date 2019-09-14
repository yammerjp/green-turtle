<template>
  <div>
    <Header />
    <Article :article-id="$route.params.id" :article-object="articleObject" :articlePrevPath="`#`" :articleNextPath="`#`"/>
    <FirebaseScript />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Article from '~/components/Article.vue'
import FirebaseScript from '~/components/FirebaseScript.vue'
export default {
  components: {
    Header,
    Article,
    FirebaseScript
  },
  asyncData ({ params }) {
    // generateするのでファイルが存在しない場合のエラー処理は考慮しない
    const articleObject = require(`~/assets/article/${params.id}/index.json`)
    return { articleObject }
  }
}
</script>

<style>
a {
  color: #808080;
}
a:visited {
  color: #aaaaaa
}
body{
  background-color: #f8f8f8;
}
</style>
