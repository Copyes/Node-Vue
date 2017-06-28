<template>
	<div class="content">
		<ul class="movies-list">
			<li class="movie">
				<div class="poster">
					<span class="rank">1</span>
					<img class="img" src="https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p456692072.jpg" alt="">
				</div>
				<div class="movie-info">
					<p class="title">肖申克的救赎  / The Shawshank Redemption  / 月黑高飞(港) / 刺激1995(台) </p>
					<p class="director">导演: 弗兰克·德拉邦特 Frank Darabont   主演: 蒂姆·罗宾斯 Tim Robbins /...
1994 / 美国 / 犯罪 剧情</p>
					<div class="score-comment"><span class="score">9.6</span><span class="comment-num">837436人评价</span></div>
					<p class="desc">希望让人自由。</p>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>

	export default {
		data(){
			return {

			}
		},
		components: {

		}
	}
</script>
<style lang="less">
	.movies-list {
		
	}
	.movie {
		position: relative;;
		box-sizing: border-box;
		padding: 12px 0;
		height: 180px;
		border-bottom: 1px solid #e4e4e4;
		p {
			margin: 0;
		}
		.poster {
			position: absolute;
			.rank {
				display: inline-block;
				padding: 3px;
				font-size: 12px;
				color: #fff;
				border-radius: 3px;
				background: #009688;
			}
		}
		.img {

		}	
		.movie-info {	
			margin-left: 100px;
			.title {
				font: 14px/1.5;
				color: #369;
			}
			.director {
				margin: 10px 0;
				font-size: 12px;
    			color: #666;
			}
 		}
 		.score-comment {
			font-size: 12px/1.5;
			color: #666;
			.score {
				color: #e09015;
    			padding: 0 15px 0 0;
			}
 		}
	}
</style>