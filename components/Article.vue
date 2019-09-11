<template>
  <div v-html="articleObject.html" />
</template>

<script>
export default {
  props: {
    articleId: String,
    articleObject: Object
  }
}

</script>
