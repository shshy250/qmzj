<template>
	<div class="returnAddressDetail">
		<div class="item-every">
			<div class="item-title">
				<div class="color-red">*</div>
				<div class="item-title-content">收货人姓名:</div>
			</div>
			<div class="item-content">
				<el-input size="mini" v-model="goodsName" placeholder="请输入收货人姓名"></el-input>
			</div>
		</div>
		<div class="item-every">
			<div class="item-title">
				<div class="color-red">*</div>
				<div class="item-title-content">所属区域:</div>
			</div>
			<div class="item-content">
				<el-select class="selectList" size="mini" v-model="goodsType" clearable placeholder="请选择所属区域">
					<el-option
					  v-for="item in options"
					  :key="item.value"
					  :label="item.label"
					  :value="item.value">
					</el-option>
				</el-select>
			</div>
		</div>
		<div class="item-every">
			<div class="item-title">
				<div class="color-red">*</div>
				<div class="item-title-content">详细地址:</div>
			</div>
			<div class="item-content">
				<el-input size="mini" v-model="goodsName" placeholder="请输入详细地址"></el-input>
			</div>
		</div>
		<div class="item-every">
			<div class="item-title">
				<div class="item-title-content">邮编:</div>
			</div>
			<div class="item-content">
				<el-input size="mini" v-model="goodsName" placeholder="请输入邮编"></el-input>
			</div>
		</div>
		<div class="item-every">
			<div class="item-title">
				<div class="color-red">*</div>
				<div class="item-title-content">手机号码:</div>
			</div>
			<div class="item-content">
				<el-input size="mini" v-model="goodsName" placeholder="请输入手机号码"></el-input>
			</div>
		</div>
		<div class="btns">
			<div class="btn-left">保存</div>
			<div class="btn-right">取消</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				options: [{
				  value: '选项1',
				  label: '黄金糕'
				}, {
				  value: '选项2',
				  label: '双皮奶'
				}, {
				  value: '选项3',
				  label: '蚵仔煎'
				}, {
				  value: '选项4',
				  label: '龙须面'
				}, {
				  value: '选项5',
				  label: '北京烤鸭'
				}]
			}
		},
	}
</script>

<style scoped="scoped">
	.item-every {
		width: 100%;
		margin-top: 20px;
		display: flex;
		justify-content: center;
	}
	.item-title {
		line-height: 28px;
		display: flex;
		width: 100px;
		justify-content: flex-end;
		margin-right: 5px;
	}
	.item-content {
		width: 70%;
	}
	.selectList {
		width: 100%;
	}
	.btns {
		display: flex;
		justify-content: center;
		margin-top: 30px;
	}
	.color-red {
		color: red;
	}
	.btn-left {
		margin-right: 50px;
		width: 50px;
		height: 25px;
		line-height: 25px;
		text-align: center;
		color: #FFFFFF;
		background-color: #3a8dff;
		border-radius: 3px;
	}
	.btn-right {
		width: 50px;
		height: 25px;
		line-height: 25px;
		text-align: center;
		background-color: #FFFFFF;
		border: 1px solid #C5C5C5;
		color: #C5C5C5;
		border-radius: 3px;
	}
</style>
