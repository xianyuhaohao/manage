<template>
    <div id="add-staff">
    <div class="title">添加员工</div>
    <div class="client-info">
      <!-- 填写客户信息 -->
      <div class="ipt">
        <ul class="ipt-list clearfix">
            <div class="clearfix">
                <li class="ipt-item fl">
                    <p>
                    <i>*</i> 姓名
                    </p>
                    <input type="text" v-model="user_nickname"/>
                </li>
                <li class="ipt-item fl">
                    <p>
                    <i>*</i> 部门
                    </p>
                    <select v-model="user_type">
                    <option value=2>国内部</option>
                    <option value=3>国际部</option>
                    <option value=4>市场部</option>
                    <option value=5>财务部</option>
                    <option value=6>人事部</option>
                    </select>
                </li>
            </div>
            <div class="clearfix">
                <li class="ipt-item fl">
                    <p>
                    <i>*</i> 手机号
                    </p>
                    <input type="text" v-model="user_login"/>
                </li>

                <li class="ipt-item fl">
                    <p>
                    <i>*</i> 密码
                    </p>
                    <input type="text" v-model="user_pass"/>
                </li>
                
            </div>

        </ul>
      </div>
      <!-- 填写客户信息end -->

    </div>
    <button class="confirm" @click="confirm">确认添加</button>
    </div>
</template>
<script>
export default {
  data() {
    return {
        user_nickname:'',
        user_login:'',
        user_pass:'',
        user_type:0,
    };
  },
  methods:{
    confirm(){
        if(this.user_nickname&&this.user_login&&this.user_pass&&Number(this.user_type)){
            let obj={
                user_nickname:this.user_nickname,
                user_login:this.user_login,
                user_pass:this.user_pass,
                user_type:Number(this.user_type)
            }
            console.log(obj);
            this.$alert('添加成功', '提示', {
                confirmButtonText: '确定',
                //   callback: action => {
                //     this.$message({
                //       type: 'info',
                //       message: `action: ${ action }`
                //     });
                //   }
            });
        }else{
            this.$alert('请完整填写必填项', '提示', {
                confirmButtonText: '确定',
                //   callback: action => {
                //     this.$message({
                //       type: 'info',
                //       message: `action: ${ action }`
                //     });
                //   }
            });
        }
    },
  },
  
};
</script>
<style lang="stylus" scoped>
#add-staff {
    padding: 0 40px 40px;
    min-height: 960px;
    background: #FAFAFE;
    margin-left: -40px;
    width: 1620px;
}

.title {
    display: inline-block;
    margin: 70px 0 30px;
    color: rgba(68, 68, 82, 1);
    font-size: 28px;
}

.client-info {
    width: 1520px;
    padding: 50px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 8px 10px 0px rgba(86, 64, 247, 0.06);
    overflow: hidden;
    margin-bottom: 40px;
}

.ipt {
    margin-bottom: 40px;
    width: 1700px;
}

.ipt-item {
    margin: 0 130px 10px 0;
}

.ipt p {
    font-size: 16px;
    color: #444452;
    font-weight: bold;
    margin-bottom: 16px;
}

.ipt input, .ipt select {
    padding-left: 10px;
    border-radius: 4px;
    margin-bottom: 30px;
    background-color: rgba(250, 250, 254, 1);
    border: 1px solid rgba(239, 239, 248, 1);
}

.ipt input {
    width: 270px;
    height: 38px;
}

.ipt select {
    width: 280px;
    height: 40px;
}

.ipt i, .course-title {
    color: red;
}

.confirm {
  padding: 17px 50px;
  background-color: rgba(121, 85, 249, 1);
  color: #fff;
  font-size: 14px;
  border-radius: 10px;
  margin-right :40px;
}
</style>
