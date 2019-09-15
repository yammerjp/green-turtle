<template>
  <Content>
    <div class="gt-article">
      <h1>{{articleObject.title}}</h1>
      <div class="gt-article-date">投稿: {{articleObject.date}}</div>
      <div  class="gt-article-body">
        <div v-html="articleObject.html" />
      </div>
      <div class="gt-article-prev-and-next">
        <a v-if="prevAndNextArticleId.next" class="gt-article-next" :href="`/article/${prevAndNextArticleId.next}/`">&lt; 新しい記事</a>
        <span v-else class="gt-article-next">  </span>
        <a v-if="prevAndNextArticleId.prev" class="gt-article-prev" :href="`/article/${prevAndNextArticleId.prev}/`">古い記事 &gt;</a>
        <span v-else class="gt-article-prev">  </span>
      </div>
    </div>
  </Content>
</template>

<script>
import Content from '~/components/Content.vue'
export default {
  components:{
    Content
    },
  props: {
    articleId: String,
    articleObject: Object,
    prevAndNextArticleId: Object
  },
}

</script>

<style>
.gt-article-date {
  text-align: right;
  font-size: 0.8em;
}
.gt-article-prev, .gt-article-next {
  display: inline-block;
  font-size: 1em;
}
.gt-article-prev-and-next {
  display: flex;
  margin-top: 3em;
  margin-bottom: 0.5em;
  justify-content: space-between;
}

.gt-article-body img{
  width: 90%;
  display: block;
  margin: auto;
  margin-top: 1em;
  margin-bottom: 1em;
}
.gt-article-body h2{
  margin-top: 1em;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-style: solid;
  border-left-width: 0.5em;
  border-color: #b3b3b3;
  padding-left: 0.5em;
}
.gt-article-body h3{
  margin-top: 0.5em;
  border-left-style: solid;
  border-left-width: 0.5em;
  border-color: #b3b3b3;
  padding-left: 0.5em;
}
.gt-article-body h4{
  margin-top: 0.2em;
}
.gt-article-body p {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}
</style>
