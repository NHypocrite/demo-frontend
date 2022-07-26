<template>
	<view style="font-size:80rpx;text-align: center;">
		<view>
			<u-button @click="$store.num++">增1</u-button>
		</view>
		{{$store.num}}
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
			
		}
	}
</script>

<style>

</style>
