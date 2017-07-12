<template>
	<div class="container">
		<div class="left-part">
			<h3 class="title">About me</h3>
			<p><span>姓名: </span><span>Charming</span></p>
			<p><span>Github: </span><span>https://github.com/Copyes</span></p>
		</div>
		<div class="right-part"></div>
	</div>
</template>
<script>
	
</script>
<style lang="less">
	.container {
		display: flex;
		justify-content: space-between;
	}
	.left-part {
		box-sizing: border-box;
		padding: 30px;
		width: 660px;
		height: 500px;
		background-color: #fff;
	    box-shadow: 0 1px 2px rgba(0,0,0,.05);
		.title {
			margin: 0;
			color: #3f51bf;
		}
	}
	.right-part {
		width: 320px;
		height: 500px;
		background-color: #fff;
	    box-shadow: 0 1px 2px rgba(0,0,0,.05);
	}
</style>