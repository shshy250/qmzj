<template>
	<div class="buyoutOrder">
		<div class="selectAll">
			<div class="top-select">
				<div class="select-every">
					<el-input size="mini" v-model="goodsName" placeholder="订单编号"></el-input>
				</div>
				<div class="select-every">
					<el-input size="mini" v-model="goodsName" placeholder="商品名称"></el-input>
				</div>
				<div class="select-every">
					<el-input size="mini" v-model="goodsName" placeholder="商品ID"></el-input>
				</div>
				<div class="select-every">
					<el-select size="mini" v-model="goodsType" clearable placeholder="订单子状态">
						<el-option
						  v-for="item in options"
						  :key="item.value"
						  :label="item.label"
						  :value="item.value">
						</el-option>
					</el-select>
				</div>
			</div>
			<div class="bottom-select">
				<div class="select-every">
					<el-input size="mini" v-model="goodsName" placeholder="订单编号"></el-input>
				</div>
				<div class="select-every">
					<el-date-picker
					  size="mini"
					  v-model="dateValue"
					  type="daterange"
					  range-separator="至"
					  start-placeholder="起租开始时间"
					  end-placeholder="起租结束时间">
					</el-date-picker>
				</div>
				<div class="select-every">
					<el-date-picker
					  size="mini"
					  v-model="dateValue"
					  type="daterange"
					  range-separator="至"
					  start-placeholder="创建开始时间"
					  end-placeholder="创建结束时间">
					</el-date-picker>
				</div>
			</div>
			<div class="select-buttons">
				<div class="select-buttons-left">
					<div class="search-btn">搜索</div>
					<div class="reset-btn">重置</div>
				</div>
				<div class="select-buttons-right" @click="outClick">导出</div>
			</div>
		</div>
		<div class="tabs">
			<div :class="[tabSelect=='0'?'tab-active':'tab-every']">全部</div>
			<div :class="[tabSelect=='1'?'tab-active':'tab-every']">待支付</div>
			<div :class="[tabSelect=='2'?'tab-active':'tab-every']">订单完成</div>
		</div>
		<div class="table-content">
			<el-table :data="tableData" border :cell-style="{'text-align': 'center',}" :header-cell-style="{'text-align': 'center', 'background-color':'#f8f8f8'}" style="width: 100%">
				<template slot="empty">
				    <img class="empty-icon" src="../../icons/tableNothing.png" alt srcset />
				    <p>暂无数据</p>
				</template>
				<el-table-column width="120px" prop="name" label="订单号">
				</el-table-column>
				<el-table-column prop="time" label="原订单号">
				</el-table-column>
				<el-table-column prop="time" label="商品">
				</el-table-column>
				<el-table-column prop="time" label="买断下单时间">
				</el-table-column>
				<el-table-column prop="time" label="下单用户">
				</el-table-column>
				<el-table-column prop="time" label="状态">
				</el-table-column>
				<el-table-column prop="options" width="200px" label="操作">
					<template slot-scope="scope">
						<div class="tableOption">
							<div class="tableOption-every" @click="toDetail(scope.$index, scope.row)">
								查看
							</div>
							<div class="tableOption-every" @click="codeClick">
								证件
							</div>
							<div class="tableOption-every">
								备注
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
		</div>
		
		<el-dialog
		  title="导出数据"
		  :visible.sync="outDialogVisible"
		  width="40%">
		  <div class="outDialogContent">
			<div class="dialog-item-every">
				<div class="dialog-item-title">下单时间:</div>
				<div class="dialog-item-content">
					<el-date-picker
					  size="mini"
					  v-model="dateValue"
					  type="daterange"
					  range-separator="至"
					  start-placeholder="下单开始时间"
					  end-placeholder="下单结束时间">
					</el-date-picker>
				</div>
			</div>
			<div class="dialog-item-every">
				<div class="dialog-item-title">起租时间:</div>
				<div class="dialog-item-content">
					<el-date-picker
					  size="mini"
					  v-model="dateValue"
					  type="daterange"
					  range-separator="至"
					  start-placeholder="起租开始时间"
					  end-placeholder="起租结束时间">
					</el-date-picker>
				</div>
			</div>
			<div class="dialog-item-every">
				<div class="dialog-item-title">订单状态:</div>
				<div class="dialog-item-content">
					<el-select size="mini" v-model="goodsType" clearable placeholder="请选择订单状态">
						<el-option
						  v-for="item in options"
						  :key="item.value"
						  :label="item.label"
						  :value="item.value">
						</el-option>
					</el-select>
				</div>
			</div>
		  </div>
		  <span slot="footer" class="dialog-footer">
			<el-button size="mini" type="primary" @click="outDialogVisible = false">导 出</el-button>
			<el-button size="mini" @click="outDialogVisible = false">取 消</el-button>
		  </span>
		</el-dialog>
		
		<el-dialog
		  title="身份信息"
		  :visible.sync="codeDialogVisible"
		  width="30%">
		  <div class="codeDialogContent">
			<div class="codeDialogContent">
				<el-image class="dialogImg">
				  <div slot="error" class="image-slot">
					<i class="el-icon-picture-outline image-slot-i"></i>
					<div class="erro-img-tips">暂未上传图片</div>
				  </div>
				</el-image>
			</div>
			<div class="codeDialogTitle">人面像</div>
			<div class="codeDialogContent">
				<el-image class="dialogImg">
				  <div slot="error" class="image-slot">
					<i class="el-icon-picture-outline image-slot-i"></i>
					<div class="erro-img-tips">暂未上传图片</div>
				  </div>
				</el-image>
			</div>
			<div class="codeDialogTitle">国徽面</div>
			<div class="codeDialogContent">
				<el-image class="dialogImg" src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg">
				  <div slot="error" class="image-slot">
					<i class="el-icon-picture-outline image-slot-i"></i>
					<div class="erro-img-tips">暂未上传图片</div>
				  </div>
				</el-image>
			</div>
			<div class="codeDialogTitle">手持身份证面</div>
		  </div>
		</el-dialog>
		
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
				tableData: [
					{
						name: '笔记本',
						time: '2019-06-01 13:30:00'
					},{
						name: '笔记本',
						time: '2019-06-01 13:30:00'
					}
				],
				tabSelect: '0',
				outDialogVisible: false, // 弹窗显示
				codeDialogVisible: false, // 弹窗显示
			}
		},
		methods: {
			toDetail() {
				this.$router.push({
					name:'OrderDetail'
				})
			},
			outClick() {
				this.outDialogVisible = true
			},
			codeClick() {
				this.codeDialogVisible = true
			}
		},
	}
