<template>
	<view style="font-size:80rpx;text-align: center;color:red;">
		<button @click="add3">加3</button>
		<text >{{$store.num}}</text>
		
		<view >{{$store.newNum}}</view>
	</view>
</template>

<script>
	//import {store} from '@/common/store'
	export default {
		data() {
			return {
				//store
			}
		},
		methods: {
			add3(){
				this.$store.addNum3();
			}
		}
	}
</script>

<style>

</style>
