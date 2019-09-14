<template>
  <div>
    <Article :article-id="$route.params.id" :article-object="articleObject" />
    <FirebaseScript />
  </div>
</template>

<script>
import Article from '~/components/Article.vue'
import FirebaseScript from '~/components/FirebaseScript.vue'
export default {
  components: {
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
body{
  background-color: #f8f8f8;
}
</style>
