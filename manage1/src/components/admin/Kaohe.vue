<template>
  <div id="kaohe" class="clearfix">
    <div class="title">考核进度</div>
    <div class="head clearfix">
      <div class="filter-item">
        <span class="state">选择部门</span>
        <span  @click="counton=0" :class="{'filteron':counton==0}">国际部</span>
        <span  @click="counton=1" :class="{'filteron':counton==1}">国内部</span>
        <span  @click="counton=2" :class="{'filteron':counton==2}">市场部</span>
      </div>
      <button class="set-btn fr" @click="yejiSetting">
       <img src="../../assets/image/yejiSetting.png" alt=""> 业绩设置</button>
    </div>
    <!-- 各部门业绩 -->
    <div class="yeji">
      <ul class="performance clearfix">
        <li class="personage fl">
          <div class="info-title">个人业绩统计</div>
          <p class="person-sum">11000元</p>
          <p class="progress">
            <el-progress :percentage="percentage" :color="customColor" :show-text="false"></el-progress>
          </p>
          <p class="progress-text clearfix">
            <span class="done">已完成30%</span>
            <span class="target fr">目标业绩：20000元</span>
          </p>
        </li>
        <li class="personage fl">
          <div class="info-title">个人业绩统计</div>

          <p class="person-sum">11000元</p>
          <p class="progress">
            <el-progress :percentage="percentage" :color="customColor" :show-text="false"></el-progress>
          </p>
          <p class="progress-text clearfix">
            <span class="done">已完成30%</span>
            <span class="target fr">目标业绩：20000元</span>
          </p>
        </li>
        <li class="personage fl">
          <div class="info-title">个人业绩统计</div>

          <p class="person-sum">11000元</p>
          <p class="progress">
            <el-progress :percentage="percentage" :color="customColor" :show-text="false"></el-progress>
          </p>
          <p class="progress-text clearfix">
            <span class="done">已完成30%</span>
            <span class="target fr">目标业绩：20000元</span>
          </p>
        </li>
      </ul>
    </div>

    <!-- ******************业绩同首页需要带一个百分比趋势******************** -->

    <!-- 各部门业绩end -->
    <div id="table" class="clearfix">
      <!-- 周业绩 -->
      <ul id="weektable" class="fl">
        <li class="table-title clearfix">
          <p>姓名</p>
          <p>本周目标业绩</p>
          <p>7月8号</p>
          <p>7月8号</p>
          <p>7月8号</p>
          <p>7月8号</p>
          <p>7月8号</p>
          <p>7月8号</p>
          <p>7月8号</p>
          <p>本周总业绩</p>
          <p>完成比例</p>
        </li>
        <li class="clearfix" v-for="(item,index) in weeklist" :key="index">
          <span>{{item.name}}</span>
          <span>{{item.now_amount}}</span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span>{{item.amount}}</span>
          <span :class="[item.trend==0?'decline':'trend']">{{item.radio}}</span>
        </li>
      </ul>
      <!-- 周业绩end -->

      <!-- 月业绩 -->
      <ul id="monthtable" class="fl">
        <li class="table-title clearfix">
          <p>本周目标业绩</p>
          <p>本周总业绩</p>
          <p>完成比例</p>
        </li>
        <li class="clearfix" v-for="(item,index) in monthlist" :key="index">
          <span>{{item.now_amount}}</span>
          <span>{{item.amount}}</span>
          <span :class="[item.trend==0?'decline':'trend']">{{item.radio}}</span>
        </li>
      </ul>
      <!-- 月业绩end -->
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  data() {
    return {
      counton:0,
      percentage: 20,
      customColor: "#7752F9",
      // 拿到数据需要转换百分比
      weeklist: [
        {
          uid: 1,
          name: "张三",
          amount: "90000.00",
          now_amount: 300,
          radio: 0.33,
          trend: 0
        },
        {
          uid: 1,
          name: "张三",
          amount: "90000.00",
          now_amount: 300,
          radio: 0.33,
          trend: 1
        },
        {
          uid: 1,
          name: "张三",
          amount: "90000.00",
          now_amount: 300,
          trend: 1,
          radio: 0.33
        },
        {
          uid: 1,
          name: "张三",
          amount: "90000.00",
          now_amount: 300,
          trend: 1,
          radio: 0.33
        },
        {
          uid: 1,
          name: "张三",
          amount: "90000.00",
          now_amount: 300,
          trend: 0,
          radio: 0.33
        }
      ],
      monthlist: [
        {
          uid: 1,
          name: "李四",
          amount: "90000.00",
          now_amount: 300,
          trend: 1,
          radio: 0.33
        },
        {
          uid: 1,
          name: "李四",
          amount: "90000.00",
          now_amount: 300,
          trend: 1,
          radio: 0.33
        },
        {
          uid: 1,
          name: "李四",
          amount: "90000.00",
          now_amount: 300,
          trend: 0,
          radio: 0.33
        },
        {
          uid: 1,
          name: "李四",
          amount: "90000.00",
          now_amount: 300,
          trend: 1,
          radio: 0.33
        },
        {
          uid: 1,
          name: "李四",
          amount: "90000.00",
          now_amount: 300,
          trend: 0,
          radio: 0.33
        }
      ]
    };
  },
  methods: {
    yejiSetting() {
      this.$router.push("/yejishezhi");
    }
  },
  mounted() {}
};
</script>

