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

}
</script>

<style scoped lang="scss">
	.form-control{
		display: flex;
		justify-content: space-between;
		margin-bottom:20px;
	}

</style>
