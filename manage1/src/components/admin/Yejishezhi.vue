<template>
  <div id="yeji">
    <div class="title">业绩设置</div>
    <div class="filter-item">
      <span class="state">选择部门</span>
      <span @click="counton=0" :class="{'filteron':counton==0}">国际部</span>
      <span @click="counton=1" :class="{'filteron':counton==1}">国内部</span>
      <span @click="counton=2" :class="{'filteron':counton==2}">市场部</span>
    </div>
    <!-- 目标业绩 -->
    <div class="mubiao">
      <ul class="new-client">
        <li>
          <span class="name">国际部</span>
          <span class="week">周目标业绩：{{totalweek}}</span>
          <span class="month">月目标业绩：{{totalmonth}}</span>
          <span class="year">年目标业绩：{{totalyear}}</span>
        </li>
        <li class="clearfix" v-for="(item,index) in targetList" :key="index">
          <div v-show="!item.isShow">
            <span class="name">{{item.user_nickname}}</span>
            <span class="week">周目标业绩：{{item.week_amount}}</span>
            <span class="month">月目标业绩：{{item.month_amount}}</span>
            <span class="year">年目标业绩：{{item.year_amount}}</span>
            <img
              src="../../assets/image/edit.png"
              class="operation fr"
              @click="targetList[index].isShow=true"
            />
          </div>
          <div class="ipt" v-show="item.isShow">
            <div class="ipt-item fl">
              <p>{{item.user_nickname}}目标业绩(周)</p>
              <input type="text" v-model="item.week_amount" />
            </div>
            <div class="ipt-item fl">
              <p>{{item.user_nickname}}目标业绩(月)</p>
              <input type="text" v-model="item.month_amount" />
            </div>
            <div class="ipt-item fl">
              <p>{{item.user_nickname}}目标业绩(年)</p>
              <input type="text" v-model="item.year_amount" />
            </div>
            <img
              src="../../assets/image/shouqi.png"
              class="operation fr"
              @click="targetList[index].isShow=false"
            />
          </div>
        </li>
      </ul>
    </div>
    <!-- 目标业绩end -->

    <p class="tip">本周修改本周生效（周/月/年为同样规则）</p>
    <button class="confirm" @click="confirmShow=true">确认提交</button>

    <!-- 确定弹窗 -->
    <div v-show="confirmShow">
      <!-- 遮罩层 -->
      <div class="zhezhao"></div>

      <div class="pop clearfix">
        <div class="pop-title">本次修改内容</div>
        <ul class="modify">
          <li class="modify-item">
            <span class="name">国际部</span>
            <span class="week">周目标业绩：{{totalweek}}</span>
            <span class="month">月目标业绩：{{totalmonth}}</span>
            <span class="year">年目标业绩：{{totalyear}}</span>
          </li>
          <li class="modify-item"  v-for="(item,index) in targetList" :key="index">
            <span class="name">{{item.user_nickname}}</span>
            <span class="week">周目标业绩：{{item.week_amount}}</span>
            <span class="month">月目标业绩：{{item.month_amount}}</span>
            <span class="year">年目标业绩：{{item.year_amount}}</span>
          </li>
        </ul>
        <button class="modi-confirm" @click="confirmShow=false">确认修改</button>
      </div>
    </div>
    <!-- 确定弹窗end -->

  </div>
</template>

