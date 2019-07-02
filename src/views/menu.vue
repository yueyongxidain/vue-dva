<template>
  <div>
    <template v-for="item in trees">
      <el-submenu v-if="item.children!==undefined&&item" :key="item.path">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">{{item.name}}</span>
        </template>
        <el-menu-item-group>
            
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item v-else :key="item.path" index="item.path">
        <i class="el-icon-menu"></i>
        <span>{{item.name}}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
import A from "@/store/createUrlStore";
console.log("A.routes", A.menu);
export default {
  name: "menus",
  data: () => ({
    trees: A.menu
  })
};
</script>
