<template>
  <div id="Staff">
    <div class="title">员工管理</div>
    <div class="header">
      <button class="add-btn" @click="add">
        <img src="../../assets/image/yuangong.png" alt />添加员工
      </button>
    </div>
    <div class="filter-item">
      <span class="state">选择部门</span>
      <span @click="counton=0" :class="{'filteron':counton==0}">全部部门</span>
      <span @click="counton=2" :class="{'filteron':counton==2}">国际部</span>
      <span @click="counton=3" :class="{'filteron':counton==3}">国内部</span>
      <span @click="counton=4" :class="{'filteron':counton==4}">市场部</span>
      <span @click="counton=5" :class="{'filteron':counton==5}">财务部</span>
      <span @click="counton=6" :class="{'filteron':counton==6}">人事部</span>
    </div>
    <!-- 员工列表 -->
    <div class="staff-wrap">
      <ul class="staff-list clearfix">
        <li class="staff-item fl clearfix" v-for="(item,index) in staffList" :key="index">
          <p>
            <span class="name">{{item.user_nickname}}</span>
            <span class="departement fr">{{item.user_type}}</span>
          </p>
          <p>
            <span class="phone">{{item.user_login}}</span>
            <span class="edit fr" @click="edit(item)"> <img src="../../assets/image/edit.png" alt=""> </span>
          </p>  
        </li>
       
      </ul>
    </div>
    <!-- 员工列表end -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      counton:0,
      staffList: [
        {
          user_nickname: "张双顺",
          user_login: "11111",
          user_type: "国内部",
          user_status: 1
        },
        {
          user_nickname: "李蕾",
          user_login: "11111",
          user_type: "国内部",
          user_status: 1
        },
        {
          user_nickname: "韩梅梅",
          user_login: "11111",
          user_type: "国内部",
          user_status: 1
        },
        {
          user_nickname: "小红",
          user_login: "11111",
          user_type: "国内部",
          user_status: 1
        },
        {
          user_nickname: "小绿",
          user_login: "11111",
          user_type: "国内部",
          user_status: 1
        },
      ]
    };
  },
  methods: {
    edit(item) {
      this.$router.push({
        path:"/editstaff",
        query:{
          item
        }
      });
    },
    add() {
      this.$router.push("/addstaff");
    }
  }
};
</script>

<style scoped lang="stylus">
$pubcolor = #7752F8;

#Staff {
  padding: 0 40px;
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

.header {
  padding-top: 60px;
  width: 1400px;
  margin: 0 0 30px 40px;
  display: inline-block;
}

.header img {
  position: relative;
  top: 3px;
  right: 5px;
}

.add-btn {
  width: 114px;
  height: 48px;
  background-color: $pubcolor;
  border-radius: 9px;
  font-size: 14px;
  color: #fff;
  padding-left: 15px;
}

.filter-item {
  display :inline-block;
  background-color: rgba(255, 255, 255, 1);
  padding: 25px 20px;
  font-size: 14px;
  color: #444452;
  border-radius: 10px;
  margin-bottom: 40px;
}

.filter-item span {
  padding: 8px 14px;
  margin-right: 26px;
  cursor:pointer;
}

.filteron {
  background-color: $pubcolor;
  color: #fff;
  border-radius: 6px;
}

.state {
  color: #9494AF;
}

.staff-wrap {
  width: 1500px;
}

.staff-list {
  width: 1600px;
  overflow: hidden;
}

.staff-item {
  width: 300px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 8px 10px 0px rgba(86, 64, 247, 0.06);
  padding: 30px 30px 20px;
  font-size: 14px;
  color: #444452;
  line-height: 40px;
  margin: 0 30px 30px 0;
}

.name {
  font-size: 16px;
  font-weight: bold;
}
</style>