<script>
import echarts from "echarts";
export default {
  data() {
    return {
      totalweek:0,
      totalmonth:0,
      totalyear:0,
      counton: 0,
      confirmShow:false,
      targetList: [
        {
          user_id: 1,
          user_nickname: "王芳",
          week_amount: 2000,
          month_amount: 14000,
          year_amount: 90000,
          isShow: false
        },
        {
          user_id: 2,
          user_nickname: "张磊",
          week_amount: 2000,
          month_amount: 14000,
          year_amount: 90000,
          isShow: false
        },
        {
          user_id: 3,
          user_nickname: "卢海华",
          week_amount: 2000,
          month_amount: 14000,
          year_amount: 90000,
          isShow: false
        },
        {
          user_id: 4,
          user_nickname: "魏媛媛",
          week_amount: 2000,
          month_amount: 14000,
          year_amount: 90000,
          isShow: false
        },
        {
          user_id: 5,
          user_nickname: "张瑶",
          week_amount: 2000,
          month_amount: 14000,
          year_amount: 90000,
          isShow: false
        },
        {
          user_id: 6,
          user_nickname: "刘磊",
          week_amount: 2000,
          month_amount: 14000,
          year_amount: 90000,
          isShow: false
        }
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  watch: {
    totalweek: function(newValue) {
      console.log(newValue);
      
      
    },
    totalmonth: function() {
      let month = 0;
      this.targetList.forEach(item => {
        return (month += item.month_amount);
      });
      return month;
    },
    totalyear: function() {
      let year = 0;
      this.targetList.forEach(item => {
        return (year += item.year_amount);
      });
      return year;
    }
  },
  // watch: {
  //   week: function(params) {

  //   }
  // },
  mounted() {}
};
</script>

<style scoped lang="stylus">
$pubcolor = #8665FF;

shadow() {
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 8px 10px 0px rgba(86, 64, 247, 0.06);
}

#yeji {
  padding: 70px 40px 50px;
  margin-left: -40px;
  background: #FAFAFE;
}

.title {
  margin: 0 0 50px;
  color: rgba(68, 68, 82, 1);
  font-size: 28px;
}

.filter-item {
  width: 380px;
  background-color: #fff;
  padding: 25px 20px;
  font-size: 14px;
  color: #444452;
  border-radius: 10px;
  margin-bottom: 40px;
}

.filter-item span {
  padding: 8px 14px;
  margin-right: 26px;
  cursor: pointer;
}

.filteron {
  background-color: $pubcolor;
  color: #fff;
  border-radius: 6px;
}

.state {
  color: #9494AF;
}

.new-client li {
  line-height: 44px;
  padding: 12px 40px;
  margin-bottom: 20px;
  color: #444452;
  font-size: 14px;
  border-radius: 10px;
  shadow();
}

.new-client li span {
  display: inline-block;
  width: 150px;
  margin-right: 20px;
}

.name {
  font-weight: bold;
}

.target-info {
  padding: 40px 40px 0;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 8px 10px 0px rgba(86, 64, 247, 0.06);
  overflow: hidden;
  margin-bottom: 40px;
}

.ipt {
  margin-bottom: 40px;
}

.ipt-item {
  margin: 0 130px 10px 0;
}

.ipt p {
  font-size: 16px;
  color: #444452;
  font-weight: bold;
  margin-bottom: 20px;
}

.ipt input {
  padding-left: 10px;
  border-radius: 4px;
  margin-bottom: 30px;
  background-color: #fff;
  border: 1px solid rgba(239, 239, 248, 1);
  width: 270px;
  height: 38px;
  background-color: rgba(250, 250, 254, 1);
}

.tip {
  color: rgba(148, 148, 175, 1);
  font-size: 16px;
  margin-bottom: 30px;
}

.confirm, .modi-confirm {
  padding: 17px 50px;
  background-color: rgba(121, 85, 249, 1);
  color: #fff;
  font-size: 14px;
  border-radius: 10px;
  margin-right: 40px;
}

.zhezhao {
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.pop {
  position: fixed;
  left: 50%;
  top: 50%;
  margin: -150px 0 0 -355px;
  width: 611px;
  padding: 60px 50px 30px;
  background-color: #fff;
  z-index: 10;
  border-radius: 10px;
}

.pop-title {
  color: #444452;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 40px;
  text-align: center;
}

.modify-item {
  margin-bottom: 28px;
}

.modify-item span {
  display: inline-block;
  width: 150px;
  margin-right: 10px;
}

.modify-item .name {
  width: 100px;
}

.modi-confirm {
  margin-left: 38%;
}
</style>