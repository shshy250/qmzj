<template>
	<div class="order-detail">
		<div class="top-step">
			<el-steps :space="200" :active="stepActive" finish-status="success" align-center>
			  <el-step title="买家下单"></el-step>
			  <el-step title="买家付款"></el-step>
			  <el-step title="商家发货"></el-step>
			  <el-step title="买家租用"></el-step>
			  <el-step title="归还与结算"></el-step>
			  <el-step title="订单完成"></el-step>
			</el-steps>
		</div>
		<div class="order-status">
			<div class="status-detail">当前订单状态：</div>
			<div class="order-status-btn" @click="tipsClick">备注</div>
		</div>
		<div class="order-msg">
			<div class="order-msg-title">
				订单信息
			</div>
			<div class="order-msg-content">
				<div class="personMsg">
					<div class="msgTitle">
						买家信息
					</div>
					<div class="msgContent">
						<div class="msgContent-every">
							真实姓名：盛世运
						</div>
						<div class="msgContent-every">
							联系电话：18355698745
						</div>
						<div class="msgContent-every">
							身份证：13546587953846553123
						</div>
					</div>
				</div>
				<div class="personMsg">
					<div class="msgTitle">
						卖家信息
					</div>
					<div class="msgContent">
						<div class="msgContent-every">
							真实姓名：盛世运
						</div>
						<div class="msgContent-every">
							联系电话：18355698745
						</div>
						<div class="msgContent-every">
							身份证：13546587953846553123
						</div>
					</div>
				</div>
				<div class="tableMsg">
					<div class="tableMsg-title">商品信息</div>
					<div class="tableMsg-list">
						<el-table :data="goodsTableData" border style="width: 100%">
						    <template slot="empty">
						        <img class="empty-icon" src="../../icons/tableNothing.png" />
						        <p>暂无数据</p>
						    </template>
						    <el-table-column prop="name" label="宝贝"></el-table-column>
						    <el-table-column prop="name" label="宝贝属性"></el-table-column>
						    <el-table-column prop="address" label="单价"></el-table-column>
						    <el-table-column prop="date" label="数量"></el-table-column>
						</el-table>
					</div>
				</div>
				<div class="tableMsg">
					<div class="tableMsg-title">租期信息</div>
					<div class="tableMsg-list">
						<el-table :data="leaseTableData" border style="width: 100%">
						    <template slot="empty">
						        <img class="empty-icon" src="../../icons/tableNothing.png" />
						        <p>暂无数据</p>
						    </template>
						    <el-table-column prop="name" label="租用天数"></el-table-column>
						    <el-table-column prop="name" label="起租时间"></el-table-column>
						    <el-table-column prop="address" label="归还时间"></el-table-column>
						</el-table>
					</div>
				</div>
				<div class="tableMsg">
					<div class="tableMsg-title">租金信息</div>
					<div class="tableMsg-list">
						<el-table :data="leaseTableData" border style="width: 100%">
						    <template slot="empty">
						        <img class="empty-icon" src="../../icons/tableNothing.png" />
						        <p>暂无数据</p>
						    </template>
						    <el-table-column prop="name" label="单价"></el-table-column>
						    <el-table-column prop="name" label="天数"></el-table-column>
						    <el-table-column prop="address" label="数量"></el-table-column>
							<el-table-column prop="name" label="平台优惠"></el-table-column>
							<el-table-column prop="name" label="店铺优惠"></el-table-column>
							<el-table-column prop="address" label="增值服务费"></el-table-column>
							<el-table-column prop="name" label="运费"></el-table-column>
							<el-table-column prop="name" label="实付租金"></el-table-column>
						</el-table>
					</div>
				</div>
				<div class="tableMsg">
					<div class="tableMsg-title">押金信息</div>
					<div class="tableMsg-list">
						<el-table :data="leaseTableData" border style="width: 100%">
						    <template slot="empty">
						        <img class="empty-icon" src="../../icons/tableNothing.png" />
						        <p>暂无数据</p>
						    </template>
						    <el-table-column prop="name" label="押金"></el-table-column>
						    <el-table-column prop="name" label="减免"></el-table-column>
						    <el-table-column prop="address" label="芝麻信用免押"></el-table-column>
							<el-table-column prop="name" label="自有冻结"></el-table-column>
						</el-table>
					</div>
				</div>
				<div class="tableMsg">
					<div class="tableMsg-title">分期信息</div>
					<div class="tableMsg-list">
						<el-table :data="leaseTableData" border style="width: 100%">
						    <template slot="empty">
						        <img class="empty-icon" src="../../icons/tableNothing.png" />
						        <p>暂无数据</p>
						    </template>
						    <el-table-column prop="name" label="总期数"></el-table-column>
						    <el-table-column prop="name" label="当前期数"></el-table-column>
						    <el-table-column prop="address" label="租金"></el-table-column>
							<el-table-column prop="name" label="状态"></el-table-column>
							<el-table-column prop="name" label="账单到期时间"></el-table-column>
						</el-table>
					</div>
				</div>
				<div class="create-time">创建时间：2019-10-18 00:23:01</div>
			</div>
		</div>
		
		<el-dialog
		  title="添加备注"
		  :visible.sync="tipsDialogVisible"
		  width="30%"
		  center>
		  <div class="dialogContent">
			<el-input
			  type="textarea"
			  :rows="4"
			  placeholder="请输入备注信息"
			  v-model="dialogTextarea">
			</el-input>
		  </div>
		  <span slot="footer" class="dialog-footer">
			<el-button size="mini" type="primary" @click="tipsDialogVisible = false">导 出</el-button>
			<el-button size="mini" @click="tipsDialogVisible = false">取 消</el-button>
		  </span>
		</el-dialog>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				stepActive:0, // 步骤条进度
				couponTableData: [
					{
						name: '123',
						address: 'laall'
					},{
						name: '123',
						address: 'laall'
					},{
						name: '123',
						address: 'laall'
					},
				], // 商品信息
				leaseTableData: [], // 租赁信息
				tipsDialogVisible: false, // 备注弹窗显示
				dialogTextarea: '', // 添加备注弹窗内容
			}
		},
		methods: {
			tipsClick() {
				this.tipsDialogVisible = true
			}
		},
	}
</script>

<style scoped="scoped">
	.order-detail {
		width: 100%;
		padding: 20px;
	}
	.top-step {
		margin: 0 auto;
	}
	.empty-icon {
		margin-top: 35px;
		width: 70px;
		height: 60px;
	}
	.order-status {
		background-color: #dbedff;
		border: 1px solid #0000FF;
		padding: 20px;
		margin-top: 20px;
	}
	.order-status-btn {
		background-color: #3a8dff;
		color: #FFFFFF;
		text-align: center;
		width: 60px;
		height: 25px;
		font-size: 13px;
		line-height: 25px;
		margin-top: 15px;
		border-radius: 3px;
		cursor: pointer;
	}
	.order-msg {
		margin-top: 10px;
		background-color: #FFFFFF;
	}
	.order-msg-title {
		background-color: #E6E6E6;
		border: 1px solid #737373;
		padding: 0 20px;
		height: 35px;
		line-height: 35px;
	}
	.order-msg-content {
		padding: 20px;
	}
	.msgContent {
		display: flex;
		justify-content: space-between;
		height: 50px;
		line-height: 50px;
		border-bottom: 1px solid #E6E6E6;
		margin-bottom: 20px;
	}
	.tableMsg {
		margin-bottom: 20px;
	}
	.tableMsg-title {
		margin-bottom: 20px;
		font-weight: bold;
		color: #737373;
	}
	.create-time {
		color: #737373;
	}
</style>
