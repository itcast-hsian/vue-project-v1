<template>
    <div class="detail">
        <h4>订单详情</h4>
        <p><span>订单id: </span>{{data.orderinfo.id}}</p>
        <p><span>会员名称: </span>{{data.orderinfo.user_name}}</p>
        <p><span>地址: </span>{{data.orderinfo.area}}</p>
        <p><span>快递: </span>{{data.orderinfo.expressTitle}}</p>
        <p><span>状态: </span>{{data.orderinfo.statusName}}</p>
        <p><span>购买时间: </span>{{data.orderinfo.add_time}}</p>

        <h4 style="margin-top:20px;">订单商品列表</h4>
        <el-table
			ref="multipleTable"
			:data="data.goodslist"
			tooltip-effect="dark"
			style="width: 100%">
			<el-table-column
			label="商品">
				<template slot-scope="scope">
					<router-link to="/">
						<div class="goods-info">
							<div class="goods-img">
								<img :src="scope.row.imgurl"/>
							</div>
							<p>{{scope.row.goods_title}}</p>
						</div>
					</router-link>
				</template>
			</el-table-column>
			<el-table-column
			prop="goods_no"
			label="类型"
			width="120">
			</el-table-column>
			<el-table-column
			prop="goods_price"
			label="价格"
			show-overflow-tooltip>
			</el-table-column>
		</el-table>
    </div>
</template>

<script>

export default {
    data() {
      return {
        id:0,
        data: {
			orderinfo: {}
		}
      }
    },
    mounted(){
        const id = this.$route.params.id;
		this.id = id;
		
		console.log(id)
        this.$axios({
            url: `/admin/order/getorderdetial/${id}`,
        }).then(res => {
            const {message} = res.data;
            this.data = message
        })
    }
}
</script>

<style scoped lang="scss">
    .detail h4{
        margin-bottom:10px;
    }
    
    .detail p{
        line-height: 2;

        span{
            width: 100px;
            display: inline-block;
        }
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
