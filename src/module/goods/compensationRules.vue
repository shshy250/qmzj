<template>
	<div class="compensationRules">
		<div class="addButton">
			添加赔偿规则模板
		</div>
		<div class="leaseList">
			<el-table :data="tableData" border :cell-style="{'text-align': 'center',}" :header-cell-style="{'text-align': 'center', 'background-color':'#f8f8f8'}" style="width: 100%">
				<template slot="empty">
				    <img class="empty-icon" src="../../icons/tableNothing.png" alt srcset />
				    <p>暂无数据</p>
				</template>
				<el-table-column width="120px" prop="name" label="名称">
				</el-table-column>
				<el-table-column prop="time" label="内容">
				</el-table-column>
				<el-table-column prop="options" width="200px" label="操作">
					<template slot-scope="scope">
						<div class="tableDetail">
							<div class="tableDetail-every" @click="toDetail(scope.$index, scope.row)">
								<img src="../../icons/option.png" />
							</div>
							<div class="tableDetail-every">
								<img src="../../icons/delete.png" />
							</div>
						</div>
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
				tableData: [
					{
						name: '笔记本',
						time: '2019-06-01 13:30:00'
					},{
						name: '笔记本',
						time: '2019-06-01 13:30:00'
					}
				]
			}
		},
		methods: {
			toDetail() {
				this.$router.push({
					name: 'CompensationDetail'
				})
			}
		},
	}
</script>

<style scoped="scoped">
	.compensationRules {
		width: 100%;
		padding: 20px;
	}
	.addButton {
		border-radius: 5px;
		background-color: #3a8dff;
		text-align: center;
		width: 150px;
		height: 35px;
		line-height: 35px;
		color: #FFFFFF;
	}
	.leaseList {
		margin-top: 20px;
	}
	.tableDetail {
		display: flex;
		padding: 0 50px;
		justify-content: space-between;
	}
	.tableDetail-every {
		width: 20px;
		height: 20px;
	}
	.tableDetail-every img {
		width: 100%;
		height: 100%;
	}
</style>
