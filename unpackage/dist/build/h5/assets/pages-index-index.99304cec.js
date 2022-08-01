import{o as t,c as e,w as i,a as r,b as a,r as s,n,d as o,e as l,f as u,t as d,g as c,F as m,i as p,h as f,S as g,j as h,k as y}from"./index.c6333f91.js";import{_ as b}from"./plugin-vue_export-helper.21dcd24c.js";import{r as C}from"./uni-app.es.ca8ae5e3.js";var x=b({name:"u-swiper",emits:["click","change"],props:{list:{type:Array,default:()=>[]},title:{type:Boolean,default:!1},indicator:{type:Object,default:()=>({})},borderRadius:{type:[Number,String],default:8},interval:{type:[String,Number],default:3e3},mode:{type:String,default:"round"},height:{type:[Number,String],default:250},indicatorPos:{type:String,default:"bottomCenter"},effect3d:{type:Boolean,default:!1},effect3dPreviousMargin:{type:[Number,String],default:50},autoplay:{type:Boolean,default:!0},duration:{type:[Number,String],default:500},circular:{type:Boolean,default:!0},imgMode:{type:String,default:"aspectFill"},name:{type:String,default:"image"},bgColor:{type:String,default:"#f3f4f6"},current:{type:[Number,String],default:0},titleStyle:{type:Object,default:()=>({})}},watch:{list(t,e){t.length!==e.length&&(this.uCurrent=0)},current(t){this.uCurrent=t}},data(){return{uCurrent:this.current}},computed:{justifyContent(){return"topLeft"==this.indicatorPos||"bottomLeft"==this.indicatorPos?"flex-start":"topCenter"==this.indicatorPos||"bottomCenter"==this.indicatorPos?"center":"topRight"==this.indicatorPos||"bottomRight"==this.indicatorPos?"flex-end":void 0},titlePaddingBottom(){let t=0;return"none"==this.mode?"12rpx":(t=["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPos)>=0&&"number"==this.mode?"60rpx":["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPos)>=0&&"number"!=this.mode?"40rpx":"12rpx",t)},elCurrent(){return Number(this.current)}},methods:{listClick(t){this.$emit("click",t)},change(t){let e=t.detail.current;this.uCurrent=e,this.$emit("change",e)},animationfinish(t){}}},[["render",function(y,b,C,x,P,v){const _=p,k=f,S=g,w=h;return t(),e(k,{class:"u-swiper-wrap",style:l({borderRadius:`${C.borderRadius}rpx`})},{default:i((()=>[r(w,{current:v.elCurrent,onChange:v.change,onAnimationfinish:v.animationfinish,interval:C.interval,circular:C.circular,duration:C.duration,autoplay:C.autoplay,"previous-margin":C.effect3d?C.effect3dPreviousMargin+"rpx":"0","next-margin":C.effect3d?C.effect3dPreviousMargin+"rpx":"0",style:l({height:C.height+"rpx",backgroundColor:C.bgColor})},{default:i((()=>[(t(!0),a(m,null,s(C.list,((a,s)=>(t(),e(S,{class:"u-swiper-item",key:s},{default:i((()=>[r(k,{class:n(["u-list-image-wrap",[P.uCurrent!=s?"u-list-scale":""]]),onClick:o((t=>v.listClick(s)),["stop","prevent"]),style:l({borderRadius:`${C.borderRadius}rpx`,transform:C.effect3d&&P.uCurrent!=s?"scaleY(0.9)":"scaleY(1)",margin:C.effect3d&&P.uCurrent!=s?"0 20rpx":0})},{default:i((()=>[r(_,{class:"u-swiper-image",src:a[C.name]||a,mode:C.imgMode},null,8,["src","mode"]),C.title&&a.title?(t(),e(k,{key:0,class:"u-swiper-title u-line-1",style:l([{"padding-bottom":v.titlePaddingBottom},C.titleStyle])},{default:i((()=>[u(d(a.title),1)])),_:2},1032,["style"])):c("",!0)])),_:2},1032,["onClick","class","style"])])),_:2},1024)))),128))])),_:1},8,["current","onChange","onAnimationfinish","interval","circular","duration","autoplay","previous-margin","next-margin","style"]),r(k,{class:"u-swiper-indicator",style:l({top:"topLeft"==C.indicatorPos||"topCenter"==C.indicatorPos||"topRight"==C.indicatorPos?"12rpx":"auto",bottom:"bottomLeft"==C.indicatorPos||"bottomCenter"==C.indicatorPos||"bottomRight"==C.indicatorPos?"12rpx":"auto",justifyContent:v.justifyContent,padding:"0 "+(C.effect3d?"74rpx":"24rpx")})},{default:i((()=>["rect"==C.mode?(t(!0),a(m,{key:0},s(C.list,((i,r)=>(t(),e(k,{class:n(["u-indicator-item-rect",{"u-indicator-item-rect-active":r==P.uCurrent}]),key:r},null,8,["class"])))),128)):c("",!0),"dot"==C.mode?(t(!0),a(m,{key:1},s(C.list,((i,r)=>(t(),e(k,{class:n(["u-indicator-item-dot",{"u-indicator-item-dot-active":r==P.uCurrent}]),key:r},null,8,["class"])))),128)):c("",!0),"round"==C.mode?(t(!0),a(m,{key:2},s(C.list,((i,r)=>(t(),e(k,{class:n(["u-indicator-item-round",{"u-indicator-item-round-active":r==P.uCurrent}]),key:r},null,8,["class"])))),128)):c("",!0),"number"==C.mode?(t(),e(k,{key:3,class:"u-indicator-item-number"},{default:i((()=>[u(d(P.uCurrent+1)+"/"+d(C.list.length),1)])),_:1})):c("",!0)])),_:1},8,["style"])])),_:1},8,["style"])}],["__scopeId","data-v-7cefc116"]]);var P=b({data:()=>({currentUser:{userId:"",userName:""},mealList:[],list:[{image:"/static/index/1.jpg",title:"标题1"},{image:"/static/index/2.jpg",title:"标题2"},{image:"/static/index/3.jpg",title:"标题3"},{image:"/static/index/4.jpg",title:"标题4"}]}),onLoad(){},onShow(){this.getCurrentUser(),this.getMealList()},methods:{async getCurrentUser(){this.currentUser=await this.$u.get("/user/curr-user")},async getMealList(){this.mealList=await this.$u.get("/meal-list"),console.log("========"),this.list=this.mealList.map((t=>({image:this.$u.apiBaseUrl+"/blob/"+t.meal_pic,title:t.meal_name})))}}},[["render",function(a,s,n,o,l,c){const m=C(y("u-swiper"),x),p=f;return t(),e(p,{class:"index"},{default:i((()=>[r(p,{style:{padding:"0rpx 10rpx"}},{default:i((()=>[r(m,{list:l.list,height:350},null,8,["list"])])),_:1}),r(p,{style:{padding:"0rpx 10rpx"}},{default:i((()=>[u(d(l.currentUser.userId)+",欢迎您！ ",1)])),_:1})])),_:1})}],["__scopeId","data-v-27eed9ef"]]);export{P as default};
