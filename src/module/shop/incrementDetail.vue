<template>
	<div class="incrementDetail">
		<div class="module">
			<div class="module-title">增值服务</div>
			<div class="module-content">
				<div class="increment-top">
					<div class="increment-top-left">
						<div class=""></div>
					</div>
				</div>
			</div>
		</div>
		<div class="module2">
			<div class="module-title">商品列表</div>
			<div class="module-content">
				<div class="addIncrement">添加增值服务</div>
				<div v-if="!showEmpty" class="table-content">
					<el-table :data="tableData" border :header-cell-style="{'background-color':'#c5deff',}" style="width: 100%">
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
				<div v-if="showEmpty" class="empty-content">
					<div class="empty-content-all">
						<img src="../../icons/tableNothing.png" />
						<div class="empty-content-title">暂无数据</div>
					</div>
				</div>
			</div>
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

<style scoped>
	.incrementDetail {
		width: 100%;
		height: 100%;
		padding: 20px;
	}
	.module, .module2 {
		width: 100%;
		height: calc(50% - 10px);
		border: 1px solid #e6e6e6;
	}
	.module2 {
		margin-top: 18px;
	}
	.module-title {
		background-color: #e6e6e6;
		width: 100%;
		height: 25px;
		padding-left: 20px;
		line-height: 25px;
	}
</style>
