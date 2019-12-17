<template>
	<div class="compensationDetail">
		<div class="template-name">
			<div class="color-red">*</div>
			<div class="name-title">模板名称:</div>
			<div class="name-content">
				<el-input size="mini" v-model="goodsName" placeholder="请输入赔偿规则"></el-input>
			</div>
		</div>
		<div class="template-detail">
			<div class="color-red">*</div>
			<div class="detail-title">规则详情:</div>
			<div class="detail-content">
				<editor></editor>
			</div>
		</div>
		<div class="buttons">
			<div class="button-left">保存</div>
			<div class="button-right">取消</div>
		</div>
	</div>
</template>

<script>
	import Editor from "../../components/wangeditor.vue"
	export default {
		components: {
			Editor
		},
		data() {
			return {
				
			}
		},
	}
</script>

<style scoped="scoped">
	.compensationDetail {
		width: 100%;
		padding: 30px 20px;
	}
	.template-name {
		width: 90%;
		display: flex;
		line-height: 28px;
		margin: 0 auto;
	}
	.name-content {
		width: calc(100% - 70px);
	}
	.color-red {
		color: red;
	}
	.color-red, .detail-title {
		line-height: 28px;
	}
	.template-detail {
		margin: 0 auto;
		width: 90%;
		display: flex;
		margin-top: 20px;
	}
	.detail-content {
		background-color: #FFFFFF;
		width: calc(100% - 70px);
	}
	.buttons {
		margin: 40px 0;
		display: flex;
		justify-content: center;
		font-size: 12px;
	}
	.button-left {
		margin-right: 80px;
		width: 50px;
		height: 25px;
		background-color: #3a8dff;
		color: #FFFFFF;
		border-radius: 3px;
		text-align: center;
		line-height: 25px;
	}
	.button-right {
		width: 50px;
		height: 25px;
		background-color: #FFFFFF;
		color: #737373;
		border: 1px solid #737373;
		background-color: #FFFFFF;
		border-radius: 3px;
		text-align: center;
		line-height: 25px;
	}
</style>
