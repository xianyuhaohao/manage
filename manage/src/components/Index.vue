<template>
  <div id="hello">
    <el-container>
      <el-aside width="200px">
      <Navgation></Navgation>        
      </el-aside>
      <el-main>
      <router-view />
        
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Navgation from "@/components/navgation/Navgation";
export default {
  components: {
    Navgation
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

#hello >>> .el-aside
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 8px 0px 10px 0px rgba(86, 64, 247, 0.06);
#hello >>> .el-main
  padding:0 0 0 40px;
el-main
  background:#fff;
</style>
