<template>
	<div class="buyOutDetail">
		<div class="detailContent">
			<el-table
				:header-cell-style="{'background-color':'#f8f8f8',}"
				ref="multipleTable"
				:data="tableData"
				tooltip-effect="dark"
				style="width: 100%"
				@selection-change="handleSelectionChange">
					<template slot="empty">
						<img class="empty-icon" src="../../icons/tableNothing.png" alt srcset />
						<p>暂无数据</p>
					</template>
					<el-table-column type="selection" width="55"></el-table-column>
					<el-table-column width="100" prop="name" label="序号" show-overflow-tooltip></el-table-column>
					<el-table-column width="200" prop="address" label="商品规格" show-overflow-tooltip></el-table-column>
					<el-table-column prop="address" label="买断总额">
						<template slot-scope="scope">
							<div class="tableDetail">
								<div class="tableDetail-every">
									<div class="tableDetail-text">
										￥1600&nbsp;+&nbsp;
									</div>
									<div class="tableDetail-input">
										<el-input v-model="goodsName" size="mini" placeholder="请输入尾款"></el-input>
									</div>
									<div class="tableDetail-text">
										&nbsp;&nbsp;&nbsp;=&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1日及以上：是指租用天数及以上天数后的买断总额
									</div>
								</div>
								
								<div class="tableDetail-every">
									<div class="tableDetail-text">
										￥1600&nbsp;+&nbsp;
									</div>
									<div class="tableDetail-input">
										<el-input v-model="goodsName" size="mini" placeholder="请输入尾款"></el-input>
									</div>
									<div class="tableDetail-text">
										&nbsp;&nbsp;&nbsp;=&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1日及以上：是指租用天数及以上天数后的买断总额
									</div>
								</div>
								
								<div class="tableDetail-every">
									<div class="tableDetail-text">
										￥1600&nbsp;+&nbsp;
									</div>
									<div class="tableDetail-input">
										<el-input v-model="goodsName" size="mini" placeholder="请输入尾款"></el-input>
									</div>
									<div class="tableDetail-text">
										&nbsp;&nbsp;&nbsp;=&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1日及以上：是指租用天数及以上天数后的买断总额
									</div>
								</div>
								
								<div class="tableDetail-every">
									<div class="tableDetail-text">
										￥1600&nbsp;+&nbsp;
									</div>
									<div class="tableDetail-input">
										<el-input v-model="goodsName" size="mini" placeholder="请输入尾款"></el-input>
									</div>
									<div class="tableDetail-text">
										&nbsp;&nbsp;&nbsp;=&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1日及以上：是指租用天数及以上天数后的买断总额
									</div>
								</div>
								
								<div class="tableDetail-every">
									<div class="tableDetail-text">
										￥1600&nbsp;+&nbsp;
									</div>
									<div class="tableDetail-input">
										<el-input v-model="goodsName" size="mini" placeholder="请输入尾款"></el-input>
									</div>
									<div class="tableDetail-text">
										&nbsp;&nbsp;&nbsp;=&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1日及以上：是指租用天数及以上天数后的买断总额
									</div>
								</div>
							</div>
						</template>
					</el-table-column>
			</el-table>
			<div class="table-page">
				<el-pagination
				  background
				  layout="prev, pager, next"
				  :total="1000">
				</el-pagination>
			</div>
			<div class="button">确定配置</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tableData: [
					{
						name: '123',
						price: '10.1',
						address: '啦啦啦啦啦',
						status: '完成'
					},{
						name: '123',
						price: '10.1',
						address: '啦啦啦啦啦',
						status: '完成'
					}
				]
			}
		},
	}
</script>

<style scoped="scoped">
	.buyOutDetail {
		width: 100%;
		padding: 20px;
	}
	.detailContent {
		background-color: #FFFFFF;
		width: 100%;
		padding: 17px;
	}
	.tableDetail {
		font-size: 12px;
	}
	.tableDetail-every {
		display: flex;
		line-height: 28px;
		margin: 10px 0;
	}
	.tableDetail-input {
		width: 92px;
	}
	.table-page {
		text-align: right;
		margin-top: 30px;
	}
	.button {
		font-size: 12px;
		width: 75px;
		height: 30px;
		border-radius: 4px;
		background-color: #1E88E5;
		color: #FFFFFF;
		text-align: center;
		line-height: 30px;
		margin: 50px auto;
	}
</style>