<style scoped lang="stylus">
$pubcolor = #8665FF;

shadow() {
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 8px 10px 0px rgba(86, 64, 247, 0.06);
}

#kaohe {
  padding: 0 40px 50px;
  margin-left: -40px;
  background: #FAFAFE;
}

#table >>> .has-gutter th {
  color: #444452;
  font-size: 14px;
}

#weektable {
  width: 75%;
  margin-right: 20px;
}

#monthtable {
  width: 23%;
}

.title {
  margin: 70px 0 50px;
  color: rgba(68, 68, 82, 1);
  font-size: 28px;
}

.set-btn {
  width: 114px;
  height: 48px;
  background-color: $pubcolor;
  border-radius: 9px;
  font-size: 14px;
  color: #fff;
  float: right;
  cursor:pointer;
}
.set-btn img
  position: relative;
  top: 3px
.filter-item {
  float: left;
  background-color: #fff;
  padding: 25px 20px;
  font-size: 14px;
  color: #444452;
  border-radius: 10px;
  margin-bottom: 40px;
}

.filter-item span {
  margin-right: 26px;
  padding: 8px 14px;
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

.yeji {
  width: 100%;
  overflow: hidden;
}

.performance {
  width: 1700px;
}

.performance li {
  width: 430px;
  padding: 40px;
  shadow();
  margin: 0 40px 40px 0;
}

.done {
  color: $pubcolor;
  font-weight: normal;
}

.target {
  font-weight: normal;
  color: #9494AF;
}

.count-info {
  width: 490px;
  padding: 40px 30px;
  shadow();
}

.info-title {
  color: rgba(68, 68, 82, 1);
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 30px;
}

.btn {
  margin: 20px 0 30px;
}

.btn p {
  padding: 8px 22px;
  color: rgba(114, 109, 134, 1);
  font-size: 12px;
  background: #FAFAFE;
  float: left;
  margin-right: 20px;
  border-radius: 6px;
}

.btn .active {
  background: $pubcolor;
  color: #fff;
}

.person-sum {
  color: rgba(121, 84, 249, 1);
  font-size: 30px;
  font-weight: 70px;
  margin-bottom: 20px;
}

.progress {
  margin-bottom: 20px;
}

.progress-text {
  width: 100%;
  font-weight: bold;
  font-size: 14px;
}

#weektable .table-title, #monthtable .table-title {
  width: 100%;
  box-shadow: none;
  border-radius: 0;
  background-color: transparent;
}

#weektable .table-title p, #monthtable .table-title p {
  display: inline-block;
  width: 90px;
  margin-right: 20px;
  font-weight: bold;
  color: rgba(68, 68, 82, 1);
  float: left;
  font-size: 14px;
}

#weektable .table-title, #monthtable .table-title {
  margin-right: 60px;
  padding: 12px 0 12px 20px;
}

#weektable li, #monthtable li {
  padding: 25px 20px;
  margin-bottom: 20px;
  color: #444452;
  font-size: 14px;
  background-color :#fff;
  cursor: pointer;
  border-radius: 10px;
}

#weektable li span, #monthtable li span {
  vertical-align: middle;
  width: 90px;
  margin-right: 20px;
  float: left;
}

.trend {
  color: $pubcolor;
}

.decline {
  color: rgba(255, 81, 81, 1);
}
</style>