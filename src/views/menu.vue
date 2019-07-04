<template>
  <div>
    <template v-for="item in trees">
      <el-submenu v-if="item.children&&item" :key="item.path" :index="item.path">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">{{item.name}}</span>
        </template>
        <el-menu-item-group>
          <menus :trees="item.children"></menus>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item v-else :key="item.path" :index="item.path">
        <i class="el-icon-menu"></i>
        <span slot="title">{{item.name}}</span>
      </el-menu-item>
    </template>
  </div>
</template>
<style>
.el-menu-item-group__title {
  display: none !important;
}
</style>

<script>
// @ is an alias to /src
export default {
  name: "menus",
  props: {
    trees: Array
  }
};
</script>
