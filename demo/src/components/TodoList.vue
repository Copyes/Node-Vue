<template>
	<el-row>
		<el-col :xs="{span: 20,offset: 2}" :sm="{span: 8,offset: 8}">
			<span>
				欢迎： xxx! 你的待办事项如下：
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
										<el-button size="small" type="primary" @click="finishedTask(index)">完成</el-button>
										<el-button size="small" :plain="true" type="danger"  @click="removeTask()">删除</el-button>
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
									<el-button size="small" type="primary" @click="resetTask(index)">还原</el-button>
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
	export default {	
		data(){
			return {
				name: 'Fan Chao',
				todoThings: '',
				tabName: 'first',
				list: [{
					index: 0,
					content: '我的第一个要做的事情',
					status: false
				},{
					index: 1,
					content: '这是我的第二个要做的事',
					status: false
				}],
				count: 0
			}
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
			addTodos(){
				if (!this.todoThings)  return;
				let todoObj = {
					content: this.todoThings,
					status: false
				};
				this.list.push(todoObj);
				this.todoThings = '';
			},
			finishedTask(index){
				this.$set(this.list[index], 'status', true);
				this.$message({
					type: 'success',
					message: '该任务已完成'
				});
			},
			removeTask(index){
				this.list.splice(index, 1);
				this.$message({
					type: 'info',
					message: '该任务已被删除'
				})
			},
			resetTask(index){
				this.$set(this.list[index], 'status', false);
				this.$message({
					type: 'info',
					message: '该任务已被重置'
				})
			}
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