<template>
  <div id="app">
    <router-view></router-view>
    <!-- <c-header></c-header> -->
    <!-- <el-row class="main">
        <c-aside></c-aside>
        <el-col :span="12" :offset="6">
            <router-view></router-view>
        </el-col>
        <el-col :span="4" :offset="1">
            <c-sidebar></c-sidebar>
        </el-col>
    </el-row> -->
  </div>
</template>

<script>
import cHeader from './components/c-header'
import cAside from './components/c-aside'
import cSidebar from './components/c-sidebar'

export default {
    name: 'app',
    components: {
      cHeader,
      cAside,
      cSidebar
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
    margin-top: 50px;
  }
</style>
