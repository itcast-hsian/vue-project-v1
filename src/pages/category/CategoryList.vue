<template>
	<div>
		<div class="form-control">
			<div>
				<el-button @click="toggleSelection()">全选</el-button>
				<router-link to="goods-add"><el-button>新增</el-button></router-link>
				<el-button @click="">删除</el-button>
			</div>

			<div >
				<el-input placeholder="请输入内容" v-model="inputValue" class="input-with-select">
					<el-button slot="append" icon="el-icon-search"></el-button>
				</el-input>
			</div>
		</div>

        
	</div>
</template>
<script>
	export default {
		data(){
			return{
				tableData3: [
					{
						title: '卡宾男鞋冬季高帮板鞋男保暖加绒棉鞋男白色运动休闲鞋潮流鞋子',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1518 弄',
						image: "https://img.alicdn.com/simba/img/TB1CvxdwkvoK1RjSZFNSuwxMVXa.jpg"
					}, {
						title: '卡宾男鞋冬季高帮板鞋男保暖加绒棉鞋男白色运动休闲鞋潮流鞋子',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1518 弄',
						image: "https://img.alicdn.com/simba/img/TB1CvxdwkvoK1RjSZFNSuwxMVXa.jpg"
					}, {
						title: '卡宾男鞋冬季高帮板鞋男保暖加绒棉鞋男白色运动休闲鞋潮流鞋子',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1518 弄',
						image: "https://img.alicdn.com/simba/img/TB1CvxdwkvoK1RjSZFNSuwxMVXa.jpg"
					},
				],
				currentPage4: 4,
				inputValue: ""
			}
		},

		methods: {
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			},
			handleSelectionChange(val) {
				console.log(`当前页: ${val}`);
			}
		},
	}
</script>
<style scoped lang="scss">
	.form-control{
		display: flex;
		justify-content: space-between;
		margin-bottom:20px;
	}
</style>