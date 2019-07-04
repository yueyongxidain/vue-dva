<template>
  <div class="header" style="width:100%; height:60px; line-height:60px">
    <div style="height:60px; line-height:60px">
      <el-image :src="Logo" lazy class="header-logo"></el-image>
      <span class="logo-text">后台管理系统</span>
    </div>
    <div style="height:60px; line-height:60px">
      <div>
        <span>欢迎您 </span>
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          style="vertical-align: middle;"
        ></el-avatar>
      </div>
    </div>
  </div>
</template>
<style>
</style>

<script>
// @ is an alias to /src
import Logo from "@/assets/logo.png";
import "./header.less";
export default {
  name: "vHeader",
  data: () => ({
    Logo
  })
};
</script>
