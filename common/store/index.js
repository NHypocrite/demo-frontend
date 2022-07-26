// 导入函数defineStore定义状态存储仓库
import {defineStore} from 'pinia'

//定义一个“仓库建设者”，这是一个函数，通过该函数可以建立一个状态仓库
const useMainStore = defineStore("main",{
	
	//定义状态
	state:()=>{
		return {
			num:0 //定义了状态num
		};
	},
	
	//定义状态计算属性（对状态值二次加工后得到的数据，可以直接做为（只读）状态使用）
	getters:{
		newNum:state=>state.num*10,
	},
	
	//定义状态的改变行为，即定义状态方法（action）
	actions:{
		addNum3(){
			this.num+=3;
		}
	}
	
});

//“建立一个仓库”,并导出
export const store = useMainStore();