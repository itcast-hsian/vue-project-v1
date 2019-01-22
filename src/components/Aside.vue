<template>
	<div class="el-menu-wrapper">
		<el-menu default-active="1-1" class="el-menu-vertical-demo" :collapse="isCollapse">
			<div class="logo"></div>

		  <el-submenu :index="`${index + 1}`" v-for="(item, index) in menus" :key="index">
		    <template slot="title">
		      <i :class="item.icon"></i>
		      <span slot="title">{{item.title}}</span>
		    </template>
		    <el-menu-item-group class="menu-group">
					<router-link :to="`${item.path}${subItem.path}`" v-for="(subItem, subIndex) in item.group" :key="subIndex">
						<el-menu-item :index="`${index + 1}-${subIndex + 1}`">
							{{subItem.title}}
						</el-menu-item>
					</router-link>
		    </el-menu-item-group>
		  </el-submenu>

		</el-menu>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				menus: [
					{
						title: "购物商城",
						path: "/admin",
						icon: "el-icon-menu",
						group: [
							{
								path: "/goods-list",
								title: "商品管理"
							},
							{
								path: "/category-list",
								title: "栏目管理"
							},
							// {
							// 	path: "/comment-list",
							// 	title: "评论管理"
							// }
						]
					},
					{
						title: "会员管理",
						path: "/admin",
						icon: "el-icon-service",
						group: [
							{
								path: "/account-list",
								title: "会员列表"
							}
						]
					},
					{
						title: "商城订单",
						path: "/admin",
						icon: "el-icon-tickets",
						group: [
							{
								path: "/order-list",
								title: "订单管理"
							}
						]
					}
				]
			};
		},
		props: {
			isCollapse: {
				type: Boolean,
				default: true
			}
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>
<style scoped lang="scss">
	.el-menu-wrapper{
		height:100%;
		display: flex;
		flex-direction: column;
	}

	.el-menu{
		flex:1;
		background: #d3dce6;
		a{
			text-decoration:none;
		}
	}

	.logo{
		height:60px;
		background:#002140;
	}

	.el-menu-vertical-demo:not(.el-menu--collapse) {
	    width: 200px;
	    min-height: 400px;
	}

	.el-menu-vertical-demo{
		background:#001529;
	}

	.el-menu-vertical-demo /deep/ .el-submenu__title *{
		color:#999;
	}

	.el-menu-vertical-demo /deep/ .el-submenu__title:hover{
		background:inherit;
	}

	.el-menu-vertical-demo /deep/ .is-opened .el-submenu__title *{
		color:#eee;
	}

	.menu-group /deep/ .el-menu-item-group__title{
		display:none;
	}

	.menu-group{
		background:#000c17;
	}

	.menu-group .el-menu-item{
		color:#999;
	}

	.menu-group .el-menu-item:hover,
	.menu-group .el-menu-item:active,
	.menu-group .el-menu-item:focus,{
		color:#eee;
		background:inherit;
	}

</style>