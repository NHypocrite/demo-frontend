<template>
	<view class="cls">
		<view class="cls-item" v-for="cls in clsList" :key="cls.cls_id">

			<text>{{cls.cls_id}}</text>
			<text>{{cls.cls_name}}</text>

		</view>
		
		<view v-if="page.current == page.last" style="margin:20rpx;text-align: center;color:#777777;">
			<text>--- 我是有底线的哦 ---</text>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				clsList: [], //分类列表

				//参数
				query: {
					pageNum: 1,
					pageSize: 10,
					cls_name: ''
				},

				//获得到的当前页分页数据
				page: {
					total: 0,
					list: []
				},
			}
		},
		onShow() {			
			uni.startPullDownRefresh();//通过编程方式下拉刷新
		},
		//下拉刷新时触发本函数
		async onPullDownRefresh() {
			
			await this.getClsList(1);
			uni.stopPullDownRefresh();//停止下拉刷新
			
		},
		
		//上拉触底时触发本函数
		onReachBottom(){
			if(this.page.current == this.page.last){//当前页已是最后一页
				return;
			}
			//触底加载下一页
			this.getClsList(this.page.next);
		},
		methods: {
			async getClsList(pageNo = 1) {
				
				this.query.pageNum = pageNo;
				this.page = await this.$u.get('/user/cls-list', this.query);
				
				if(pageNo == 1){//请求第一页时，重置clsList
					this.clsList = this.page.list;
				}else{//请求第二页及以后的页，向现有的clsList添加数据
					this.page.list.forEach(cls => this.clsList.push(cls));
				}
				
				
			}
		}
	}
</script>

<style scoped>
	.cls {
		display: flex;
		flex-direction: column;
	}

	.cls-item {
		background-color: white;
		height: 200rpx;
		padding: 20rpx 30rpx;
		border-radius: 5rpx;
		margin: 15rpx 20rpx;
		font-size: 50rpx;
		color: #777777;

		display: flex;
		justify-content: space-between;
		align-items: center;

	}
</style>
