<template>
	<div class="login">
		<div class="content">
			<div class="title">全民租机商家中心</div>
			<div class="tabs">
				<div :class="[idLogin=='1'?'tabs-every-action':'tabs-every']" @click="loginType('0')">账户密码登录</div>
				<div :class="[idLogin=='0'?'tabs-every-action':'tabs-every']" @click="loginType('1')">手机号登录</div>
			</div>
			<div v-if="idLogin" class="form-item">
				<el-input
					placeholder="邮箱"
					prefix-icon="el-icon-message"
					v-model="emailInput">
				</el-input>
			</div>
			<div v-if="idLogin" class="form-item">
				<el-input
					placeholder="密码"
					prefix-icon="el-icon-lock"
					v-model="passwordInput">
				</el-input>
			</div>
			<div v-if="!idLogin" class="form-item">
				<el-input
					placeholder="手机号"
					prefix-icon="el-icon-mobile-phone"
					v-model="telInput">
				</el-input>
			</div>
			<div v-if="!idLogin" class="form-item-pic">
				<div class="pic-input">
					<el-input
						placeholder="短信验证码"
						prefix-icon="el-icon-message"
						v-model="shortMsg">
					</el-input>
				</div>
				<div class="shortMsg-btn">
					
				</div>
			</div>
			<div class="form-item-pic">
				<div class="pic-input">
					<el-input
						placeholder="图形验证码"
						v-model="picCheck">
					</el-input>
				</div>
				<div class="picCheck-check">
					<img src="" />
				</div>
			</div>
			<div class="login-btn" @click="login()">登录</div>
			<div class="bottons">
				<div class="forget">忘记密码</div>
				<div class="register">注册账户</div>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    data() {
      return {
				idLogin: true, // 账号密码登录
				emailInput: '', // 邮箱
				passwordInput: '', // 密码
				telInput: '', // 电话
				shortMsg: '', // 短信
				picCheck: '', // 图片验证码
      };
    },
    methods: {
      login() {
				this.$router.push({
					name:'ShopMsg'
				})
			},
			loginType(idx) {
				if(idx == 0) {
					this.idLogin = true
				} else if(idx == 1) {
					this.idLogin = false
				}
			}
    }
  }
</script>

<style scoped>
	.login {
		width: 100%;
		height: 100vh;
		background: url(../../assets/loginBg.png) no-repeat 0 0;
		background-size: 100% 100%;
	}
	.content {
		width: 350px;
		padding-top: 100px;
		margin: 0 auto;
	}
	.title {
		width: 100%;
		font-size: 27px;
		text-align: center;
	}
	.tabs {
		width: 100%;
		display: flex;
		margin-top: 25px;
		cursor:pointer;
	}
	.tabs-every-action {
		width: 50%;
		color: #3a8dff;
		border-bottom: 1px solid #3a8dff;
		line-height: 20px;
		text-align: center;
	}
	.tabs-every {
		width: 50%;
		color: #737373;
		border-bottom: 1px solid #e6e6e6;
		line-height: 20px;
		text-align: center;
	}
	.form-item {
		width: 100%;
		margin-top: 30px;
	}
	.form-item-pic {
		width: 100%;
		margin-top: 30px;
		display: flex;
		justify-content: space-between;
	}
	.pic-input {
		width: 74%;
	}
	.shortMsg-btn {
		width: 25%;
		border-radius: 5px;
		overflow: hidden;
		background-color: #e6e6e6;
		cursor:pointer;
	}
	.picCheck-check {
		width: 25%;
		border-radius: 5px;
		overflow: hidden;
	}
	.picCheck-check img {
		width: 100%;
		height: 100%;
	}
	.login-btn {
		width: 100%;
		background-color: #3a8dff;
		color: #FFFFFF;
		text-align: center;
		height: 40px;
		line-height: 40px;
		margin-top: 30px;
		border-radius: 5px;
		letter-spacing:8px;
		cursor:pointer;
	}
	.bottons {
		width: 100%;
		display: flex;
		justify-content: space-between;
		color: #3a8dff;
		margin-top: 30px;
		cursor:pointer;
	}
</style>
