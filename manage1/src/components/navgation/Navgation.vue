<template>
  <div id="Navgation">
    <div class="info">
      <img src="../../assets/image/warn.png" alt class="photo" />
      <div class="name">管理账号</div>
      <div class="quit">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="nav">
      <ul>
        <router-link to="/adminHome">
          <li class="nav-item active">
            <img src alt />首页
          </li>
        </router-link>
        <router-link to="/management">
        <li class="nav-item">
          <img src alt />客户管理
        </li>
         <router-link to="/order">
        <li class="nav-item">
          <img src alt />订单管理
        </li>
        </router-link>
        </router-link>
        <router-link to="/finance">
        <li class="nav-item">
          <img src alt />财务审核
        </li>
        </router-link>
        <router-link to="/mail">
        <li class="nav-item">
          <img src alt />邮寄管理
        </li>
        </router-link>
        <router-link to="/staff">
        <li class="nav-item">
          <img src alt />员工管理
        </li>
        </router-link>
       
        <router-link to="/teacherhome">
        <li class="nav-item">
          <img src alt />老师首页
        </li>
        </router-link>
        <router-link to="/teacherclient">
        <li class="nav-item">
          <img src alt />客户管理
        </li>
        </router-link>
        <router-link to="/client">
        <li class="nav-item">
          <img src alt />员工管理
        </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleCommand(command) {
        this.$message('click on item ' + command);
    }
  }
};
</script>

<style scoped lang="stylus">
$pubcolor = #8665FF;

#Navgation {
  min-height: 800px;
  padding: 50px 30px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 8px 0px 10px 0px rgba(86, 64, 247, 0.06);
  text-align: center;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}

.el-icon-arrow-down {
  font-size: 12px;
}

.photo {
  display: inline-block;
  width: 45.33px;
  height: 45.33px;
  border-radius: 50%;
  margin-bottom: 18px;
}

.name {
  color: rgba(30, 29, 34, 1);
  font-size: 18px;
  font-weight: 70px;
  margin-bottom: 12px;
}

.quit {
  margin-bottom: 60px;
}

.nav {
  text-align: center;
}

.nav-item {
  display: inline-block;
  width: 140px;
  height: 40px;
  background-color: none;
  text-align: center;
  color: #9494AF;
  font-size: 16px;
  border-radius: 6px;
  line-height: 40px;
  margin-bottom: 20px;
}

.active {
  background-color: #744EF7;
  color: #fff;
}
</style>