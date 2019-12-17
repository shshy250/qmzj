<template>
	<div class="goodsDetail">
		<div class="detailContent">
			<div class="item-every">
				<div class="item-title">
					<div class="color-red">*</div>
					<div class="item-title-content">商品类目：</div>
				</div>
				<div class="item-content selectInput">
					<el-select v-model="goodsType" clearable placeholder="请选择类别">
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
			<div class="item-every">
				<div class="item-title">
					<div class="color-red">*</div>
					<div class="item-title-content">商品名称：</div>
				</div>
				<div class="item-content selectInput">
					<el-input v-model="goodsName" placeholder="请输入商品名称"></el-input>
				</div>
			</div>
			<div class="item-every">
				<div class="item-title-special">颜色分类：</div>
				<div class="item-content">
					<div class="colorType-btn">+添加</div>
				</div>
			</div>
			<div class="item-every">
				<div class="item-title-special">规格：</div>
				<div class="item-content">
					<div class="colorType-btn">+添加</div>
				</div>
			</div>
			<div class="item-every">
				<div class="item-title">
					<div class="color-red">*</div>
					<div class="item-title-content">商品定价<i class="color-orange el-icon-warning-outline"></i>：</div>
				</div>
				<div class="item-content">
					<div class="goodsPriceTable" v-for="(item,index) in goodsList" :key="index">
						<div class="goodsPriceTable-topTitle">
							<div class="goodsPriceTable-topTitle-specs">
								规格
							</div>
							<div class="goodsPriceTable-topTitle-new">
								新旧
							</div>
							<div class="goodsPriceTable-topTitle-price">
								市场价
							</div>
							<div class="goodsPriceTable-topTitle-stock">
								库存
							</div>
							<div class="goodsPriceTable-topTitle-SKU">
								SKU图片
							</div>
						</div>
						<div class="goodsPriceTable-topCon">
							<div class="goodsPriceTable-topCon-specs">
								黑/i5/4g/120G SSD
							</div>
							<div class="goodsPriceTable-topCon-new">
									<el-select size="mini" v-model="goodsType" clearable placeholder="请选择类别">
										<el-option
										  v-for="item in options"
										  :key="item.value"
										  :label="item.label"
										  :value="item.value">
										</el-option>
									</el-select>
							</div>
							<div class="goodsPriceTable-topCon-price">
								<el-input size="mini" placeholder="请输入"></el-input>元
							</div>
							<div class="goodsPriceTable-topCon-stock">
								<el-input size="mini" placeholder="请输入"></el-input>
							</div>
							<div class="goodsPriceTable-topCon-SKU">
								<img src="../../../build/logo.png" />
							</div>
						</div>
						<div class="goodsPriceTable-content">
							<div class="goodsTable-input">
								<el-select size="mini" v-model="goodsType" clearable placeholder="请选择租赁天数">
									<el-option
									  v-for="item in options"
									  :key="item.value"
									  :label="item.label"
									  :value="item.value">
									</el-option>
								</el-select>
							</div>
							<div class="goodsTable-list">
								<div class="goodsTable-list-every" v-for="(item,index) in priceList" :key="index">
									<div class="goodsTable-list-price">
										<div class="goodsTable-list-price-con">
											<el-input size="mini" placeholder="请输入"></el-input>
										</div>
										元/日
									</div>
									<div class="goodsTable-list-time">
										30日及以上
									</div>
									<div class="goodsTable-list-tips">
										30日及以上，是指租用时长为30日以上（包含30日）每日的租金价格
									</div>
									<div class="goodsTable-list-delete">
										<i class="el-icon-circle-close"></i>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="item-every">
				<div class="item-title">
					<div class="color-red">*</div>
					<div class="item-title-content">最小租用周期：</div>
				</div>
				<div class="item-content selectInput">
					<el-input v-model="goodsName" placeholder="天"></el-input>
				</div>
			</div>
			<div class="item-every">
				<div class="item-title">
					<div class="color-red">*</div>
					<div class="item-title-content">最大租用周期：</div>
				</div>
				<div class="item-content selectInput">
					<el-input v-model="goodsName" placeholder="天"></el-input>
				</div>
			</div>
			<div class="item-every">
				<div class="item-title">
					<div class="color-red">*</div>
					<div class="item-title-content">最少提前：</div>
				</div>
				<div class="item-content selectInput">
					<el-input v-model="goodsName" placeholder="天"></el-input>
					<div class="after-input">
						<el-checkbox v-model="checked">不限</el-checkbox>
					</div>
				</div>
			</div>
			<div class="item-every">
				<div class="item-title">
					<div class="color-red">*</div>
					<div class="item-title-content">最多提前：</div>
				</div>
				<div class="item-content selectInput">
					<el-input v-model="goodsName" placeholder="天"></el-input>
				</div>
			</div>
			<div class="item-every">
				<div class="item-title">
					<div class="color-red">*</div>
					<div class="item-title-content">商品主图：</div>
				</div>
				<div class="item-content">
					<el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview"
					 :on-remove="handleRemove">
						<i class="el-icon-plus"></i>
					</el-upload>
					<el-dialog :visible.sync="dialogVisible">
						<img width="100%" :src="dialogImageUrl" alt="">
					</el-dialog>
				</div>
			</div>
			<div class="item-every">
				<div class="item-title">
					<div class="color-red">*</div>
					<div class="item-title-content">商家租赁规则模板：</div>
				</div>
				<div class="item-content selectInput">
					<el-select v-model="goodsType" clearable placeholder="请选择一个模板">
						<el-option
						  size="mini"
						  v-for="item in options"
						  :key="item.value"
						  :label="item.label"
						  :value="item.value">
						</el-option>
					</el-select>
					<div class="after-select">
						<div class="break">
							<i class="el-icon-refresh-right"></i>
						</div>
						<div class="ruleTemplate-btn">新建租赁规则</div>
					</div>
				</div>
			</div>
			<div class="item-every">
				<div class="item-title">
					<div class="color-red">*</div>
					<div class="item-title-content">商家赔偿规则模板：</div>
				</div>
				<div class="item-content selectInput">
					<el-select v-model="goodsType" clearable placeholder="请选择一个模板">
						<el-option
						  size="mini"
						  v-for="item in options"
						  :key="item.value"
						  :label="item.label"
						  :value="item.value">
						</el-option>
					</el-select>
					<div class="after-select">
						<div class="break">
							<i class="el-icon-refresh-right"></i>
						</div>
						<div class="ruleTemplate-btn">新建租赁规则</div>
					</div>
				</div>
			</div>
			<div class="item-every">
				<div class="item-title">
					<div class="color-red">*</div>
					<div class="item-title-content">商品详情：</div>
				</div>
				<div class="item-content">
					<editor></editor>
				</div>
			</div>
			<div class="item-every">
				<div class="item-title">
					<div class="color-red">*</div>
					<div class="item-title-content">归还地址：</div>
				</div>
				<div class="item-content">
				  <el-table
					border
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
					<el-table-column prop="name" label="手机号码" show-overflow-tooltip></el-table-column>
					<el-table-column prop="address" label="收货地址" show-overflow-tooltip></el-table-column>
					<el-table-column prop="address" label="收货人" show-overflow-tooltip></el-table-column>
					<el-table-column prop="address" label="邮编" show-overflow-tooltip></el-table-column>
					<el-table-column prop="address" label="添加时间" show-overflow-tooltip></el-table-column>
				  </el-table>
				  <div class="after-table">
					  <div class="break">
					  	<i class="el-icon-refresh-right"></i>
					  </div>
					  <div class="setAddress-btn">设置归还地址</div>
				  </div>
				</div>
			</div>
			<div class="item-every">
				<div class="item-title-special">
					<div class="color-red">*</div>
					<div class="item-title-content">是否上架：</div>
				</div>
				<div class="item-content">
					<el-radio v-model="radio" label="1">立即上架</el-radio>
					<el-radio v-model="radio" label="2">放入仓库</el-radio>
				</div>
			</div>
			<div class="submit-btn">提交</div>
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
				dialogImageUrl: '',
				dialogVisible: false,
				tableData: [{
				  date: '2016-05-03',
				  name: '王小虎',
				  address: '上海市普陀区金沙江路 1518 弄'
				}],
				multipleSelection: [],
				radio:'', // 单选项
				priceList:[1,2,3,4],
				goodsList:[1,2]
			}
		},
		methods: {
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handlePictureCardPreview(file) {
				console.log()
				this.dialogImageUrl = file.url;
				this.dialogVisible = true;
			},
			handleSelectionChange(val) {
				this.multipleSelection = val;
				console.log(this.multipleSelection)
			}
		},
	}
