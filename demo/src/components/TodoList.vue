<template>
	<el-row>
		<el-col :xs="{span: 20,offset: 2}" :sm="{span: 8,offset: 8}">
			<span>
				欢迎： {{ name }}! 你的待办事项如下：
			</span>
			<el-input placeholder="请输入你的待办事项" v-model="todoThings" @keyup.enter.native="addTodos"></el-input>
			<el-tabs v-model="tabName">
				<el-tab-pane label="待办事项" name="first">
					<el-col :xs="24">
						<template v-if="!done">
							<template v-for="(item, index) in list">
								<div class="todo-list" v-if="!item.status">
									<span class="item">{{ index + 1 }}、{{ item.content }}</span>
									<span class="pull-right">
										<el-button size="small" type="primary" @click="update(index)">完成</el-button>
										<el-button size="small" :plain="true" type="danger"  @click="remove(index)">删除</el-button>
									</span>
								</div>
							</template>
						</template>
						<div v-else-if="done">
							暂无待办事项
						</div>
					</el-col>
				</el-tab-pane>
				<el-tab-pane label="已完成事项" name="second">
					<template v-if="count > 0">
						<template v-for="(item, index) in list">
							<div class="todo-list" v-if="item.status">
								<span class="item finished">{{ index + 1 }}、{{ item.content }}</span>
								<span class="pull-right">
									<el-button size="small" type="primary" @click="update(index)">还原</el-button>
								</span>
							</div>
						</template>
					</template>
					<div v-else>
						暂无已完成事项
					</div>
				</el-tab-pane>
			</el-tabs>
		</el-col>
	</el-row>
</template>
<script>
	import jwt from 'jsonwebtoken';

	export default {	
		data(){
			return {
				name: '',
				id: '',
				todoThings: '',
				tabName: 'first',
				list: [],
				count: 0
			}
		},
		created(){
			const userInfo = this.getUserInfo();
			if(userInfo){
				this.id = userInfo.id;
				this.name = userInfo.name;
			}
			this.getTodoList(); // 新增：在组件创建时获取todolist
		},
		computed: {
			done(){
				let count = 0;
				let len = this.list.length;
				this.list.forEach((item) => {
					item.status == true ? count++ : ''; 
				});
				this.count = count;
				return count == len || len == 0 ? true : false;
			}
		},
		methods: {
			// 获取用户信息的方法
			getUserInfo(){
				const token = sessionStorage.getItem('token');

				if(token != null && token != 'null'){
					let decode = jwt.verify(token, 'vue-koa-fan');
					return decode;
				} else {
					return false;
				}
			},
			addTodos(){
				if (!this.todoThings)  return;
				let todoObj = {
					content: this.todoThings,
					status: false,
					id: this.id
				};
				this.$http.post('/api/todolist',todoObj)
				.then((res) => {
					if(res.status == 200){
						this.$message({
							type: 'success',
							message: '创建成功！'
						})
						this.getTodoList();
					}else{
						this.$message.error('创建失败');
					}
				})
				.catch((err) => {
					this.$message.error('创建失败');
					console.log(err);
				});
				//this.list.push(todoObj);
				this.todoThings = '';
			},
			// 获取任务列表数据
			getTodoList(){
				this.$http.get(`/api/todolist/${this.id}`)
				.then((res) => {
					if(res.status == 200){
						this.list = res.data;
					}else{
						this.$message.error('获取列表失败！');
					}
				})
				.catch((err) => {
					this.$message.error('获取列表失败！');
					console.log(err);
				});
			},
			// 更新任务状态
			update(index){
				this.$http.put(`/api/todolist/${this.id}/${this.list[index].id}/${this.list[index].status}`)
				.then((res) => {
					if(res.status == 200){
						this.$message({
							type: 'success',
							message: '任务状态更新成功'
						});
						this.getTodoList();
					}else{
						this.$message.error('任务状态更新失败');
					}
				})
				.catch((err) => {
					this.$message.error('任务状态更新失败');
					console.log(err);
				});

			},
			remove(index){
				this.$http.delete(`/api/todolist/${this.id}/${this.list[index].id}`)
				.then((res) => {
					if(res.status == 200){
						this.$message({
							type: 'success',
							message: '任务删除成功'
						});
						this.getTodoList();
					}else{
						this.$message.error('任务删除失败了哦');
					}
				})
				.catch((err) => {
					console.log(err);
					this.$message.error('任务删除失败了哦');
				});
			},
			finishedTask(index){
				this.$set(this.list[index], 'status', true);
				this.$message({
					type: 'success',
					message: '该任务已完成'
				});
			}
			// removeTask(index){
			// 	this.list.splice(index, 1);
			// 	this.$message({
			// 		type: 'info',
			// 		message: '该任务已被删除'
			// 	})
			// },
			// resetTask(index){
			// 	this.$set(this.list[index], 'status', false);
			// 	this.$message({
			// 		type: 'info',
			// 		message: '该任务已被重置'
			// 	})
			// }
		}
	}
</script>
<style lang="less" scoped>
	.el-input{
		margin: 20px auto
	}
	.todo-list{
		width: 100%;
		margin-top: 8px;
		padding-bottom: 8px;
		border-bottom: 1px solid #eee;
		overflow: hidden;
		text-align: left;
		.item {
			font-size: 20px;
		}
		&.finished{
			text-decoration: line-through;
			color: #ddd;
		}
	}
	.pull-right {
		float: right;
	}
</style>