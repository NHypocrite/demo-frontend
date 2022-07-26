//状态
export const data = {
		num:0 //定义了状态num
};

//状态计算属性
export const getters = {
	newNum:state=>state.num*10,
};

//状态操作方法
export const actions = {
	addNum3(){
		this.num+=3;
	}
};