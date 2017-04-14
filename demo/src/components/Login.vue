<template>
	<el-row class="content">
		<el-col :xs="24"
		        :sm="{span: 6,offset: 9}">
			<span class="title">
	       欢迎登录 
	      </span>
			<el-row>
				<el-input v-model="account"
				          placeholder="账号"
				          type="text">
				</el-input>
				<el-input v-model="password"
				          placeholder="密码"
				          type="password">
				</el-input>
				<el-button type="primary" @click="login()">登录</el-button>
			</el-row>
		</el-col>
	</el-row>
</template>

<script>
import md5 from 'md5';
export default {
	data() {
		return {
			account: '',
			password: ''
		};
	},
	methods: {
		login(){
			let obj = {
				name: this.account,
				password: md5(this.password)
			};
			// 将消息发送给后端
			this.$http.post('/auth/user', obj)
			.then((res) => {
				console.log(res);
				if(res.data.success){
					sessionStorage.setItem('token', res.data.token);
					this.$message({
						type: 'success',
						message: '登录成功!'
					});
					this.$router.push('/todo-list');
				} else {
					this.$message({
						type: 'error',
						message: res.data.message
					});
					sessionStorage.setItem('token', null);
				}
			})
			.catch((err) => {
				this.$message({
						type: 'error',
						message: err.data.message
					});
				sessionStorage.setItem('token', null);
			});
		}
	}
};
</script>
<style lang="less" scoped>
.el-row .content {
	padding: 16px;
}

.title {
	font-size: 28px;
}

.el-input {
	margin: 22px 0;
}

.el-button {
	width: 100%;
	margin-top: 12px;
}
</style>