<template>
  <div id="app">
    <c-header></c-header>
    <c-aside></c-aside>
    <!-- <section class="main"> -->
        <router-view></router-view>
    <!-- </section> -->
  </div>
</template>

<script>
import cHeader from './components/c-header'
import cAside from './components/c-aside'

export default {
    name: 'app',
    components: {
      cHeader,
      cAside
    }
}
</script>

<style lang="less">
html,
  #app {
    height: 100%;
    color: #444;
    background-color: #ebf0f0;
  }
  body {
    height: 100%;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
  a {
    color: #CCC;
    text-decoration: none;
  }
  img {
    vertical-align: middle;
    max-width: 100%;
  }
  .main {
    margin: 20px auto 0;
    width: 1000px;
    overflow: hidden;
    min-height: 100%;
  }
</style>
