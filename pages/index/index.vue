<template>
	<view class="index">
		<view style="padding:0rpx 10rpx;">
			<u-swiper :list="list" :height="350"></u-swiper>
		</view>
		
		<view style="padding:0rpx 10rpx;">
			{{currentUser.userId}},欢迎您！
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
				currentUser:{
					userId:'',
					userName:''
				},
				
				mealList:[],//餐品清单
				
				list:[
					{
						image:'/static/index/1.jpg',
						title:'标题1'
					},
					{
						image:'/static/index/2.jpg',
						title:'标题2'
					},
					{
						image:'/static/index/3.jpg',
						title:'标题3'
					},
					{
						image:'/static/index/4.jpg',
						title:'标题4'
					},
				]
			}
		},
		//这是一个声明周期方法，表示页面正在加载，还未显示之前，执行的逻辑
		//onLoad表示页面加载完成，仅在页面被创建时执行，回退到本页时不会执行
		onLoad() {
			//this.getMealList();
		},
		
		//这是一个声明周期方法,每次页面显示时执行
		onShow(){			
			this.getCurrentUser();
			this.getMealList();
			
		},
		methods: {
			
			async getCurrentUser(){
				this.currentUser = await this.$u.get('/user/curr-user');
			},
			
			//获得餐品清单
			//将方法声明为异步的，则内部异步请求可以实现同步化
			async getMealList(){
				//异步请求,加await异步请求同步化
				this.mealList = await this.$u.get('/meal-list')
				console.log("========");
				
				this.list = this.mealList.map(item=>
									({
										image:this.$u.apiBaseUrl+'/blob/'+item.meal_pic,
										title:item.meal_name,
									})
								);
			}
		}
	}
</script>

<style scoped>
/* scoped 样式仅在本页面有效 */
.index{
	
}	
</style>
