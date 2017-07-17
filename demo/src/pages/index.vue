<template>
	<el-row class="main">
        <c-aside></c-aside>
        <el-col :span="12" :offset="6">
            <router-view></router-view>
        </el-col>
        <el-col :span="4" :offset="1">
            <c-sidebar></c-sidebar>
        </el-col>
    </el-row>
</template>
<script>
	import cHeader from '../components/c-header'
	import cAside from '../components/c-aside'
	import cSidebar from '../components/c-sidebar'
	export default {
		data(){
			return {

			}
		},
		components: {
			cAside,
			cSidebar
		}
	}
</script>
<style lang="less">
	
</style>