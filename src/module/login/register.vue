<template>
	<div class="register">
		<div class="allTitle">全民租机商家中心</div>
		<div class="allContent">
			<div class="top-tips">注册</div>
			<div class="content-every">
				<el-input v-model="goodsName" placeholder="邮箱"></el-input>
			</div>
			<div class="content-every">
				<el-input v-model="goodsName" placeholder="昵称"></el-input>
			</div>
			<div class="content-every">
				<el-input v-model="goodsName" placeholder="至少6位密码区分大小写"></el-input>
			</div>
			<div class="content-every">
				<el-input v-model="goodsName" placeholder="确认密码"></el-input>
			</div>
			<div class="content-every">
				<el-input v-model="goodsName" placeholder="手机号"></el-input>
			</div>
			<div class="content-double">
				<div class="content-double-input">
					<el-input v-model="goodsName" placeholder="图形验证码"></el-input>
				</div>
				<div class="content-double-thing">
					<div class="content-double-thing-con"></div>
				</div>
			</div>
			<div class="content-double">
				<div class="content-double-input">
					<el-input v-model="goodsName" placeholder="验证码"></el-input>
				</div>
				<div class="content-double-thing">
					<div class="content-double-thing-btn">获取验证码</div>
				</div>
			</div>
			<div class="content-double">
				<div class="register-btn">注册</div>
				<div class="back-btn">使用已有账户登录</div>
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

<style scoped="scoped">
	.register {
		width: 100%;
		height: 100vh;
		background: url(../../assets/loginBg.png) no-repeat 0 0;
		background-size: 100% 100%;
	}
	.allTitle {
		margin-top: 50px;
		font-size: 20px;
		text-align: center;
	}
	.allContent {
		width: 500px;
		margin: 0 auto;
	}
	.top-tips {
		font-size: 13px;
		color: #737373;
		margin-top: 20px;
	}
	.content-every {
		margin-top: 20px;
	}
	.content-double {
		margin-top: 20px;
		display: flex;
		justify-content: space-between;
	}
	.content-double-input {
		width: 60%;
	}
	.content-double-thing-con {
		background-color: #e6e6e6;
		width: 38%;
	}
	.register-btn {
		width: 48%;
		height: 40px;
		text-align: center;
		line-height: 40px;
		background-color: #3a8dff;
		color: #FFFFFF;
		border-radius: 5px;
	}
	.back-btn {
		width: 48%;
		height: 40px;
		text-align: center;
		line-height: 40px;
		border: 1px solid #3a8dff;
		color: #3a8dff;
		border-radius: 5px;
	}
</style>
