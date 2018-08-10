<template>
  <el-row>
  <el-col :span="24">
    <el-menu
      class="el-menu-vertical"
      router
      unique-opened
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :default-openeds="['1','2']">
      <el-submenu index="1">
        <template slot="title"><span>Dynamic Components</span></template>
        <el-menu-item-group class="over-hide" v-for="sub in menu_dynamic" :key="sub.name">
          <el-menu-item :index="sub.url" v-text="sub.name"/>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><span>Sample Components</span></template>
        <el-menu-item-group class="over-hide" v-for="sub in menu_sample" :key="sub.name">
          <el-menu-item :index="sub.url" v-text="sub.name"/>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
</el-row>
</template>

<style scoped>
.over-hide {
  overflow: hidden;
}
</style>

<script>
export default {
  data() {
    return {
      menu_dynamic: require
        .context("@/dynamics/", true, /\.vue$/i)
        .keys()
        .map(key => {
          return { name: key.match(/\w+/)[0], url: "d_" + key.match(/\w+/)[0] };
        }),
      menu_sample: require
        .context("@/sample/", true, /\.vue$/i)
        .keys()
        .map(key => {
          return { name: key.match(/\w+/)[0], url: "s_" + key.match(/\w+/)[0] };
        })
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
