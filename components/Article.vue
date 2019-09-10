<template>
  <div>
    <span v-html="articleObject.bodyHtml" />
  </div>
</template>

<script>
export default {
  props: {
    articleId: String,
    articleObject: Object
  }
}

</script>
