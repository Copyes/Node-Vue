<template>
	<div class="home">
<!-- 		<c-aside></c-aside>
 -->		<c-posts></c-posts>
	</div>
</template>
<script>
	// import cAside from '../components/c-aside.vue';
	import cPosts from '../components/c-posts.vue';
	export default {
		data(){
			return {

			}
		},
		components: {
			// cAside,
			cPosts
		}
	}
</script>
<style lang="less">
	.home {
		display: flex;
		justify-content: row;
		margin: 0 auto;
		padding-top: 50px;
		width: 1080px;
		
	}
</style>