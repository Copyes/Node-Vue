<template>
  <div id="app">
    <c-header></c-header>
    <section class="main">
        <router-view></router-view>
    </section>
  </div>
</template>

<script>
import cHeader from './components/c-header'
export default {
    name: 'app',
    components: {
      cHeader
    }
}
</script>

<style lang="less">
html,
  #app {
    height: 100%;
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
    margin-top: 80px;
    overflow: hidden;
    padding: 0 5%;
    min-height: 100%;
  }
</style>
