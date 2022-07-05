<template>
	<view class="login">
		<view style="width:95%;display: flex; flex-direction;justify-content:flex-end;margin-top:20rpx;">
			<view><u-button :plain="true" size="mini" style="width:200rpx;" @click="$u.route('/pages/register/register')"
				:ripple="true" type="error">新用户注册</u-button></view>
		</view>
		<view style="width:300rpx;margin-top:15%;margin-bottom:50rpx;">
			<u-image width="100%" height="300rpx" src="/static/login/login.svg"></u-image>
		</view>
		
		
		
		<u-form style="width:90%;background-color: #FFFFFF;padding:0 20rpx;">
			<u-form-item>
				<u-input v-model="loginUser.u_id" placeholder="请输入账号" />
			</u-form-item>
			<u-form-item>
				<u-input v-model="loginUser.u_pwd" type="password" :password-icon="true" placeholder="请输入密码"  />
			</u-form-item>
		</u-form>
		<u-button @click="login" style="width:40%;margin-top:70rpx;" :ripple="true"  type="primary">登录</u-button>
		
		{{loginUser}}
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loginUser:{
					u_id:'',
					u_pwd:''
				}
			}
		},
		methods: {
			async login(){
				console.log(this.loginUser);
				await this.$u.post('/user/login',this.loginUser)
				uni.setStorageSync("isLogin",true);//在客户端存储信息，结构是键值对
				this.$u.toast('登录成功');
				this.$u.route({
								url: 'pages/index/index',
								type:'tab'
							});
			}
		},
		onLoad(){
			
		}
	}
</script>

<style scoped>
	.login{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
