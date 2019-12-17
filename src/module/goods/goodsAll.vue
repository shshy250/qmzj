<template>
	<div class="goodsAll">
		<div class="top-select">
			<div class="top-select-content">
				<div class="bottom-button-add">添加商品</div>
				<div class="top-select-every">
					<div class="every-content">
						<el-select v-model="goodsType" clearable placeholder="请选择商品类别">
							<el-option
							  size="mini"
							  v-for="item in options"
							  :key="item.value"
							  :label="item.label"
							  :value="item.value">
							</el-option>
						</el-select>
					</div>
				</div>
				<div class="top-select-every">
					<div class="every-content">
						<el-select v-model="goodsName" clearable placeholder="请选择商品名称">
							<el-option
							  size="mini"
							  v-for="item in options"
							  :key="item.value"
							  :label="item.label"
							  :value="item.value">
							</el-option>
						</el-select>
					</div>
				</div>
				<div class="top-select-every">
					<div class="every-content">
						<el-date-picker
						  size="large"
						  v-model="dateValue"
						  type="daterange"
						  range-separator="~"
						  start-placeholder="开始日期"
						  end-placeholder="结束日期">
						</el-date-picker>
					</div>
				</div>
				<div class="top-select-buttons-left">搜索</div>
				<div class="top-select-buttons-right">重置</div>
			</div>
			<div class="bottom-tabs">
				<div :class="[tabsIdx=='0'?'tabs-every-action':'tabs-every']" @click="tabsClick('0')">全部</div>
				<div :class="[tabsIdx=='1'?'tabs-every-action':'tabs-every']" @click="tabsClick('1')">已上架</div>
				<div :class="[tabsIdx=='2'?'tabs-every-action':'tabs-every']" @click="tabsClick('2')">已下架</div>
				<div :class="[tabsIdx=='3'?'tabs-every-action':'tabs-every']" @click="tabsClick('3')">回收站</div>
			</div>
			<div class="bottom-list">
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
						<el-table-column prop="options" width="120px" label="操作">
							<template slot-scope="scope">
								<div class="tableDetail">
									<div class="tableDetail-every" @click="toDetail(scope.$index, scope.row)">
										<img src="../../icons/option.png" />
									</div>
									<el-popover
									  placement="top"
									  width="160"
									  trigger="click">
									  <div class="tableDetail-every-selectCon">
										  <div class="color-orange"><i class="el-icon-warning"></i></div>
										  <div class="tableDetail-every-text">是否下架该商品</div>
									  </div>
									  <div class="tableDetail-every-selectBtns">
										  <div class="tableDetail-every-selectBtn-left" @click="visible = false">取消</div>
										  <div class="tableDetail-every-selectBtn-right" @click="visible = false">确定</div>
									  </div>
									  <div class="tableDetail-every" slot="reference">
									  	<img src="../../icons/under.png" />
									  </div>
									</el-popover>
									<div class="tableDetail-every">
										<img src="../../icons/delete.png" />
									</div>
								</div>
							</template>
						</el-table-column>
					</el-table>
				</div>
			</div>
			<div class="table-page">
				<el-pagination
				  background
				  layout="prev, pager, next"
				  :total="1000">
				</el-pagination>
			</div>
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
				}],
				tabsIdx: 0, // tabs选项
				goodsType: '', // 商品类别
				goodsName: '', // 商品名称
				dateValue: '', // 日期
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
				],
				visible:false
			}
		},
		methods: {
			tabsClick(idx) {
				this.tabsIdx = idx
			},
			toDetail(index,row) {
				console.log(index,row)
				this.$router.push({
					name: 'GoodsDetail',
					params: {
						idx: index
					}
				})
			}
		},
	}
</script>

<style scoped>
	.el-date-editor--daterange.el-input__inner {
		width: 260px!important;
	}
	.goodsAll {
		width: 100%;
		padding: 20px;
	}
	.top-select {
		padding: 20px;
		background-color: #FFFFFF;
		width: 100%;
	}
	.top-select-content {
		display: flex;
		justify-content: space-between;
	}
	.top-select-every {
		display: flex;
		line-height: 40px;
	}
	.every-content {
		height: 40px;
		margin-left: 20px;
	}
	.top-select-buttons {
		display: flex;
		justify-content: center;
		margin-bottom: 25px;
		margin-top: 25px;
	}
	.top-select-buttons-left {
		width: 70px;
		height: 30px;
		border-radius: 5px;
		background-color: #3a8dff;
		color: #FFFFFF;
		text-align: center;
		line-height: 30px;
	}
	.top-select-buttons-right {
		width: 70px;
		height: 30px;
		border-radius: 5px;
		color: #3a8dff;
		text-align: center;
		line-height: 30px;
		border: 1px solid #3a8dff;
	}
	.bottom-button-add {
		width: 90px;
		height: 30px;
		border-radius: 5px;
		background-color: #3a8dff;
		color: #FFFFFF;
		text-align: center;
		line-height: 30px;
	}
	.bottom-goods {
		background-color: #FFFFFF;
	}
	.bottom-tabs {
		margin-top: 20px;
		display: flex;
		font-size: 13px;
		margin-bottom: 10px;
		border-bottom: 1px solid #e6e6e6;
	}
	.tabs-every {
		cursor: pointer;
		position: relative;
		bottom: -1px;
		background-color: #f8f8f8;
		text-align: center;
		width: 70px;
		height: 30px;
		line-height: 30px;
		margin-right: 3px;
		border: 1px solid #E6E6E6;
	}
	.tabs-every-action {
		cursor: pointer;
		position: relative;
		bottom: -1px;
		text-align: center;
		width: 70px;
		height: 30px;
		line-height: 30px;
		margin-right: 3px;
		border-top: 1px solid #E6E6E6;
		border-left: 1px solid #E6E6E6;
		border-right: 1px solid #E6E6E6;
		border-bottom: 1px solid #FFFFFF;
	}
	.tableDetail {
		display: flex;
		justify-content: space-around;
		width: 100%;
	}
	.tableDetail-every {
		width: 20px;
		height: 20px;
	}
	.tableDetail-every img {
		width: 100%;
		height: 100%;
	}
	.tableDetail-every-selectBtns {
		display: flex;
		justify-content: flex-end;
		text-align: right;
		margin-top: 10px;
		font-size: 11px;
	}
	.tableDetail-every-selectBtn-left {
		border-radius: 2px;
		border: 1px solid #E6E6E6;
		color: #737373;
		text-align: center;
		line-height: 18px;
		width: 40px;
		height: 18px;
		margin-right: 5px;
	} 
	.tableDetail-every-selectBtn-right {
		border-radius: 2px;
		background-color: #1E88E5;
		color: #FFFFFF;
		text-align: center;
		line-height: 18px;
		width: 40px;
		height: 18px;
		margin-right: 5px;
	} 
	.tableDetail-every-selectCon {
		display: flex;
	}
	.table-page {
		text-align: right;
		margin-top: 30px;
	}
	.color-orange {
		color: orange;
	}
</style>
