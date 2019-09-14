<template>
    <div :class="{
      'gt-content':true,
      'gt-content-header-navigation':isHeaderNavigation,
      'gt-content-non-header-navigation': !isHeaderNavigation
      }">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        isHeaderNavigation : false
    }
}
</script>

<style>
.gt-content{
  max-width: 800px;
  word-wrap: break-word;
  margin: auto;
  background-color: #ffffff;
  border: solid;
  border-radius: 0.2em;
  border-width: 1px;
  border-color: #aaaaaa;
  margin-bottom: 1em;
  color:#444444;
}
.gt-content-header-navigation{
  margin-top: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-top-style: none;
  text-align: center;
  padding: 0.5em;
}
.gt-content-non-header-navigation{
  margin-top: 1em;
  padding: 1em;
}

</style>