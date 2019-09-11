<template>
  <div v-html="articleObject.bodyHtml" />
</template>

<script>
export default {
  props: {
    articleId: String,
    articleObject: Object
  }
}

</script>
