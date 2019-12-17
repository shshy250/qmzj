<template>
	<div class="shopMsg">
		<div class="top-tabs">
			<div :class="[showItemContent?'tabs-active':'tabs-every']" @click="changeType('1')">店铺信息</div>
			<div :class="[!showItemContent?'tabs-active':'tabs-every']" @click="changeType('2')">企业信息</div>
		</div>
		<div class="contentAll">
			<div v-if="showItemContent" class="content-shop">
				<div class="content-every">
					<div class="item-title">&ensp;店铺名称：</div>
					<div class="item-content">
						<el-input size="mini" v-model="shopName" placeholder="请输入"></el-input>
					</div>
				</div>
				<div class="content-every">
					<div class="item-title">&ensp;店铺描述：</div>
					<div class="item-content">
						<el-input size="mini" v-model="shopDec" placeholder="请输入"></el-input>
					</div>
				</div>
				<div class="content-every">
					<div class="item-title"><span class="color-red">*</span>店铺背景：</div>
					<div class="item-content">
						<!-- 后期上传 参照element文档 -->
						<el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview"
						 :on-remove="handleRemove">
							<i class="el-icon-plus"></i>
						</el-upload>
						<el-dialog :visible.sync="dialogVisible">
							<img width="100%" :src="dialogImageUrl" alt="">
						</el-dialog>
					</div>
				</div>
				<div class="content-every">
					<div class="item-title"><span class="color-red">*</span>店铺logo：</div>
					<div class="item-content">
						<el-upload action="https://jsonplaceholder.typicode.com/posts/" :limit="1" list-type="picture-card" :on-preview="handlePictureCardPreview"
						 :on-remove="handleRemove">
							<i class="el-icon-plus"></i>
						</el-upload>
						<el-dialog :visible.sync="dialogVisible">
							<img width="100%" :src="dialogImageUrl" alt="">
						</el-dialog>
					</div>
				</div>
				<div class="content-every">
					<div class="item-title"><span class="color-red">*</span>客服电话：</div>
					<div class="item-content">
						<el-input size="mini" v-model="serviceTel" placeholder="请输入"></el-input>
					</div>
				</div>
				<div class="content-every">
					<div class="item-title"><span class="color-red">*</span>短信电话：</div>
					<div class="item-content">
						<el-input size="mini" v-model="shotMesTel" placeholder="请输入"></el-input>
					</div>
				</div>
				<div class="content-every">
					<div class="item-title">&ensp;店铺类型：</div>
					<div class="item-content">
						<el-input size="mini" v-model="shopType" placeholder="请输入"></el-input>
					</div>
				</div>
				<div class="saveBtn">保存</div>
			</div>
			
			<div v-if="!showItemContent" class="content-company">
				<div class="content-every">
					<div class="item-title">企业名称：</div>
					<div class="item-content">
						<el-input size="mini" v-model="companyName" placeholder="请输入"></el-input>
					</div>
				</div>
				<div class="content-every">
					<div class="item-title">营业执照：</div>
					<div class="item-content">
						<el-input size="mini" v-model="businessLic" placeholder="请输入"></el-input>
					</div>
				</div>
				<div class="content-every">
					<div class="item-title">营业执照：</div>
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
				<div class="content-every">
					<div class="item-title">法人身份证：</div>
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
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				showItemContent: true,
				dialogImageUrl: '',
				dialogVisible: false,
				shopName: '', // 店铺名称
				shopDec: '', // 店铺描述
				serviceTel: '', // 客服电话
				shotMesTel: '', // 短信电话
				shopType: '', // 店铺类型
				companyName: '', // 企业名称
				businessLic: '', // 营业执照
			}
		},
		created() {
			
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
			changeType(val) {
				if(this.showItemContent == true && val == '2') {
					this.showItemContent = !this.showItemContent
				} else if(this.showItemContent == false && val == '1') {
					this.showItemContent = !this.showItemContent
				}
				
			}
		},
	}
</script>

<style scoped>
	.shopMsg {
		width: 100%;
		padding: 20px;
		background-color: #f2f2f2;
	}
	.top-tabs {
		display: flex;
		position: relative;
		font-size: 12px;
	}
	.tabs-every {
		width: 70px;
		text-align: center;
		line-height: 25px;
		color: #737373;
		margin-right: 10px;
		cursor:pointer;
	}
	.tabs-active {
		width: 70px;
		text-align: center;
		line-height: 25px;
		color: #3a8dff;
		border-bottom: 1px solid #3a8dff;
		margin-right: 10px;
		cursor:pointer;
	}
	.contentAll {
		margin-top: 10px;
		background-color: #FFFFFF;
		border: 1px solid #eee;
		height: calc(100% - 36px);
		overflow-y: auto;
	}
	.content-shop {
		width: 600px;
		margin: 40px auto;
	}
	.content-company {
		width:600px;
		margin: 40px auto;
	}
	.content-every {
		display: flex;
		line-height: 28px;
		margin-top: 15px;
	}
	.item-title {
		width: 90px;
	}
	.item-content {
		width: 510px;
	}
	.saveBtn {
		background-color: #03be7f;
		color: #ffffff;
		height: 30px;
		width: 90px;
		text-align: center;
		line-height: 30px;
		margin: 60px auto;
		border-radius: 8px;
		font-size: 12px;
	}
	.color-red {
		color: red;
	}
</style>
