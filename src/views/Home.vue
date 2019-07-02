<template>
  <div class="about">
    <el-container>
      <el-container>
        <el-aside width="200px" style="background:#FFFFFF">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
        
          >
            <Menus/>
          </el-menu>
        </el-aside>
        <el-container style="display:flex;flex-direction:column;background:#E4F5FF">
          <el-header style="background:#BBE6D6">头部</el-header>
          <el-main style="min-height:calc(100vh - 100px)">
            <router-view>
              <!-- //三级路由 -->
            </router-view>
          </el-main>
          <el-footer style="height:40px;line-height:40px">Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// import { mapState, mapGetters, mapActions, mapMutations } from "vuex"; //先要引入
import Menus from "./menu";
console.log("test");
export default {
  name: "test",
  components:{
    Menus
  },
  data: () => ({}),
  methods: {
    increment() {
      this.$store.commit("save", {
        count: this.count + 1
      });
    }
  },
  computed: {
    count() {
      return this.$store.state.test.count;
    }
  }
};
</script>
