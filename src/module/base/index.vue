<template>
	<div class="index">
		<div class="header">
			<div class="header-left">
				<img src="../../icons/logo.png" />
				<div v-if="menuText" class="header-left-title">多商户控制平台</div>
			</div>
			<div class="header-right">
				<div class="header-right-left" @click="toSettleAgreement">《全民租机平台商家入驻协议》</div>
				<div class="header-right-right">
					<img src="../../icons/outLogin.png" />
					<div class="header-right-right-name">退出登录</div>
				</div>
			</div>
		</div>
		<div class="content">
			<div class="content-menu">
				<menu-base :isCollapse="menuClose" @backCollapse="getCollapse"></menu-base>
			</div>
			<div class="content-main">
				<div class="content-bread">
					<breadcrumb></breadcrumb>
				</div>
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	import MenuBase from "@/module/base/menu.vue"
	import Breadcrumb from "@/module/base/breadcrumb.vue"
	export default {
		components: {
			MenuBase,
			Breadcrumb
		},
		data() {
			return {
				menuClose:false, // 导航栏是否关闭
				menuText: true, // 头部的logo后文字
			}
		},
		methods: {
			getCollapse(msg) {
				let that = this
				this.menuClose = msg
				if(this.menuText == true) { // 关闭开启的延时显示
					this.menuText = !this.menuText
				} else {
					setTimeout(function() {
						that.menuText = !that.menuText
					},300)
				}
			},
			toSettleAgreement() {
				this.$router.push({
					name:"SettleAgreement"
				})
			}
		},
	}
</script>

<style scoped="scoped">
	.index {
		width: 100%;
		height: 100%;
	}
	.header {
		height: 70px;
		background-color: #3a8dff;
		padding: 0 20px;
		display: flex;
		justify-content: space-between;
		color: #ffffff;
	}
	.header-left {
		display: flex;
		margin: auto 0;
		line-height: 30px;
		font-size: 17px;
	}
	.header-left img {
		width: 30px;
		height: 30px;
		margin-right: 14px;
	}
	.header-left-title {
		
	}
	.btnClose {
		line-height: 33px;
		margin-left: 10px;
		cursor:pointer;
	}
	.btnClose img {
		width: 15px;
		height: 15px;
	}
	.header-right {
		display: flex;
		margin: auto 0;
	}
	.header-right-left {
		color: #FFFF00;
		margin-right: 15px;
		cursor:pointer;
	}
	.header-right-right {
		display: flex;
		line-height: 15px;
		font-size: 12px;
		cursor:pointer;
	}
	.header-right-right img {
		height: 15px;
		width: 15px;
	}
	.content {
		height: calc(100vh - 70px);
		width: 100%;
	}
	.content-menu {
		height: 100%;
		float: left;
	}
	.content-bread {
		border-bottom: 1px solid #eee;
	}
	.content-main {
		background-color: #f2f2f2;
		overflow-x: hidden;
		height: 100%;
	}
</style>
