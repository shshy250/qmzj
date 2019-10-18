<template>
	<div class="breadcrumb">
		<div class="content-bread-title">{{this.title}}</div>
		<div class="content-bread-bread">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item v-for="(item,index) in breadcrumbList" :key="index">{{item}}</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				breadcrumbList: [],
				title: ''
			}
		},
		watch: {
			$route(to, from) {
				console.log("to",to)
				this.breadcrumbList = this.$route.meta.headList
				this.title = this.$route.meta.title
			}
		},
		created() {
			this.breadcrumbList = this.$route.meta.headList
			this.title = this.$route.meta.title
		}
	}
</script>

<style scoped>
	.breadcrumb {
		display: flex;
		position: relative;
	}
	.content-bread-title {
		font-size: 20px;
		font-weight: bold;
		margin-right: 20px;
		margin-left: 20px;
		line-height: 56px;
	}
		
	.content-bread-bread {
		margin: auto 0;
	}
</style>
