<template>
	<div class="sidebar-container">
		<div class="sidebar-base sidebar-tips">
			<h3 class="sidebar-title tips-title">Tips</h3>
			<p class="tips-desc">该博客还在完善中</p>
		</div>
		<div class="sidebar-base sidebar-posts">
			<h3 class="sidebar-title posts-title">Latest</h3>
			<ul class="menu">
				<li class="item">是时候开始你的表演了！！！</li>
			</ul>
		</div>
	</div>
</template>
<script>
	
</script>
<style lang="less" scoped>
	.sidebar-container {
		h3 {
			margin: 0;
		}
		.sidebar-base {
			background: #fff;
		    border-radius: 5px;
		    box-shadow: 0 5px 15px rgba(0,0,0,.12);
		}
		.sidebar-title {
			box-sizing: border-box;
			padding-left: 30px; 
			font-size: 16px;
		    font-weight: 400;
		    line-height: 55px;
			text-align: left;
		    color: rgba(0,0,0,.4);
		    border-bottom: 1px solid #eee;
		}
		.tips-title {
			
		}
		.tips-desc {
			font-size: 14px;
		    line-height: 55px;
			text-align: center;
		}
		.posts-title {
			
		}
		.menu {
			padding-bottom: 28px;
			text-align: center;
			.item {
				width: 100%;
			    line-height: 40px;
			    font-size: 14px;
			    border-bottom: 1px solid #eee;
			    cursor: pointer;
			    transition: all .4s ease;
			}
			.item:last-child {
				border-bottom: 1px solid #eee;
			}
		}
	}
</style>