<template>
    <div id='login'>
        <div class="login-wrap">
            <div class="title">登录</div>
            <div class="ipt">
                <img src="../assets/image/user.png"/><input type="text" placeholder="请输入账号"><br/>
                <img src="../assets/image/password.png"/><input type="password" placeholder="请输入密码">
            </div>
            <button @click="confirm">确定</button>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {}
    },
    methods:{
        confirm(){
        this.$store
            .dispatch('Login', this.loginForm)
            .then(() => {
                this.$router.push({ path: '/' });
            })
            .catch(() => {
                
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
#login
    position:fixed;
    left:0;
    top:0;
    bottom :0;
    right:0;
    background-image :url('../assets/image/loginBG.jpg');
    background-repeat :no-repeat;
.login-wrap
    position:relative;
    left:50%;
    top:50%;
    margin-left:-245px;
    margin-top:-228px;
    width: 370px;
    background-color: rgba(255, 255, 255, 1);
    border-radius :10px;
    text-align:center;    
    padding:60px;
.title
    display :inline-block;
    color: rgba(68, 68, 82, 1);
    font-size: 36px;
    padding:12px 0;
    border-bottom :5px solid #7955F9;
    margin-bottom :50px;
input 
    padding:16px 0 16px 52px;
    width: 318px;
    background-color: rgba(250, 250, 254, 1);
    border-radius :6px;
img 
    position: relative;
    left: -150px;
    top: 35px;
button 
    width: 100%;
    padding:16px 0;
    text-align :center;
    font-size :16px;
    color:#fff;
    background-color: rgba(121, 85, 249, 1);
    margin-top :50px;
    border-radius :10px;
</style>