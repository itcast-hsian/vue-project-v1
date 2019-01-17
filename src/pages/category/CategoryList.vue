<template>
	<div>
		<div class="form-control">
			<div>
				<!-- <el-button @click="toggleSelection()">全选</el-button> -->
				<router-link to="category-add"><el-button>新增</el-button></router-link>
				<el-button @click="">删除</el-button>
			</div>
		</div>
		
		<div class="block">
			<el-tree
				class="tree-title"
				:data="title">
				<span class="custom-tree-node" slot-scope="{ node, data }">
					<span>类别</span>
					<span>排序</span>
					<span>操作</span>
				</span>
			</el-tree>

			<el-tree
				:data="data"
				show-checkbox
				node-key="id"
				default-expand-all
				:expand-on-click-node="false">
				<span class="custom-tree-node" slot-scope="{ node, data }">
					<span>{{ node.label }}</span>
					<input :value="data.sort_id" class="order-input" @change="handleSortId(data, $event)"/>
					<span>
						<el-button
							type="text"
							size="mini"
							@click="() => handleEdit(data)">
							编辑
						</el-button>
						<!-- <el-button
							type="text"
							size="mini"
							@click="() => handleRemove(node, data)">
							删除
						</el-button> -->
					</span>
				</span>
			</el-tree>
		</div>
        
	</div>
</template>
<script>
	export default {
		data(){
			
			return{
				title: [{}],
				data: [],
			}
		},

		mounted(){
			// 获取分类数据
	        this.$axios({
	            url: "/admin/category/getlist/goods",
	        }).then(res => {
	            const {message} = res.data;
				let arr = [];

				function loop(arr,item){
					arr.forEach(v => {
						if(v.category_id == item.parent_id){
							if(!v.children){
								v.children = [];
							}
							v.children.push({
								...item,
								id: item.category_id,
			 					label: item.title
							});
							return;
						}

						if(v.children){
							loop(v.children, item);
						}
					})
				}

				message.forEach(v => {
					if(v.parent_id === 0){
						arr.push({
							...v,
							id: v.category_id,
							label: v.title
						})
					}else{
						loop(arr, v);
					}
				})

	            this.data = arr;
	        })
		},

		methods: {
			handleEdit(val){
				
			},
			handleRemove(val){

			},
			handleSortId(val, event){
				const inputValue = event.target.value;
				

				this.$axios({
					url: `/admin/category/edit/${val.category_id}`,
					method: "POST",
					data: {
						...val,
						sort_id: +inputValue
					}
				}).then(res => {

				})
				
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

	.custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }

	.order-input{
		width: 40px;
		border-radius: 4px;
		border:1px #eee solid;
		text-align: center;
	}

	.block{
		padding:20px;
		background:#fff;
	}

	.tree-title /deep/ .el-tree-node__content:hover{
		background: none;
	}
</style>