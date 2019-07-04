<template>
  <el-card shadow="hover">
    <div class="home">{{count}}</div>
    <button @click="increment">+</button>
  </el-card>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {},
  computed: {
    count() {
      return this.$store.state.test.count;
    }
  },
  methods: {
    increment() {
      this.$store.commit("test/save", {
        count: this.count + 1
      });
    }
  }
};
</script>
