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
        <router-link to="/adminHome" v-if="option==0">
          <li class="nav-item" :class="{'active':active==0}" @click="active=0">
            <img src="../../assets/image/home.png" v-show="active!=0"/>
            <img src="../../assets/image/home-high.png"  v-show="active==0"/>
            首页
          </li>
        </router-link>
        <router-link to="/teacherhome" v-if="option==1">
          <li class="nav-item" :class="{'active':active==6}" @click="active=6">
            <img src="../../assets/image/home.png"  v-show="active!=6"/>
            <img src="../../assets/image/home-high.png"   v-show="active==6"/>
            首页
          </li>
        </router-link>
        <router-link to="/management" v-if="option==0 || option==1">
          <li class="nav-item" :class="{'active':active==1}" @click="active=1">
            <img src="../../assets/image/client.png"  v-show="active!=1"/>
            <img src="../../assets/image/client-high.png"  v-show="active==1" />
            客户管理
          </li>
        </router-link>
        <router-link to="/order" v-if="option==0 || option==1">
          <li class="nav-item" :class="{'active':active==2}" @click="active=2">
            <img src="../../assets/image/order.png"  v-show="active!=2"/>
            <img src="../../assets/image/order-high.png"   v-show="active==2"/>
            订单管理
          </li>
        </router-link>
        <router-link to="/finance" v-if="option==0 || option==2">
          <li class="nav-item" :class="{'active':active==3}" @click="active=3">
            <img src="../../assets/image/financial.png"  v-show="active!=3"/>
            <img src="../../assets/image/financial-high.png"   v-show="active==3"/>
            财务审核
          </li>
        </router-link>
        <router-link to="/mail" v-if="option==0 || option==3">
          <li class="nav-item" :class="{'active':active==4}" @click="active=4">
            <img src="../../assets/image/mail.png"  v-show="active!=4"/>
            <img src="../../assets/image/mail-high.png"   v-show="active==4"/>
            邮寄管理
          </li>
        </router-link>
        <router-link to="/staff" v-if="option==0">
          <li class="nav-item" :class="{'active':active==5}" @click="active=5">
            <img src="../../assets/image/staff.png"  v-show="active!=5"/>
            <img src="../../assets/image/staff-high.png"   v-show="active==5"/>
            员工管理
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      option: 0,
      active: 1
    };
  },
  mounted() {
    //如果登陆之后权限角色进行存储了 那么在导航页面就可以直接获取权限角色

    if (sessionStorage.getItem("status")) {
      this.option = sessionStorage.getItem("status");
      switch (this.option) {
        case 0:
          {console.log(this.active)
          this.active = 0;
          this.$router.push("/adminHome");}
          break;
        case 1:
          this.$router.push("/teacherhome");
          this.active = 6;
          break;
        case 2:
          this.$router.push("/finance");
          this.active = 3;
          break;
        case 3:
          this.$router.push("/mail");
          this.active = 4;
          break;
      }
      //   if(this.option == 0){
      //     this.$router.push('/adminHome')
      //   }else if(this.option == 1){
      //     this.$router.push('/teacherhome')
      //   }else if(this.option == 2){
      //     this.$router.push('/finance')
      //   }else if(this.option == 3){
      //     this.$router.push('/mail')
      //   }
    }
  },
  methods: {
    handleCommand(command) {
      sessionStorage.removeItem("status");
      this.$router.replace("/login");
    },
    taggle(e){
      this.active=e
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
  width :90px;
  padding:10px 25px;
  height: 25px;
  background-color: none;
  text-align: left;
  color: #9494AF;
  font-size: 16px;
  border-radius: 6px;
  line-height: 25px;
  margin-bottom: 20px;
}
.nav-item img{
  position relative;
  top:2px;
}
.active {
  background-color: #744EF7;
  color: #fff;
}
</style>