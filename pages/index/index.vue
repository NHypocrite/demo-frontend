<template>
	<view class="index">
		<view style="padding:0rpx 10rpx;">
			<u-swiper :list="list" :height="350"></u-swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
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
		onLoad() {
			this.getMealList();
		},
		methods: {
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
