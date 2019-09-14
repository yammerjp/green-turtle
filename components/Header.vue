<template><div>
  <div class="gt-header">
    Green Turtle
  </div>
  <Content :is-header-navigation="true">
    <a class="gt-header-navigation-item" href="https://blog.yammer.fun">Home</a>
    <a class="gt-header-navigation-item" href="https://blog.yammer.fun/article/aboutMe">About</a>
    <a class="gt-header-navigation-item" href="https://twitter.com/basd4g">Twitter</a>
    <a class="gt-header-navigation-item" href="https://github.com/basd4g">GitHub</a>
  </Content>
</div></template>

<script>
import Content from '~/components/Content.vue'
export default {
    components:{
      Content
    }
}
</script>

<style>
.gt-header{
    width: 100%;
    text-align: center;
    padding-top: 1em;
    padding-bottom: 1em;
    font-size: 2em;
    color: #ffffff;
    background-color: #35495e;
}

.gt-header-navigation-item {
  color:inherit;
  text-decoration:none;
  background-color: #ffffff;
  border-top-style: none;
  border-bottom-style: none;
  border-right-style: solid;
  border-right-color: #aaaaaa;
  border-right-width: 1px;
  border-left-style: solid;
  border-left-color: #aaaaaa;
  border-left-width: 1px;
  font-size: 1.0em;
  display: inline-block;
  margin: auto;
  width: 20%;
  max-width: 190px;
  margin-top: 0.1em;
  margin-bottom: 0.1em;
  text-align: center;
}
</style>