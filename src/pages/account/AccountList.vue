<template>
	<div>
		<el-row class="form-control" type="flex" justify="space-between">
			<el-col>
				<!-- <el-button @click="toggleSelection()">全选</el-button> -->
				<!-- <router-link to="order-add"><el-button>新增</el-button></router-link>
				<el-button @click="handleDelete(selectedRows)">删除</el-button> -->
			</el-col>

            <el-col>
                <el-row type="flex" justify="end">
                    <!-- <el-col :span="8">
                        <el-select v-model="statusValue" placeholder="请选择" @change="hanleStatusChange">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col> -->
                    <el-col :span="8">
                        <el-input placeholder="会员名称" v-model="searchvalue" class="input-with-select">
                            <el-button slot="append" icon="el-icon-search" @click="handleSearch"></el-button>
                        </el-input>
                    </el-col>
                </el-row>
            </el-col>
		</el-row>

		<el-table
			ref="multipleTable"
			:data="tableData"
			tooltip-effect="dark"
			style="width: 100%"
			@selection-change="handleSelectionChange">
			<el-table-column
			type="selection">
			</el-table-column>
			<el-table-column
			prop="user_name"
			label="姓名">
			</el-table-column>
			<!-- <el-table-column
			label="性别">
                <template slot-scope="scope">
                    <span>{{scope.row.sex == 1 ? '男': '女'}}</span>
                </template>
			</el-table-column> -->
			<el-table-column
			prop="mobile"
			label="手机号码">
			</el-table-column>
			<el-table-column
			prop="email"
			label="邮箱">
			</el-table-column>
			<el-table-column
			prop="reg_time"
			label="时间">
			</el-table-column>
            <el-table-column label="操作" align="right">
				<template slot-scope="scope">
					<el-button
					size="mini"
					@click="handleEdit(scope.row)">查看</el-button>
				</template>
			</el-table-column>
		</el-table>

		<div class="block">
			<el-pagination
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange"
			:current-page="pageIndex"
			:page-sizes="[5, 10, 15, 20]"
			:page-size="pageSize"
			layout="total, sizes, prev, pager, next, jumper"
			:total="totalCount">
			</el-pagination>
		</div>
	</div>
</template>
<script>


	export default {
		data(){
			return{
				tableData: [
                    {
                        username: "h哈喽",
                        gender: 1,
                        age: 28,
                        phone_numer: 13800138000,
                        email: "100@qq.com",
                        time: "2018-12-12"
                    }
                ],
				selectedRows: [],

				pageIndex: 1,
				pageSize: 5,
				searchvalue: "",
				orderstatus: 0,
				totalCount: 0,

				options:  [{
					value: 0,
					label: '全部'
				},
				{
					value: 1,
					label: 'VIP'
				}],
				statusValue: ""
			}
		},

		methods: {
			handleSizeChange(val) {
				this.pageSize = val;
				this.getList();
			},
			handleCurrentChange(val) {
				this.pageIndex = val;
				this.getList();
			},
			handleEdit(val){
				this.$router.push({name: "order-edit", params: {id: val.id}})
			},
			handleSelectionChange(val) {
				this.selectedRows = val;
			},
			getList(){
				//获取列表数据
				this.$axios({
					method:"GET",
					url: `/admin/account/getlist`,
					params: {
						pageIndex: this.pageIndex,
						pageSize: this.pageSize,
						searchvalue: this.searchvalue,
					}
				}).then(res => {
					const {message, pageIndex, pageSize, totalcount} = res.data;
					this.tableData = message;
					this.pageIndex = pageIndex,
					this.pageSize = pageSize;
					this.totalCount = totalcount;
                })
			},
			handleSearch(){
				this.pageIndex = 1;
				this.getList();
			},
			hanleStatusChange(val){
				this.orderstatus = val;
				this.getList();
			}
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