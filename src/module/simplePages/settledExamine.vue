<template>
	<div class="settledExamine">
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
			<div class="topProcess">
				<div class="process-every">
					<img src="../../icons/settledExamineTrue.png" />
				</div>
				<div class="process-arrow">
					<img src="../../icons/settledExamineArrow.png" />
				</div>
				<div class="process-every">
					<img src="../../icons/settledExamineTrue.png" />
				</div>
				<div class="process-arrow">
					<img src="../../icons/settledExamineArrow.png" />
				</div>
				<div class="process-every">
					<img src="../../icons/settledExamineTrue.png" />
				</div>
			</div>
			<div class="process-title">
				<div class="title-every">
					提交企业资质
				</div>
				<div class="title-every">
					填写店铺信息
				</div>
				<div class="title-every">
					提交成功
				</div>
			</div>
			<div class="examine-content-top">
				<div class="examine-content-top-top">
					<i class="el-icon-success"></i>
					<div class="examine-content-top-top-content">审核通过</div>
				</div>
				<div class="examine-content-top-bottom">
					请再次审核您提交的信息，审核通过之前，可随时修改
				</div>
			</div>
			<div class="examine-content">
				<div class="examine-content-title">企业信息已审核通过！</div>
				<div class="examine-content-every">公司名称：北京素组有限公司</div>
				<div class="examine-content-every">联系人：张先生</div>
				<div class="examine-content-every">联系电话：13321568977</div>
			</div>
			<div class="examine-content">
				<div class="examine-content-title">店铺信息已审核通过！</div>
				<div class="examine-content-every">店铺名称：北京素组有限公司</div>
				<div class="examine-content-every">店铺类型：企业店</div>
				<div class="examine-content-every">店铺类目：优享电脑</div>
			</div>
			<div class="btn">立即入住</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
	}
</script>

<style scoped="scoped">
	.settledExamine {
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
		width: 500px;
		margin: 80px auto;
	}
	.topProcess {
		width: calc(100% - 25px);
		display: flex;
		justify-content: space-between;
		margin-left: 20px;
	}
	.topProcess img {
		width: 100%;
	}
	.process-every {
		width: 50px;
		height: 50px;
	}
	.process-arrow {
		width: 120px;
		margin: auto 0;
	}
	.process-title {
		margin-top: 20px;
		display: flex;
		justify-content: space-between;
	}
	.examine-content-top {
		margin-top: 50px;
		border-bottom: 1px dashed #000000;
	}
	.examine-content-top-top {
		display: flex;
		font-size: 17px;
		font-weight: bold;
	}
	.examine-content-top-bottom {
		padding-left: 17px;
		line-height: 30px;
	}
	.examine-content {
		padding: 20px 17px;
		border-bottom: 1px dashed #000000;
	}
	.examine-content-title {
		font-weight: bold;
		margin-bottom: 15px;
	}
	.examine-content-every {
		line-height: 25px;
	}
	.btn {
		width: 90px;
		height: 35px;
		color: #FFFFFF;
		text-align: center;
		line-height: 35px;
		background-color: #1fc5a3;
		border-radius: 5px;
		margin: 50px auto;
		font-size: 13px;
	}
</style>
