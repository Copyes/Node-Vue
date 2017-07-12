<template>
	<div class="c-aside">
		<div class="aside-content">
			<div class="user-info">
				<img class="avatar" src="http://i4.piimg.com/1949/caa8c317dbcab5d1.png" alt="">
				<h3 class="name">Charming</h3>
				<p class="desc">こんにちは</p>
				<ul class="menu">
					<li class="item">articles</li>
					<li class="item">category</li>
					<li class="item">tags</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	
</script>
<style lang="less">
	.c-aside {
		overflow: hidden;
	}
	.aside-content {
		// position: fixed;
	 //    top: 80px;
	    width: 187px;
	    background: #fff;
	    border-radius: 5px;
	    box-shadow: 0 5px 15px rgba(0,0,0,.12);
	}
	.user-info {
		padding-top: 28px;
		margin-bottom: 28px;
		text-align: center;
		.avatar {
			display: block;
			width: 100px;
			height: 100px;
			margin: 0 auto;
			border-radius: 50%;
		}
		.menu {
			padding-bottom: 28px;
			.item {
				width: 100%;
			    line-height: 40px;
			    font-size: 14px;
			    border-top: 1px solid #eee;
			    cursor: pointer;
			    transition: all .4s ease;
			}
			.item:last-child {
				border-bottom: 1px solid #eee;
			}
		}
	}
</style>