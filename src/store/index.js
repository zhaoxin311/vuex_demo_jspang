import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//vuex是一个数据仓库 也是一个状态管理器
//声明一个常量 state 相当于一个状态
//state 状态对象 count是一个共享值
const state = {
  count: 10,
};
//用于改变状态state里的值，里边可以写一些方法
//mutations 意义在于写方法改变状态
const mutations = {
  add(state, n) {
    state.count += n;
  },
  cut(state) {
    state.count--;
  },
};

//用export default 封装代码，让外部可以引用。
export default new Vuex.Store({
  state,
  mutations,
  actions: {},
  modules: {},
});
