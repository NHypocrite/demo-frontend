<template>
	<view class="mine">
		<u-cell-group>
			<u-cell-item v-if="!isLogin" @click="toLogin" index="login" title="登录" :arrow="true" arrow-direction="right"></u-cell-item>
			
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
			this.isLogin = uni.getStorageSync("isLogin");
			console.log("isLogin===",this.isLogin);
		},
		methods: {
			toLogin(index){
				console.log('========',index);
				this.$u.route({
					url:'/pages/login/login',
					type:'to'
				});
				
			}
		}
	}
</script>

<style scoped>
.mine{
	padding:10rpx 5rpx;
}
</style>
