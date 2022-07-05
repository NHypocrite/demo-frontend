<template>
	<view class="register">
		<view style="margin:20rpx 0rpx 30rpx 0rpx;display: flex;justify-content: center;width:100%;">
			<u-image width="30%" height="200rpx" src="/static/register/welcome.svg"></u-image>
			<view style="font-size:50rpx;font-weight: bold;margin-left:20rpx;">
				<view><text>Hi，</text></view>
				<view><text>很高兴遇见你~</text></view>
			</view>
		</view>
		<u-form :model="newUser" ref="uForm" :label-width="130" style="width:96%;background-color: #FFFFFF;padding:0 20rpx;">
			<u-form-item label="账号" prop="u_id" >
				<u-input v-model="newUser.u_id" placeholder="请输入账号" />
			</u-form-item>
			<u-form-item label="密码" prop="u_pwd">
				<u-input v-model="newUser.u_pwd" type="password" placeholder="请设置密码" />
			</u-form-item>
			<u-form-item label="确认密码" prop="u_repwd">
				<u-input v-model="newUser.u_repwd" type="password" placeholder="请再输入一次密码" />
			</u-form-item>
			<u-form-item label="昵称">
				<u-input v-model="newUser.u_nickname" placeholder="请输入昵称" />
			</u-form-item>
			<u-form-item label="性别">
				<u-radio-group v-model="newUser.u_sex">
					<u-radio :name="1">男</u-radio>
					<u-radio :name="2">女</u-radio>
				</u-radio-group>
			</u-form-item>
			
			<u-form-item label="头像">
				<u-upload @on-success="onUploadAvatar" ref="uUpload" name="avatar" :action="action" :auto-upload="false" :max-count="1" ></u-upload>
				<u-button @click="uploadAvatar">上传</u-button>
			</u-form-item>

		</u-form>
		<u-button @click="register" style="width:40%;margin-top:30rpx;" :ripple="true"  type="primary">注册</u-button>
		
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
				action:this.$u.apiBaseUrl+'/user/upload',
				newUser:{
					u_id:'',
					u_nickname:'',
					u_pwd:'',
					u_repwd:'',
					u_sex:'',
					u_avatar:''
				},
				//验证规则
				rules:{
					u_id:[
						{
							required:true,//必填
							message:'请填写账号',
							trigger:['blur']
							
						},
						{
							min: 6,
							message:'账号不得少于6个字符',
							trigger:['blur']
							
						}
					],
					u_pwd:[
						{
							required:true,//必填
							message:'请填写密码',
							trigger:['blur']
							
						},
						{
							min: 6,
							message:'密码不得少于6个字符',
							trigger:['blur']
							
						}
					],
					u_repwd:[
						{
							required:true,//必填
							message:'请填写确认密码',
							trigger:['blur']
							
						},
						{
							// 自定义验证函数，见上说明
							validator: (rule, value, callback) => {
								// 上面有说，返回true表示校验通过，返回false表示不通过
								
								return value == this.newUser.u_pwd;
							},
							message: '两次密码不一致',
							// 触发器可以同时用blur和change
							trigger: ['blur'],
						}
						
					],
				}

			};
		},
		methods: {
			uploadAvatar(){
				//this.$refs.uUpload 获取对页面组件的引用
				this.$refs.uUpload.upload();
			},
			
			onUploadAvatar(result, index, lists, name){
				if(result.success){
					this.newUser.u_avatar = result.data;
					this.$u.toast('上传成功');
				}
			},
			register(){
				
				this.$refs.uForm.validate(async valid => {
					if (valid) {
						console.log('验证通过');
						
						await this.$u.post('/user/register',this.newUser);
						this.$u.toast('注册成功');
						this.$u.route({
							url:'/pages/login/login',
							type:'redirect'
						});
						
					} else {
						console.log('验证失败');
						this.$u.toast('注册信息错误');
					}
				});
				
				
			}
		},
		// 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		}
	}
</script>

<style>
	.register {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
