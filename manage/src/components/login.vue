<template>
  <div id="login">
    <div class="login-wrap">
      <div class="title">登录</div>
      <div class="ipt">
        <img src="../assets/image/user.png" />
        <input v-model="loginForm.userName" type="text" placeholder="请输入账号" />
        <br />
        <img src="../assets/image/password.png" />
        <input v-model="loginForm.passWord" :type="passwordType" placeholder="请输入密码" />
      </div>
      <!-- <button @click="confirm">确定</button> -->
      <el-button
        type="primary"
        style="width:100%;"
        :loading="loading"
        @click.native.prevent="handleLogin"
      >登录</el-button>
    </div>
  </div>
</template>

<script>
import loginAPI from "../api/login/loginAPI";
import utilMd5 from "../common/js/md5";
import qs from "qs";
export default {
  data() {
    return {
      loginForm: {
        userName: "",
        passWord: "",

      },
      loading: false,
      passwordType: "password",
      options: [
        {
          value: "0", //"超级管理员"
          label: "超级管理员"
        },
        {
          value: "1",
          label: "老师账号"
        },
        {
          value: "2",
          label: "财务账号"
        },
        {
          value: "3",
          label: "前台账号"
        }
      ]
    };
  },
  methods: {
    // handleLogin() {
    //   this.loading = true;
    //   //签名
    //    var gs = '06d80cc9368d4d94e9cba7ddddc30915';
    //               gs = gs.substr(gs.length-8)+gs.substr(8,gs.length-16)+gs.substr(0,8);
    //   loginAPI
    //     .login({
    //       token:'',
    //       sign:gs,
    //       name: this.loginForm.userName,
    //       password: this.loginForm.passWord
    //     })
    //     .then(response => {
    //       var res = response.data;
    //       console.log(res,'res');
    //       if (res.result) {
    //         // 登录成功
    //         // 保存用户信息
    //         sessionStorage.setItem("status", res.data.isAdmin);
    //         this.$router.replace("/admin");
    //       } else {
    //         // 登录失败
    //         this.$message.error(res.msg);
    //       }
    //       this.loading = false;
    //     });
    //     //免登陆测试
    //       /*   sessionStorage.setItem("status", '0');
    //         this.$router.replace("/admin"); */
    // }
    
      handleLogin() {
        if (this.loginForm.userName == "" || this.loginForm.passWord == "") {
          alert("用户名或者密码不能为空");
          return;
        } else {
          var sginArr = {
            "device-type": "pc",
            ts: Date.parse(new Date()) / 1000,
            version: "1.0.1",
            salt: "chinanursecn!@#$"
          };
          let tempStr = "";
          for (let i in sginArr) {
            tempStr += i + "=" + sginArr[i];
          }
          tempStr = utilMd5.hexMD5(tempStr);
          var sign =
            tempStr.substr(tempStr.length - 8) +
            tempStr.substr(8, tempStr.length - 16) +
            tempStr.substr(0, 8);

          this.loginForm = {
            username: this.loginForm.userName,
            password: this.loginForm.passWord
          };
          //调取登录接口
          this.$http({
            url: "/api/api/admin/user/userLogin",
            method: "post",
            headers: {
              "Content-Type": "application/json",
              "device-type": "pc",
              ts: Date.parse(new Date()) / 1000,
              version: "1.0.1",
              salt: "chinanursecn!@#$",
              sign: sign
            },
            params:  this.loginForm
          }).then(res => {
            console.log(res, "res");
            if(res.data.code === 1){
                  // 提示成功信息
                  this.$message({
                      message: res.data.msg,
                      type: 'success'
                  });
                  // 跳转到首页
                  this.$router.replace("/admin");
                  localStorage.setItem('token',res.data.data.token)
                  // 将登录名使用vuex传递到Home页面
                  // this.$store.commit('handleUserName',res.data.data.username);
                }else{
                  // 登录失败，就提示错误信息
                  this.$message({
                      message: '登录失败,'+res.data.msg,
                      type: 'error'
                  });
                }
          });
        }
    }
  }
};
</script>

<style lang="stylus" scoped>
#login {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-image: url('../assets/image/loginBG.jpg');
  background-repeat: no-repeat;
}

.login-wrap {
  position: relative;
  left: 50%;
  top: 50%;
  margin-left: -245px;
  margin-top: -228px;
  width: 370px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  text-align: center;
  padding: 60px;
}

.title {
  display: inline-block;
  color: rgba(68, 68, 82, 1);
  font-size: 36px;
  padding: 12px 0;
  border-bottom: 5px solid #7955F9;
  margin-bottom: 50px;
}

input {
  padding: 16px 0 16px 52px;
  width: 318px;
  background-color: rgba(250, 250, 254, 1);
  border-radius: 6px;
}

img {
  position: relative;
  left: -150px;
  top: 35px;
}

button {
  width: 100%;
  padding: 16px 0;
  text-align: center;
  font-size: 16px;
  color: #fff;
  background-color: rgba(121, 85, 249, 1);
  margin-top: 50px;
  border-radius: 10px;
}
</style>