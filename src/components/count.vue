<template>
  <div>
    <h5>{{ message }}</h5>
    <h3>{{ count }}</h3>
    <p>
      <button @click="add(4)">+</button>
      <button @click="cut">-</button>
    </p>
    <hr />
    <h4>** 一、通过computed的计算属性直接赋值**</h4>
    <span
      >computed属性可以在输出前，对data中的值进行改变，我们就利用这种特性把store/index.js中的state值赋值给我们模板中的data值。
      <br />
      这里需要注意的是return
      this.$store.state.count这一句，一定要写this，要不你会找不到$store的。</span
    >
    <hr />
    <h4>** 二、通过mapState的对象来赋值**</h4>
    <span>
      1. 首先要用import引入mapState。<br />
      2. 还在computed计算属性里写代码 <br />
      3. 使用ES6的箭头函数来给count赋值。
    </span>
    <hr />
    <h4>** 三、通过mapState的数组来赋值**</h4>
    <span>最简单的写法,也是最实用的：computed:mapState(["count"])</span>
    <hr />
    <hr />
    <h4>** 模板获取Mutations方法 **</h4>
    <span
      >1.在模板count.vue里用import 引入我们的mapMutat <br />

      2.在模板的script标签里添加methods属性，并加入mapMutations</span
    >
  </div>
</template>
<script>
import store from "@/store/index";
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      message:
        "主要学习状态对象state赋值给内部对象，也就是把stroe/index.js中的值，赋值给我们模板count.vue里data中的值。我们有三种赋值方式，",
    };
  },
  //第一种方法
  // computed: {
  //   count() {
  //     return this.$store.state.count;
  //   },
  // },

  //第二种方法
  // computed: mapState({
  //   count: (state) => state.count,
  // }),

  //第三种方式
  // computed: mapState(["count"]),

  computed: {
    ...mapState(["count"]), //es6 扩展运算符：...
    //复杂的写法
    // count() {
    //   return this.$store.getters.count;
    // },
    //简写
    ...mapGetters(["count"]),
  },
  methods: mapMutations(["add", "cut"]),
  store,
};
</script>