</script>

<style scoped="scoped">
	.el-select {
		width: 100%;
	}
	/* .el-input__inner {
		height: 30px !important;
		line-height: 30px !important;
	}
	.el-input__icon {
		line-height: 30px !important;
	} */
	.goodsDetail {
		width: 100%;
		padding: 20px;
		background-color: #f2f2f2;
	}
	.detailContent {
		background-color: #FFFFFF;
		padding: 17px;
		font-size: 13px;
	}
	.item-every {
		display: flex;
		margin: 40px auto 0 auto;
		width: 80%;
	}
	.color-red {
		color: red;
	}
	.colorType-btn {
		color: #1E88E5;
		border: 1px dashed #1E88E5;
		width: 50px;
		height: 18px;
		text-align: center;
		line-height: 18px;
		cursor:pointer;
	}
	.color-orange {
		color: orange;
	}
	.item-title {
		width:15%;
		display: flex;
		justify-content: flex-end;
		line-height: 40px;
	}
	.item-title-special {
		width:15%;
		display: flex;
		justify-content: flex-end;
	}
	.item-content {
		width: 85%;
	}
	.selectInput {
		height: 25px;
		display: flex;
	}
	.after-input {
		height: 40px;
		line-height: 40px;
		margin-left: 20px;
		margin-right: 100px;
	}
	.after-select {
		display: flex;
		margin-left: 20px;
		margin-right: 130px;
	}
	.after-table {
		display: flex;
		margin-top: 10px;
	}
	.break {
		border: 1px solid #E6E6E6;
		border-radius: 4px;
		text-align: center;
		line-height: 40px;
		height: 40px;
		width: 40px;
		color: #737373;
		margin-right: 10px;
		cursor:pointer;
	}
	.ruleTemplate-btn {
		border: 1px solid #E6E6E6;
		border-radius: 4px;
		text-align: center;
		line-height: 40px;
		height: 40px;
		width: 95px;
		color: #737373;
		cursor:pointer;
	}
	.setAddress-btn {
		border: 1px solid #E6E6E6;
		border-radius: 4px;
		text-align: center;
		line-height: 40px;
		height: 40px;
		width: 100px;
		color: #737373;
		cursor:pointer;
	}
	.goodsPriceTable {
		margin-top: 10px;
		border-radius: 3px;
		background-color: #F9F9F9;
		border: 1px solid #E6E6E6;
		width: 100%;
		font-size: 12px;
	}
	.goodsPriceTable-topTitle {
		display: flex;
		height: 30px;
		line-height: 30px;
		border-bottom: 1px solid #E6E6E6;
	}
	.goodsPriceTable-topTitle-specs {
		padding: 0 5px;
		border-right: 1px solid #E6E6E6;
		width: 30%;
	}
	.goodsPriceTable-topTitle-new {
		padding: 0 5px;
		border-right: 1px solid #E6E6E6;
		width: 15%;
	}
	.goodsPriceTable-topTitle-price {
		padding: 0 5px;
		border-right: 1px solid #E6E6E6;
		width: 15%;
	}
	.goodsPriceTable-topTitle-stock {
		padding: 0 5px;
		border-right: 1px solid #E6E6E6;
		width: 15%;
	}
	.goodsPriceTable-topTitle-SKU {
		padding: 0 5px;
		width: 25%;
	}
	.goodsPriceTable-topCon {
		background-color: #FFFFFF;
		display: flex;
		color: #737373;
		height: 90px;
	}
	.goodsPriceTable-topCon-specs {
		padding: 0 5px;
		border-right: 1px solid #E6E6E6;
		width: 30%;
		line-height: 90px;
		text-align: center;
	}
	.goodsPriceTable-topCon-new {
		padding: 0 5px;
		border-right: 1px solid #E6E6E6;
		width: 15%;
		height: 100%;
		line-height: 90px;
	}
	.goodsPriceTable-topCon-price {
		padding: 0 5px;
		border-right: 1px solid #E6E6E6;
		width: 15%;
		line-height: 90px;
		display: flex;
	}
	.goodsPriceTable-topCon-stock {
		padding: 0 5px;
		border-right: 1px solid #E6E6E6;
		width: 15%;
		line-height: 90px;
	}
	.goodsPriceTable-topCon-SKU {
		padding: 0 5px;
		width: 25%;
		line-height: 90px;
	}
	.goodsPriceTable-topCon-SKU img {
		width: 30px;
		height: 30px;
	}
	.goodsPriceTable-content {
		padding: 10px;
		border-top: 1px solid #E6E6E6;
		color: #737373;
	}
	.goodsTable-input {
		width: 40%;
	}
	.goodsTable-list {
		border: 1px solid #E6E6E6;
		margin-top: 5px;
	}
	.goodsTable-list-every {
		display: flex;
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid #E6E6E6;
	}
	.goodsTable-list-price {
		display: flex;
		width: 26%;
		padding: 0 5px;
		border-right: 1px solid #E6E6E6;
	}
	.goodsTable-list-price-con {
		width: 80px;
	}
	.goodsTable-list-time {
		width: 21%;
		padding: 0 5px;
		border-right: 1px solid #E6E6E6;
	}
	.goodsTable-list-tips {
		width: 50%;
		padding: 0 5px;
		color: red;
		border-right: 1px solid #E6E6E6;
	}
	.goodsTable-list-delete {
		width: 3%;
		color: red;
		text-align: center;
	}
	.submit-btn {
		background-color: #1E88E5;
		color: #FFFFFF;
		width: 50px;
		height: 25px;
		line-height: 25px;
		text-align: center;
		letter-spacing:3px;
		margin: 40px auto;
		border-radius: 5px;
		cursor:pointer;
	}
</style>
