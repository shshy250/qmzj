<template>
	<div class="index">
		<el-menu :router="true" class="el-menu-vertical" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
		  <el-submenu index="1">
		    <template slot="title">
		      <img class="title-icon" src="../../icons/shop.png" />
		      <span slot="title">店铺</span>
		    </template>
		    <el-menu-item-group>
		      <el-menu-item index="1-1" route="/shopMsg">店铺信息</el-menu-item>
		      <el-menu-item index="1-2" route="/increment">增值服务</el-menu-item>
		    </el-menu-item-group>
		  </el-submenu>
		  <el-submenu index="2">
		    <template slot="title">
		      <img class="title-icon" src="../../icons/goods.png" />
		      <span slot="title">商品管理</span>
		    </template>
		    <el-menu-item-group>
		      <el-menu-item index="2-1" route="/goodsAll">所有商品</el-menu-item>
		      <el-menu-item index="2-2" route="/buyOutOption">买断总额配置</el-menu-item>
					<el-menu-item index="2-3" route="/leaseRules">租赁规则模板</el-menu-item>
					<el-menu-item index="2-4" route="/compensationRules">赔偿规则模板</el-menu-item>
					<el-menu-item index="2-5" route="/returnAddress">归还地址</el-menu-item>
		    </el-menu-item-group>
		  </el-submenu>
			<el-submenu index="3">
			  <template slot="title">
			    <img class="title-icon" src="../../icons/coupon.png" />
			    <span slot="title">优惠券</span>
			  </template>
			  <el-menu-item-group>
			    <el-menu-item index="3-1" route="/couponList">优惠券列表</el-menu-item>
			    <el-menu-item index="3-2">选项2</el-menu-item>
			  </el-menu-item-group>
			</el-submenu>
			<el-submenu index="4">
			  <template slot="title">
			    <img class="title-icon" src="../../icons/order.png" />
			    <span slot="title">订单管理</span>
			  </template>
			  <el-menu-item-group>
			    <el-menu-item index="4-1" route="/normalOrder">常规订单</el-menu-item>
			    <el-menu-item index="4-2" route="/renewalOrder">续租订单</el-menu-item>
					<el-menu-item index="4-3" route="/buyoutOrder">买断订单</el-menu-item>
			  </el-menu-item-group>
			</el-submenu>
		</el-menu>
		<div class="arrow-icon" @click="chageCollapse">
			<img v-if="!isCollapse" src="../../icons/navi_close.png" />
			<img v-if="isCollapse" src="../../icons/navi_show.png" />
		</div>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        
      };
    },
		props: {
			isCollapse: Boolean,
		},
    methods: {
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      },
			chageCollapse() {
				this.$emit('backCollapse', !this.isCollapse)
			}
    }
  }
</script>

<style scoped="scoped">
	.index {
		display: flex;
		position: relative;
		height: 100%;
	}
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
	.arrow-icon {
		width: 15px;
		height: 15px;
		border-top-right-radius: 13px;
		border-bottom-right-radius: 13px;
		color: #737373;
		line-height: 25px;
		text-align: center;
		position: absolute;
		right: -20px;
		top: -45px;
	}
	.arrow-icon img {
		width: 100%;
		height: 100%;
	}
	.title-icon {
		width: 22px;
		height: 17px;
	}
</style>
