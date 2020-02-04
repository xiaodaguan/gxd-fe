<template>
  <a-layout style="background: transparent;">
    <!-- header -->
    <a-layout-header style="background: black; color: white; font-weight:bold; font-size: 25px">
      {{ name }}
    </a-layout-header>

    <a-layout>
      <!-- sider -->
      <a-layout-sider :trigger="null">
        <Menu />
      </a-layout-sider>
      <!--  main -->
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
    </a-layout>

    <a-layout-footer style="text-align: center; background: transparent; "> Antd demo @2020 Created by gxd</a-layout-footer>
  </a-layout>
</template>

<script>
import Menu from "./Menu";
export default {
  name: "basicLayout",
  components: { Menu },
  data() {
    return {
      name: ""
    };
  },
  updated() {
    // console.log("updated");
    this.name = document.title;
  },
  mounted() {}
};
</script>

<style></style>
