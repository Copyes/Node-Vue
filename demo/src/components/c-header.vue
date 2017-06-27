<template>
	<header class="header">
		<nav class="category">
			<ul class="cate-list">
				<li>主页</li>
				<li>关于</li>
			</ul>
		</nav>
	</header>
</template>
<script>
	export default {
		data(){
			return {

			}
		}
	}
</script>
<style lang="less">
	.header {
		position: fixed;
	    left: 0;
	    top: 0;
	    width: 100%;
	    color: #fff;
	    height: 56px;
	    background: #3F51B5;
	}
	.category {
		margin-bottom: 20px;
		width: 100%;
		height: 100%;
		.cate-list {
			float: right;
			list-style: none;
		}
		li {
			float: left;
			width: 60px;
			height: 56px;
			line-height: 56px;
			color: #fff;
		}
	}
</style>