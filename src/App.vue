<template>
  <div id="app">
    <el-container>
      <el-header class="header">
        <el-row>
          <el-col :span="24">
            <div class="head-wrap">Welcome</div>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <navmenu></navmenu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    navmenu: resolve => require(["@/components/NavMenu.vue"], resolve)
  }
};
</script>

<style scoped>
.header {
  background-color: #409eff;
  color: #fff;
  line-height: 60px;
}
</style>
