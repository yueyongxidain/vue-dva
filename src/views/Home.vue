<template>
  <div class="about">
    <el-container>
      <el-header style="background:#BBE6D6;line-height:60px;">
        <v-header />
      </el-header>
      <el-container>
        <el-aside style="background:#FFFFFF;max-width:200px;width:auto">
          <el-menu class="el-menu-vertical-demo" :router="true" :collapse="isCollapse">
            <Menus :trees="trees" />
          </el-menu>
        </el-aside>
        <el-container style="display:flex;flex-direction:column;background:#E6F4FF">
          <el-main style="min-height:calc(100vh - 100px)">
            <router-view>
              <!-- //三级路由 -->
            </router-view>
          </el-main>
          <el-footer style="height:40px;line-height:40px">
            <span>Copyright &copy; 2018 VUE后台管理系统</span>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-aside {
  overflow: hidden !important;
}
</style>

<script>
import Menus from "./menu";
import vHeader from "./vHeader";
import A from "@/store/createUrlStore";
export default {
  name: "test",
  components: {
    Menus,
    vHeader: vHeader
  },
  data: () => ({
    trees: A.menu[0].children || [],
    isCollapse: document.body.clientWidth < 992 ? true : false
  }),
  methods: {
    increment() {
      this.$store.commit("test/save", {
        count: this.count + 1
      });
    }
  },
  computed: {
    count() {
      return this.$store.state.test.count;
    }
  },
  mounted: function() {
    window.onresize = () => {
      if (document.body.clientWidth < 992) {
        this.isCollapse = true;
      } else {
        this.isCollapse = false;
      }
    };
  }
};
</script>
