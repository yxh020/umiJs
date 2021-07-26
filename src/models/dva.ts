export default{
    namespace: 'dva', //调用model的时候。通过命令空间调用，不要重复
    
    state: {}, //状态，与react中的state类似，和redux中保存的state一样
    
    effects: {}, //调用服务端接口，获取数据
   
    reducers: {}, //更新state
}