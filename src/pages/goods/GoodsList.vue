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

		<el-table
			ref="multipleTable"
			:data="tableData3"
			tooltip-effect="dark"
			style="width: 100%"
			@selection-change="handleSelectionChange">
			<el-table-column
			type="selection"
			width="55">
			</el-table-column>
			<el-table-column

			label="标题">
				<template slot-scope="scope">
					<router-link to="/">
						<div class="goods-info">
							<div class="goods-img">
								<img :src="scope.row.image"/>
							</div>
							<p>{{scope.row.title}}</p>
						</div>
					</router-link>
				</template>
			</el-table-column>
			<el-table-column
			prop="name"
			label="姓名"
			width="120">
			</el-table-column>
			<el-table-column
			prop="address"
			label="地址"
			show-overflow-tooltip>
			</el-table-column>
			<el-table-column label="操作" align="right">
				<template slot-scope="scope">
					<el-button
					size="mini"
					@click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button
					size="mini"
					type="danger"
					@click="handleDelete(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>

		<div class="block">
			<el-pagination
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange"
			:current-page="currentPage4"
			:page-sizes="[100, 200, 300, 400]"
			:page-size="100"
			layout="total, sizes, prev, pager, next, jumper"
			:total="400">
			</el-pagination>
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

	.el-table{
		margin-bottom:20px;
	}

	.goods-info{
		display: flex;
		align-items: center;

		.goods-img{
			width:64px;
			height:64px;
			display: flex;
			justify-content: center;
			align-items: center;
			overflow: hidden;
			flex-shrink: 0;
			margin-right:10px;
			img{
				display: block;
				height:64px;
			}
		}
	}
</style>