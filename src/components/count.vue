<template>
  <div>
    <h2>{{ message }}</h2>
    <h3>{{ $store.state.count }}</h3>
    <p><button @click="$store.commit('add')">+</button></p>
    <p><button @click="$store.commit('cut')">-</button></p>
  </div>
</template>
<script>
import store from "@/store/index";
export default {
  data() {
    return {
      message: "vuex_demo",
    };
  },
  store,
};
</script>
