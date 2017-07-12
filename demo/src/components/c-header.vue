<template>
	<header class="header">
		<nav class="category">
			<ul class="cate-list">
				<li>主页</li>
				<li>关于</li>
			</ul>
			<div class="avatar">
				<img class="img" src="http://i4.piimg.com/1949/caa8c317dbcab5d1.png" alt="">
			</div>
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
		// position: fixed;
	 //    left: 0;
	 //    top: 0;
	    width: 100%;
	    color: #fff;
	    height: 56px;
	    background: #3F51B5;
	    //z-index: 100;
	}
	.category {
		margin: 0 auto 20px;
		width: 1000px;
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
			text-align: center;
			color: #fff;
		}
		.avatar {
			float: right;
			width: 56px;
			line-height: 56px;
			border-radius: 50%;
			overflow: hidden;
		}
		.img {
			width: 40px;
			height: 40px;
			border-radius: 50%;
		}
	}
</style>