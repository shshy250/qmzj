<template>
	<div class="increment">
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
						<template slot-scope="scope">
							<div class="tableDetail" @click="toDetail(scope.$index, scope.row)">详情</div>
						</template>
					</el-table-column>
				</el-table>
			</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				showEmpty: false, // 显示缺省页
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
		methods: {
			toDetail(index,row) {
				console.log(index,row)
				this.$router.push({
					name: 'IncrementDetail',
					params: {
						idx: index
					}
				})
			}
		},
	}
</script>

<style scoped>
	.increment {
		width: 100%;
		padding: 20px;
	}
	.addIncrement {
		background-color: #3a8dff;
		color: #ffffff;
		height: 35px;
		width: 100px;
		text-align: center;
		line-height: 30px;
		border-radius: 5px;
		margin-bottom: 15px;
		font-size: 12px;
	}
	.table-content {
		width: 100%;
	}
	.tableDetail {
		
	}
	.empty-content {
		width: 100%;
		border: 1px solid #f1f3f8;
		height: calc(100% - 60px);
	}
	.empty-content-all {
		width: 120px;
		margin: 150px auto;
	}
	.empty-content img {
		width: 100%;
		height: 100px;
	}
	.empty-content-title {
		font-size: 12px;
		text-align: center;
		margin-top: 20px;
		color: #737373;
	}
</style>
