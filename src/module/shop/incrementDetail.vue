<template>
	<div class="incrementDetail">
		<div class="module">
			<div class="module-title">增值服务</div>
			<div class="module-content">
				<div class="increment-top">
					<div class="increment-top-left">
						<div class="item-title"><span class="color-red">*</span>增值服务名称</div>
						<el-input v-model="incrementName" placeholder="请输入增值服务名称"></el-input>
					</div>
					<div class="increment-top-right">
						<div class="item-title"><span class="color-red">*</span>增值服务价格</div>
						<el-input v-model="incrementPrice" placeholder="请输入增值服务价格"></el-input>
					</div>
				</div>
				<div class="increment-bottom">
					<div class="increment-bottom-left">
						<div class="item-title"><span class="color-red">*</span>增值服务内容</div>
						<el-input type="textarea" :autosize="{ minRows: 2}" v-model="incrementContent" placeholder="请输入增值服务内容"></el-input>
					</div>
					<div class="increment-bottom-right">
						<div class="item-title"><span class="color-red">*</span>增值服务说明</div>
						<el-input type="textarea" :autosize="{ minRows: 2}" v-model="incrementTips" placeholder="请输入增值服务说明"></el-input>
					</div>
				</div>
				<div class="increment-buttons">
					<div class="button-left">提交</div>
					<div class="button-right">返回</div>
				</div>
			</div>
		</div>
		<div class="module2">
			<div class="module-title">商品列表</div>
			<div class="module-content">
				<div class="addIncrement">添加增值服务</div>
				<div class="table-content">
					<el-table :data="tableData" border :header-cell-style="{'background-color':'#f8f8f8',}" style="width: 100%">
						<template slot="empty">
						    <img class="empty-icon" src="../../icons/tableNothing.png" alt srcset />
						    <p>暂无数据</p>
						</template>
						<el-table-column prop="name" label="名称">
						</el-table-column>
						<el-table-column prop="price" label="价格">
						</el-table-column>
						<el-table-column prop="content" label="内容">
						</el-table-column>
						<el-table-column prop="status" label="状态">
						</el-table-column>
						<el-table-column prop="options" label="操作">
						</el-table-column>
					</el-table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				incrementName: '',
				incrementPrice: '',
				incrementContent: '',
				incrementTips: '',
				showEmpty: false,
				tableData: [
					{
						name: '123',
						price: '10.1',
						content: '啦啦啦啦啦',
						status: '完成'
					},{
						name: '123',
						price: '10.1',
						content: '啦啦啦啦啦',
						status: '完成'
					}
				]
			}
		},
	}
</script>

<style scoped>
	.incrementDetail {
		width: 100%;
		height: 100%;
		padding: 20px;
		background-color: #f2f2f2;
	}
	.module, .module2 {
		width: 100%;
		height: calc(50% - 10px);
		border: 1px solid #e6e6e6;
		background-color: #FFFFFF;
	}
	.module2 {
		margin-top: 18px;
	}
	.module-title {
		width: 100%;
		height: 40px;
		padding-left: 20px;
		line-height: 40px;
		border-bottom: 1px solid #E6E6E6;
	}
	.module-content {
		height: calc(100% - 25px);
		padding: 15px;
		overflow-y: auto;
	}
	.increment-top {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.increment-top-left, .increment-top-right {
		width: 49%;
	}
	.increment-bottom {
		margin-top: 20px;
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.increment-bottom-left, .increment-bottom-right {
		width: 49%;
	}
	.increment-buttons {
		display: flex;
		justify-content: center;
		margin-top: 20px;
	}
	.button-left {
		width: 70px;
		height: 30px;
		background-color: #3a8dff;
		color: #FFFFFF;
		margin-right: 50px;
		text-align: center;
		line-height: 30px;
		border-radius: 5px;
		cursor:pointer;
	}
	.button-right {
		width: 70px;
		height: 30px;
		background-color: #FFFFFF;
		color: #3a8dff;
		border: 1px solid #3a8dff;
		border-radius: 5px;
		text-align: center;
		line-height: 30px;
		cursor:pointer;
	}
	.addIncrement {
		background-color: #f2f2f2;
		width: 90px;
		height: 35px;
		border-radius: 5px;
		text-align: center;
		line-height: 35px;
		margin-bottom: 15px;
		color: #c1c1c1;
		cursor:pointer;
		border: 1px solid #c1c1c1;
	}
	.table-content {
		
	}
	.empty-content {
		width: 100%;
		height: calc(100% - 50px);
		text-align: center;
	}
	.empty-content-all {
		margin: 0 auto;
	}
	.empty-content-all img {
		width: 120px;
	}
	.color-red {
		color: red;
	}
</style>
