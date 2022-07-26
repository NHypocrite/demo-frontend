// 导入函数defineStore定义状态存储仓库
import {defineStore} from 'pinia'

import { data , getters , actions} from './store.js'


export default{
	
	//当通过app（vue对象）的use方法传递本对象时，会自动调用install方法，并且将app做为参数传入
	install(app,options){
		//app表示vue对象
		
		//console.log("install==================>");
		//app.config.globalProperties.$my=123456;//为vue对象添加属性
		
		//定义一个“仓库建设者”，这是一个函数，通过该函数可以建立一个状态仓库
		const useMainStore = defineStore("main",{
			
			//定义状态
			state:() => data,
			
			//定义状态计算属性（对状态值二次加工后得到的数据，可以直接做为（只读）状态使用）
			getters,// 等同getters:getters,
			
			//定义状态的改变行为，即定义状态方法（action）
			actions
			
		});
		
		//“建立一个仓库”,并导出
		//export const store = useMainStore();
		
		app.config.globalProperties.$store = useMainStore();
		
	}
	
}

