<template>
  <div id="app">
    <!-- 头部导航栏 -->
    <Header />

    <!-- 主体内容 -->
    <main class="container mx-auto p-4">
      <!-- 路由视图，根据路由显示不同页面 -->
      <router-view />
    </main>
    <FixedFooter v-if="eventBus.fixedFooterVisible" class="fixedFooter"/>
    <RelativeFooter v-if="eventBus.relativeFooterVisible" class="relativeFooter"/>
  </div>
</template>

<script lang="ts">
import {defineComponent, provide, ref} from 'vue';
import Header from './components/Header.vue'; // 导入头部组件
import FixedFooter from "./components/FixedFooter.vue";
import RelativeFooter from "./components/RelativeFooter.vue";
import eventBus from "./router/eventBus";

export default defineComponent({
  name: 'App',
  components: {
    Header,  // 注册 Header 组件
    FixedFooter,
    RelativeFooter,
  },
  data() {
    const currentPage = ref('home'); // 默认页面
    const isLoggedIn = ref(false);

    provide('currentPage', currentPage); // 提供 currentPage
    provide('isLoggedIn', isLoggedIn);
    return {
      currentPage,
      eventBus,
    };

  },
});
</script>

<style>
/* 全局样式，可以根据需要扩展 */
#app {
  font-family: 'Arial', sans-serif;
  min-height: 100vh;
}

body {
  margin: 0;
  height: 100vh; /* 确保 body 高度为视口高度 */
  background-image: url('./assets/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed; /* 固定背景 */
}
.fixedFooter {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30px;
  padding: 10px; /* 示例内边距 */
}
.relativeFooter {
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30px;
  padding: 10px; /* 示例内边距 */
}
</style>
