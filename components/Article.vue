<template>
  <div v-html="articleObject.html" class="articleBox"/>
</template>

<script>
export default {
  props: {
    articleId: String,
    articleObject: Object
  }
}

</script>

<style>
.articleBox{
  max-width: 800px;
  word-wrap: break-word;
  margin: auto;
  padding: 1em;
}
img{
  width: 90%;
  display: block;
  margin: auto;
  margin-top: 1em;
  margin-bottom: 1em;
}
h2{
  margin-top: 1em;
  border-bottom: solid;
  border-left-style: solid;
  border-left-width: 0.5em;
  border-color: #b3b3b3;
  padding-left: 0.5em;
}
h3{
  margin-top: 0.5em;
  border-bottom: solid;
  border-left-style: solid;
  border-left-width: 0.5em;
  border-color: #b3b3b3;
  padding-left: 0.5em;
}
h4{
  margin-top: 0.2em;
}
</style>
