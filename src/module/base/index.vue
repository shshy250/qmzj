<template>
	<div class="index">
		<div class="header">
			<div class="header-left">
				<img src="../../icons/logo.png" />
				<div class="header-left-title">全民租机商家中心</div>
			</div>
			<div class="header-right">
				<div class="header-right-left">《全民租机平台商家入驻协议》</div>
				<div class="header-right-right">
					<img src="../../icons/outLogin.png" />
					<div class="header-right-right-name">退出登录</div>
				</div>
			</div>
		</div>
		<div class="content">
			<div class="content-menu">
				<menu-base></menu-base>
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
				
			}
		},
		methods: {
			
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
		font-size: 18px;
	}
	.header-left img {
		width: 30px;
		height: 30px;
	}
	.header-right {
		display: flex;
		margin: auto 0;
	}
	.header-right-left {
		color: #FFFF00;
		margin-right: 15px;
	}
	.header-right-right {
		display: flex;
		line-height: 15px;
		font-size: 12px;
	}
	.header-right-right img {
		height: 15px;
		width: 15px;
	}
	.content {
		display: flex;
		height: calc(100vh - 70px);
	}
	.content-menu {
		height: 100%;
	}
	.content-bread {
		height: 56px;
		border-bottom: 1px solid #eee;
	}
	.content-main {
		width: calc(100% - 200px);
		height: calc(100% - 56px);
	}
</style>
