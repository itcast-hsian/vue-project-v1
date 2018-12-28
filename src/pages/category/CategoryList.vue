<template>
	<div>
		<div class="form-control">
			<div>
				<el-button @click="toggleSelection()">全选</el-button>
				<router-link to="category-add"><el-button>新增</el-button></router-link>
				<el-button @click="">删除</el-button>
			</div>
		</div>
		
		<div class="block">
			<el-tree
				class="tree-title"
				:data="data4">
				<span class="custom-tree-node" slot-scope="{ node, data }">
					<span>类别</span>
					<span>排序</span>
					<span>操作</span>
				</span>
			</el-tree>

			<el-tree
				:data="data5"
				show-checkbox
				node-key="id"
				default-expand-all
				:expand-on-click-node="false">
				<span class="custom-tree-node" slot-scope="{ node, data }">
					<span>{{ node.label }}</span>
					<input value="100" class="order-input"/>
					<span>
						<el-button
							type="text"
							size="mini"
							@click="() => append(data)">
							Append
						</el-button>
						<el-button
							type="text"
							size="mini"
							@click="() => remove(node, data)">
							Delete
						</el-button>
					</span>
				</span>
			</el-tree>
		</div>
        
	</div>
</template>
<script>
	export default {
		data(){
			const data = [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }];

			return{
				data4: [{}],
				data5: JSON.parse(JSON.stringify(data)),
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