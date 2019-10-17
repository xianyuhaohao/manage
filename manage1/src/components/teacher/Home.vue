<template>
  <div id="Home clearfix">
    <div class="title">首页</div>
    <div class="left fl">
      <ul class="performance clearfix">
        <!-- 个人业绩统计 -->
        <li class="personage fl">
          <div class="info-title">个人业绩统计</div>
          <div class="person-btn clearfix">
            <p class="week" @click="personCounton=1" :class="{'active':personCounton==1}">本周</p>
            <p class="month" @click="personCounton=2" :class="{'active':personCounton==2}">本月</p>
            <p class="year" @click="personCounton=3" :class="{'active':personCounton==3}">一年</p>
          </div>
          <p class="person-sum">
            {{personCounton==1?person.week.now_amount:''}}
            {{personCounton==2?person.month.now_amount:''}}
            {{personCounton==3?person.year.now_amount:''}}
          </p>
          <p class="progress">
            <el-progress :percentage="percentage" :color="customColor" :show-text="false"></el-progress>
          </p>
          <p class="progress-text clearfix">
            <span class="done">已完成
              {{personCounton==1?person.week.radio:''}}
              {{personCounton==2?person.month.radio:''}}
              {{personCounton==3?person.year.radio:''}}
            </span>
            <span class="target fr">目标业绩：
              {{personCounton==1?person.week.plan_amount:''}}
              {{personCounton==2?person.month.plan_amount:''}}
              {{personCounton==3?person.year.plan_amount:''}}
            </span>
          </p>
        </li>
        <!-- 个人业绩统计end -->

        <!-- 部门业绩统计 -->
        <li class="department fl">
          <div class="info-title">部门业绩统计</div>
          <div class="depart-btn clearfix">
            <p class="week" @click="departCounton=1" :class="{'active':departCounton==1}">本周</p>
            <p class="month" @click="departCounton=2" :class="{'active':departCounton==2}">本月</p>
            <p class="year" @click="departCounton=3" :class="{'active':departCounton==3}">一年</p>
          </div>
           <p class="person-sum">
            {{departCounton==1?depart.week.now_amount:''}}
            {{departCounton==2?depart.month.now_amount:''}}
            {{departCounton==3?depart.year.now_amount:''}}
          </p>
          <p class="progress">
            <el-progress :percentage="percentage" :color="customColor" :show-text="false"></el-progress>
          </p>
          <p class="progress-text clearfix">
            <span class="done">已完成
              {{departCounton==1?depart.week.radio:''}}
              {{departCounton==2?depart.month.radio:''}}
              {{departCounton==3?depart.year.radio:''}}
            </span>
            <span class="target fr">目标业绩：
              {{departCounton==1?depart.week.plan_amount:''}}
              {{departCounton==2?depart.month.plan_amount:''}}
              {{departCounton==3?depart.year.plan_amount:''}}
            </span>
          </p>
        </li>
        <!-- 部门业绩统计end -->

      </ul>
      <!-- 筛选 -->
      <div class="filter-item">
        <span  @click="filteron=0" :class="{'filteron':filteron==0}">待处理</span>
        <span  @click="filteron=1" :class="{'filteron':filteron==1}">新客户</span>
        <span  @click="filteron=2" :class="{'filteron':filteron==2}">邮寄信息</span>
        <span  @click="filteron=3" :class="{'filteron':filteron==3}">财务信息</span>
        <span  @click="filteron=4" :class="{'filteron':filteron==4}">分期提醒</span>
      </div>
      <!-- 筛选end -->

      <!-- 新分配客户 -->
      <div class="distribute">
        <ul class="distribute-list clearfix">
          <li class="distribute-item fl">
            <p class="dis-title">新分配客户（000023）</p>
            <div class="info">
              <p>
                客户：
                <span>赵丽 女</span>
              </p>
              <p>
                手机：
                <span>1111111111</span>
              </p>
            </div>
            <div class="comment">
              <p>意向培训课程：</p>
              <p class="comment-list">意向培训课程：意向培训课程：意向培训课程：意向培训课程：</p>
            </div>
            <p class="dis-bottom clearfix">
              <span class="date">2019</span>
              <span class="detail fr">
                查看详情
                <i class="sanjiao"></i>
              </span>
            </p>
          </li>
          <li class="distribute-item fl">
            <p class="dis-title">新分配客户（000023）</p>
            <div class="info">
              <p>
                客户：
                <span>赵丽 女</span>
              </p>
              <p>
                手机：
                <span>1111111111</span>
              </p>
            </div>
            <div class="comment">
              <p>意向培训课程：</p>
              <p class="comment-list">意向培训课程：意向培训课程：意向培训课程：意向培训课程：</p>
            </div>
            <p class="dis-bottom clearfix">
              <span class="date">2019</span>
              <span class="detail fr">
                查看详情
                <i class="sanjiao"></i>
              </span>
            </p>
          </li>
        </ul>
      </div>
      <!-- 新分配客户end -->

      <!-- 邮寄信息 -->
      <div class="package">
        <ul class="package-list clearfix">
          <li class="package-item fl">
            <p class="pac-title">快递已寄出</p>
            <div class="info">
              <p>
                客户：
                <span>赵丽 女</span>
              </p>
              <p>
                手机：
                <span>1111111111</span>
              </p>
            </div>
            <div class="comment">
              <p>顺丰快递:</p>
              <p class="comment-list">
                13545465435456465415
                <i></i>
              </p>
            </div>
            <p class="pac-bottom clearfix">
              <span class="date">2019</span>
              <span class="detail fr">
                查看详情
                <i class="sanjiao"></i>
              </span>
            </p>
          </li>
          <li class="package-item fl">
            <p class="pac-title">快递已寄出</p>
            <div class="info">
              <p>
                客户：
                <span>赵丽 女</span>
              </p>
              <p>
                手机：
                <span>1111111111</span>
              </p>
            </div>
            <div class="comment">
              <p>顺丰快递:</p>
              <p class="comment-list">
                13545465435456465415
                <i></i>
              </p>
            </div>
            <p class="pac-bottom clearfix">
              <span class="date">2019</span>
              <span class="detail fr">
                查看详情
                <i class="sanjiao"></i>
              </span>
            </p>
          </li>
        </ul>
      </div>
      <!-- 邮寄信息end -->

      <!-- 财务信息 -->
      <div class="finance">
        <ul class="finance-list clearfix">
          <li class="finance-item fl">
            <p class="success-title">财务审核通过</p>
            <div class="info">
              <p>
                客户：
                <span>赵丽 女</span>
              </p>
              <p>
                手机：
                <span class="phone">1111111111</span>
                课程：
                <span>护理管理师</span>
              </p>
            </div>
            <div class="comment">
              <p>缴费金额：</p>
              <p class="comment-list">20000（全款）</p>
            </div>
            <p class="fin-bottom clearfix">
              <span class="date">2019</span>
              <span class="detail fr">
                查看详情
                <i class="sanjiao"></i>
              </span>
            </p>
          </li>
          <li class="finance-item fl">
            <p class="fail-title">财务审核失败</p>
            <div class="info">
              <p>
                客户：
                <span>赵丽 女</span>
              </p>
              <p>
                手机：
                <span class="phone">1111111111</span>
                课程：
                <span>护理管理师</span>
              </p>
            </div>
            <div class="comment">
              <p>失败原因：</p>
              <p class="comment-list">20000（全款）</p>
            </div>
            <p class="fin-bottom clearfix">
              <span class="date">2019</span>
              <span class="detail fr">
                查看详情
                <i class="sanjiao"></i>
              </span>
            </p>
          </li>
        </ul>
      </div>
      <!-- 财务信息end -->

      <!-- 分期提醒 -->
      <div class="fenqi">
        <ul class="fenqi-list clearfix">
          <li class="fenqi-item fl">
            <p class="fenqi-title">分期记录提醒</p>
            <div class="info">
              <p>
                客户：
                <span>赵丽 女</span>
              </p>
              <p>
                手机：
                <span class="phone">1111111111</span>
                课程：
                <span>护理管理师</span>
              </p>
            </div>
            <div class="comment">
              <p>分期记录：</p>
              <p class="comment-list">意向培训课程：意向培训课程：意向培训课程：意向培训课程：</p>
            </div>
            <p class="fenqi-bottom clearfix">
              <span class="date">2019</span>
              <span class="detail fr">
                查看详情
                <i class="sanjiao"></i>
              </span>
            </p>
          </li>
          <li class="fenqi-item fl">
            <p class="fenqi-title">分期记录提醒</p>
            <div class="info">
              <p>
                客户：
                <span>赵丽 女</span>
              </p>
              <p>
                手机：
                <span class="phone">1111111111</span>
                课程：
                <span>护理管理师</span>
              </p>
            </div>
            <div class="comment">
              <p>分期记录：</p>
              <p class="comment-list">意向培训课程：意向培训课程：意向培训课程：意向培训课程：</p>
            </div>
            <p class="fenqi-bottom clearfix">
              <span class="date">2019</span>
              <span class="detail fr">
                查看详情
                <i class="sanjiao"></i>
              </span>
            </p>
          </li>
        </ul>
      </div>
      <!-- 分期提醒end -->
    </div>

    <div class="right fl">
      <!-- 部门成员业绩 -->
      <div class="count-info">
        <div class="info-title">部门业绩排名</div>
        <div class="btn clearfix">
          <p @click="counton=1" :class="{'active':counton==1}">本周</p>
          <p @click="counton=2" :class="{'active':counton==2}">本月</p>
          <p @click="counton=3" :class="{'active':counton==3}">一年</p>
        </div>
        <div class="rank">
          <ul class="rank-list" v-show="counton==1">
            <li class="rank-item clearfix" v-for="(item,index) in weeklist" :key="index">
              <p class="fl">
                {{item.name}}
                <span class="f">{{item.now_amount}}万</span>
              </p>
              <p class="fr percent">
                {{item.radio}}%
                <span class="r">{{item.amount}}万</span>
              </p>
            </li>
          </ul>
          <ul class="rank-list" v-show="counton==2">
            <li class="rank-item clearfix" v-for="(item,index) in monthlist" :key="index">
              <p class="fl">
                {{item.name}}
                <span class="f">{{item.now_amount}}万</span>
              </p>
              <p class="fr percent">
                {{item.radio}}%
                <span class="r">{{item.amount}}万</span>
              </p>
            </li>
          </ul>
          <ul class="rank-list" v-show="counton==3">
            <li class="rank-item clearfix" v-for="(item,index) in yearlist" :key="index">
              <p class="fl">
                {{item.name}}
                <span class="f">{{item.now_amount}}万</span>
              </p>
              <p class="fr percent">
                {{item.radio}}%
                <span class="r">{{item.amount}}万</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <!-- 部门成员业绩end -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      percentage: 20,
      customColor: "#7752F9",
      filteron:0,
      counton:1,
      personCounton:1,
      departCounton:1,
      person: {
        week: {
          plan_amount: "3000.00",
          now_amount: 300,
          radio: 10
        },
        month: {
          plan_amount: "14000.00",
          now_amount: 3256,
          radio: 2.14
        },
        year: {
          plan_amount: "90000.00",
          now_amount: 134000,
          radio: 0.33
        }
      },
      depart:{
        week: {
          plan_amount: "3000.00",
          now_amount: 600,
          radio: 10
        },
        month: {
          plan_amount: "14000.00",
          now_amount: 1000,
          radio: 2.14
        },
        year: {
          plan_amount: "90000.00",
          now_amount: 200000,
          radio: 0.33
        }
      },
       weeklist: [
        {
          uid: 1,
          name: "张三",
          amount: "90000.00",
          now_amount: 300,
          radio: 0.33
        },
        {
          uid: 1,
          name: "张三",
          amount: "90000.00",
          now_amount: 300,
          radio: 0.33
        },
        {
          uid: 1,
          name: "张三",
          amount: "90000.00",
          now_amount: 300,
          radio: 0.33
        },
        {
          uid: 1,
          name: "张三",
          amount: "90000.00",
          now_amount: 300,
          radio: 0.33
        },
        {
          uid: 1,
          name: "张三",
          amount: "90000.00",
          now_amount: 300,
          radio: 0.33
        }
      ],
      monthlist: [
        {
          uid: 1,
          name: "李四",
          amount: "90000.00",
          now_amount: 300,
          radio: 0.33
        },
        {
          uid: 1,
          name: "李四",
          amount: "90000.00",
          now_amount: 300,
          radio: 0.33
        },
        {
          uid: 1,
          name: "李四",
          amount: "90000.00",
          now_amount: 300,
          radio: 0.33
        },
        {
          uid: 1,
          name: "李四",
          amount: "90000.00",
          now_amount: 300,
          radio: 0.33
        },
        {
          uid: 1,
          name: "李四",
          amount: "90000.00",
          now_amount: 300,
          radio: 0.33
        }
      ],
      yearlist: [
        {
          uid: 1,
          name: "王五",
          amount: "90000.00",
          now_amount: 300,
          radio: 0.33
        },
        {
          uid: 1,
          name: "王五",
          amount: "90000.00",
          now_amount: 300,
          radio: 0.33
        },
        {
          uid: 1,
          name: "王五",
          amount: "90000.00",
          now_amount: 300,
          radio: 0.33
        },
        {
          uid: 1,
          name: "王五",
          amount: "90000.00",
          now_amount: 300,
          radio: 0.33
        },
        {
          uid: 1,
          name: "王五",
          amount: "90000.00",
          now_amount: 300,
          radio: 0.33
        }
      ],
    };
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

