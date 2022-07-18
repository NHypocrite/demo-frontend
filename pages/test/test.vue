<template>
	<view class="test">
		<view class="test-item" v-for="n in 15">{{n}}</view>
		<view class="test-item-white"  v-for="i in 15%6"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
.test{
	width:90%;
	height:200rpx;
	border:1px solid red;
	
	overflow: hidden; /* 元素超出范围 hidden隐藏 , auto超出范围会出现滚动条,visible 可见 */
	
	display: flex;/* 将引用本样式类的元素定义为flex容器（灵活柔性盒子布局） */
	
	/*
		flex-direction指定的排列方向即为主轴，则另一个方向为交叉轴
	
	
	*/
	
	flex-direction: row ;/* row 水平排列, column  竖直排列 */	
	flex-wrap: wrap;/* 是否换行 warp换行，nowarp不换行*/
	
	/*主轴方向的排列方式 flex-start（默认） 从左向右排（从上到下），flex-end:从右向左排（从下倒上），center居中排列 ，space-between两边（上下）对齐排列*/
	justify-content: space-between;
	align-items: center;/*交叉轴的排列方式*/
}
.test-item{
	width:13%;
	height:50rpx;
	background-color: bisque;
	margin:10rpx;
	
	display: flex;
	justify-content: center;
	align-items: center;
}

.test-item-white{
	width:13%;
	margin:10rpx;
	
	
	
}
</style>