</script>

<style scoped="scoped">
	.buyoutOrder {
		width: 100%;
		padding: 20px;
	}
	.selectAll {
		background-color: #FFFFFF;
		padding: 17px;
		width: 100%;
	}
	.top-select {
		display: flex;
		justify-content: space-between;
	}
	.bottom-select {
		margin-top: 20px;
		display: flex;
		/* justify-content: space-between; */
	}
	.select-every {
		min-width: 23%;
	}
	.bottom-select .select-every {
		margin-right: 30px;
	}
	.select-buttons {
		margin-top: 20px;
		display: flex;
		justify-content: space-between;
	}
	.search-btn {
		background-color: #3a8dff;
		width: 60px;
		height: 30px;
		border-radius: 3px;
		color: #FFFFFF;
		margin-right: 15px;
		text-align: center;
		line-height: 30px;
		cursor: pointer;
	}
	.reset-btn {
		width: 60px;
		height: 30px;
		border-radius: 3px;
		color: #737373;
		border: 1px solid #737373;
		text-align: center;
		line-height: 30px;
		cursor: pointer;
	}
	.select-buttons-left {
		display: flex;
		
	}
	.select-buttons-right {
		background-color: #3a8dff;
		width: 60px;
		height: 30px;
		border-radius: 3px;
		color: #FFFFFF;
		text-align: center;
		line-height: 30px;
		cursor: pointer;
	}
	.tabs {
		background-color: #FFFFFF;
		display: flex;
		border-top: 1px solid #E6E6E6;
		border-bottom: 1px solid #E6E6E6;
		height: 35px;
		line-height: 35px;
	}
	.table-content {
		background-color: #FFFFFF;
	}
	.tab-every {
		width: 70px;
		text-align: center;
		cursor: pointer;
	}
	.tab-active {
		position: relative;
		width: 70px;
		text-align: center;
		color: #409EFF;
		border-bottom: 1px solid #409EFF;
		cursor: pointer;
	}
	.table-content {
		padding: 17px;
	}
	.table-page {
		width: 100%;
		text-align: right;
		margin-top: 20px;
	}
	.tableOption {
		display: flex;
		justify-content: space-around;
		color: #3a8dff;
	}
	.tableOption-every {
		cursor: pointer;
	}
	.dialog-item-every {
		width: 100%;
		margin-top: 20px;
		display: flex;
		justify-content: center;
	}
	.dialog-item-content {
		width: 50%;
	}
	.codeDialogContent {
		width: 100%;
		padding: 10px;
	}
	.dialogImg {
		margin-bottom: 10px;
		background-color: #E6E6E6;
		text-align: center;
		width: 100%;
		height: 220px;
	}
	.image-slot {
		
	}
	.image-slot-i {
		margin-top: 80px;
		font-size: 20px;
	}
	.erro-img-tips {
		width: 100%;
		margin-top: 20px;
		text-align: center;
		color: #C5C5C5;
	}
	.codeDialogTitle {
		padding-left: 10px;
		margin-bottom: 10px;
	}
</style>
