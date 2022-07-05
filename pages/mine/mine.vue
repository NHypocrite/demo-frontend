<template>
	<view class="mine">
		<u-cell-group>
			<u-cell-item v-if="!isLogin" @click="toLogin" index="login" title="登录" :arrow="true" arrow-direction="right"></u-cell-item>
			<u-cell-item v-if="isLogin" @click="exit" index="login" title="退出" :arrow="true" arrow-direction="right"></u-cell-item>
		</u-cell-group>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isLogin:false,
			}
		},
		onShow(){
			this.getIsLogin();
		},
		methods: {
			toLogin(index){
				console.log('========',index);
				this.$u.route({
					url:'/pages/login/login',
					type:'to'
				});
				
			},
			async getIsLogin(){
				const obj = await this.$u.get('/user/is-login');
				this.isLogin = obj.logined;
			},
			exit(){
				uni.removeStorageSync("Token");//清除本地token
				this.isLogin = false;
			}
		}
	}
</script>

<style scoped>
.mine{
	padding:10rpx 5rpx;
}
</style>
