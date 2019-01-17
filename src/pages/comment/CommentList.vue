<template>
	<div>
		<div class="form-control">
			<div>
				<el-button @click="toggleSelection()">全选</el-button>
				<router-link to="category-add"><el-button>新增</el-button></router-link>
				<el-button @click="">删除</el-button>
			</div>
		</div>

        
	</div>
</template>

<script>
export default {
	data(){
		return{
			tableData: [],
			selectedRows: [],

			pageIndex: 1,
			pageSize: 5,
			searchvalue: "",
			totalCount: 0
		}
	},

	methods: {
		getList(){
			// 获取列表数据
			this.$axios({
				method:"GET",
				url: `/admin/article/getlist/xxx`,
				params: {
					pageIndex: this.pageIndex,
					pageSize: this.pageSize,
					searchvalue: this.searchvalue
				}
			}).then(res => {
				const {message, pageIndex, pageSize, totalcount} = res.data;
				this.tableData = message;
				this.pageIndex = pageIndex,
				this.pageSize = pageSize;
				this.totalCount = totalcount;
			})
		},
	},

	mounted(){
		this.getList();
	}
}
</script>

<style scoped lang="scss">
	.form-control{
		display: flex;
		justify-content: space-between;
		margin-bottom:20px;
	}

</style>
