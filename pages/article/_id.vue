<template>
  <div>
    <Article :article-id="$route.params.id" :article-object="articleObject" />
  </div>
</template>

<script>
import Article from '~/components/Article.vue'
export default {
  components: {
    Article
  },
  asyncData ({ params }) {
    // generateするのでファイルが存在しない場合のエラー処理は考慮しない
    const articleObject = require(`~/assets/article/${params.id}/index.json`)
    return { articleObject }
  }
}
</script>
