<template>
	<div class="el-menu-wrapper">
		<el-menu default-active="1-1" class="el-menu-vertical-demo" :collapse="isCollapse">
			<div class="logo"></div>

		  <el-submenu :index="`${index + 1}`" v-for="(item, index) in menus" :key="index">
		    <template slot="title">
		      <i class="el-icon-location"></i>
		      <span slot="title">{{item.title}}</span>
		    </template>
		    <el-menu-item-group>

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
						group: [
							{
								path: "/goods-list",
								title: "内容管理"
							},
							{
								path: "/category-list",
								title: "栏目管理"
							},
							{
								path: "/comment-list",
								title: "评论管理"
							}
						]
					},
					{
						title: "会员管理",
						path: "/admin",
						group: [
							{
								path: "/goods-list",
								title: "审核会员"
							},
							{
								path: "/category-list",
								title: "所有会员"
							},
							{
								path: "/comment",
								title: "会员组别"
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
	}

	.el-menu-vertical-demo:not(.el-menu--collapse) {
	    width: 200px;
	    min-height: 400px;
	  }
</style>