#Home {
  width: 100%;
}

.title {
  margin: 70px 0 50px;
  color: rgba(68, 68, 82, 1);
  font-size: 28px;
}

.performance li {
  width: 393px;
  height: 204px;
  padding: 40px;
  shadow();
  margin: 0 40px 40px 0;
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
}

.btn, .person-btn, .depart-btn {
  margin: 20px 0 30px;
}

.btn p, .person-btn p, .depart-btn p {
  padding: 8px 22px;
  color: rgba(114, 109, 134, 1);
  font-size: 12px;
  background: #FAFAFE;
  float: left;
  margin-right: 20px;
  border-radius: 6px;
  cursor:pointer;
}

.btn .active, .person-btn .active, .depart-btn .active {
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

.done {
  color: rgba(119, 82, 249, 1);
}

.target {
  color: #9494AF;
}

.filter-item {
  display:inline-block;
  background-color: rgba(250, 250, 254, 1);
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

.distribute-item, .package-item, .fenqi-item, .finance-item {
  width: 430px;
  height: 240px;
  padding: 36px 30px 20px;
  margin: 0 40px 40px 0;
  shadow();
}

.dis-title, .pac-title, .fenqi-title, .success-title, .fail-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
}

.dis-title {
  color: rgba(50, 169, 255, 1);
}

.pac-title, .success-title {
  color: $pubcolor;
}

.fail-title, .fenqi-title {
  color: #FF5151;
}

.info p {
  color: #444452;
  font-size: 14px;
  margin-bottom: 16px;
}

.info span {
  color: #444452;
  font-weight: bold;
}

.comment {
  background: #FAFAFE;
  padding: 20px;
  color: #646476;
  font-size: 14px;
  line-height: 30px;
  margin-bottom: 20px;
}

.comment-list {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #444452;
  font-weight: bold;
}

.dis-bottom, .fin-bottom, .pac-bottom, .fenqi-bottom {
  width: 100%;
  color: #9494AF;
  font-size: 14px;
}

.phone {
  display: inline-block;
  width: 130px;
  margin-right: 50px;
}

.sanjiao {
  display: inline-block;
  border-style: solid;
  border-color: transparent transparent transparent #9494AF;
  border-width: 5px 0 5px 7px;
}

.right {
  margin-left: 20px;
}

.rank-list {
  background: #fff;
}

.rank-item {
  width: 450px;
  background-color: rgba(250, 250, 254, 1);
  padding: 18px 20px;
  margin-bottom: 14px;
  border-radius: 6px;
  color: rgba(68, 68, 82, 1);
}

.percent {
  color: #726D86;
}

.rank-item p:nth-child(1) {
  font-weight: bold;
}

.rank-item p:nth-child(1) span {
  margin-left: 30px;
}

.rank-item p:nth-child(2) span {
  margin-left: 20px;
  color: #444452;
  font-weight: 70px;
}
</style>