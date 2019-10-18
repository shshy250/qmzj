<template>
	<div>login
		<h1 @click="login">登录</h1>
	</div>
</template>

<script>
  export default {
    data() {
      return {
		  
      };
    },
    methods: {
      login() {
		  this.$router.push({
			  name:'ShopMsg'
		  })
	  }
    }
  }
</script>

<style scoped>
</style>
