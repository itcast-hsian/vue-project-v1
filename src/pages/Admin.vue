<template>
  <div class="container">
    <el-container>
      <el-aside width="auto">
        <GlobalAside :isCollapse="isCollapse"/>
      </el-aside>
      <el-container>
        <el-header>
          <GlobalHeader @toggle="handleToggleMenu"/>
        </el-header>
        <el-main>
          <Breadcrumd :dataSource="breadcrumb"/>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

import globalAside from "../components/Aside.vue";
import globalHeader from "../components/Header.vue";
import breadcrumd from "../components/Breadcrumb.vue";

export default {
  name: 'app',
  data(){
    return {
      isCollapse: false,

    }
  },
  components: {
    GlobalAside: globalAside,
    GlobalHeader: globalHeader,
    Breadcrumd: breadcrumd
  },
  
  computed: {
    breadcrumb(){
      const {matched} = this.$route;
      return matched.map(v => {
          return {
              name: v.meta,
              path: v.path
          }
      });
    }
  },

  methods: {
    handleToggleMenu(){
      this.isCollapse = !this.isCollapse;
    }
  }
}
</script>

<style scoped lang="scss">
.el-header, .el-footer {
    color: #333;
    padding:0;
    line-height:60px;
    background:#fff;
    box-shadow:1px 1px 3px #d5dde4;
    position:relative;
  }

  .el-footer {
    background-color: #E9EEF3;
  }
  
  .el-aside {
    background-color: #E9EEF3;
    color: #333;
    position: relative;
    z-index:9;
  }
  
  .el-main {
    background-color: #E9EEF3;
    display: flex;
    flex-direction: column;
  }
  
  .container > .el-container {
    position:absolute;
    width:100%;
    left:0; 
    top:0;
    bottom:0;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
