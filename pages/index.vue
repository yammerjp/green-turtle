<template>
  <div>
    <Header />
    <Article :article-id="$route.params.id" :article-object="articleObject" :prev-and-next-article-id="prevAndNextArticleId"/>
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
  asyncData () {
    // generateするのでファイルが存在しない場合のエラー処理は考慮しない
    const allArticles = require(`~/assets/allArticles.json`)
    const articleObject = require(`~/assets/article/${allArticles[0].id}/index.json`)
    return { articleObject, allArticles }
  },
  computed: {
    prevAndNextArticleId() {
      let number = undefined
      for (let i = 0; i < this.allArticles.length; i++) {
        if (this.allArticles[i].id === this.articleObject.id) {
          number = i
          break
        }
      }
      if (number === undefined) {
        const e = "Error: article is not found"
        console.log(e)
//        throw e
        return undefined
      }
      return {
        next : (number === 0) ? undefined : this.allArticles[number-1].id,
        prev : (number === this.allArticles.length-1) ? undefined : this.allArticles[number+1].id
      }
    }
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

