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

.gt-article {
  padding-top: 1em;
  padding-bottom: 1em;
}
@media screen and (min-width: 600px) {
  .gt-article {
    padding-left: 1em;
    padding-right: 1em;
  }
}

.gt-article h1, .gt-article-body h3, .gt-article-body p, .gt-article-body img, .gt-article-body pre {
  margin-top: 1em;
  margin-bottom: 1em;
}
.gt-article-body h2{
  margin-top: 3em;
  margin-bottom: 1em;
}

.gt-article-body img{
  width: 100%;
  display: block;
  box-sizing: border-box;
  margin: auto;
}

.gt-article-body pre{
  border-style: none;
  overflow: scroll;
}
.gt-article-body hr.gt-article-annotation-horizontalrule{
  margin-top:4em;
  margin-bottom:2em;
}
.gt-article-body ul.gt-article-annotation-list{
  list-style: none;
  padding-left: 0;
}
</style>
