<template>
  <div id="Finance" class="clearfix">
    <div class="title">财务审核</div>
    <div class="left fl">
      <!-- 审核列表 -->
      <div class="check">
        <ul class="check-list">
          <li class="check-item" v-for="item in shenheList" :key="item.id">
            <p class="info-top clearfix">
              <span class="name">{{item.name}}</span>
              <span class="full fr" :class="[item.type==1?'purple':'red']">{{item.type==1 ?'发票审核':''}}{{item.type==2 ?'全款':''}}{{item.type==3 ?'分期付款':''}}</span>
            </p>
            <p class="info-botttom clearfix">
              负责人：{{item.charge_person}}
              <span class="date">{{item.create_time}}</span>
              <span class="detail fr" @click="detail(item.id)">
                查看详情
                <i class="sanjiao"></i>
              </span>
            </p>
          </li>
        </ul>
      </div>
      <!-- 审核列表end -->
    </div>
    <div class="right fl">
      <div class="menu">
        <!-- 功能菜单操作 -->
        <ul class="meun-list">
          <li class="menu-item">
            <div class="circle" @click="kaohe">
              <img src="../../assets/image/kaohe.png" alt />
            </div>
            <p>考核进度</p>
          </li>
          <li class="menu-item">
            <div class="circle" @click="baobiao">
              <img src="../../assets/image/caiwu.png" alt />
            </div>
            <p>财务报表</p>
          </li>
          <li class="menu-item">
            <div class="circle" @click="fenqi">
              <img src="../../assets/image/fenqi.png" alt />
            </div>
            <p>分期记录</p>
          </li>
          <li class="menu-item">
            <div class="circle" @click="fapiao">
              <img src="../../assets/image/fapiao.png" alt />
            </div>
            <p>发票记录</p>
          </li>
        </ul>
        <!-- 功能菜单操作end -->
      </div>
      <!-- 考核进度 -->

      <div class="count-info">
        <div class="info-title">考核进度</div>
        <div class="btn clearfix">
          <p class="month" @click="counton=1" :class="{'active':counton==1}">本周</p>
          <p class="year" @click="counton=2" :class="{'active':counton==2}">本月</p>
          <p class="week" @click="counton=3" :class="{'active':counton==3}">一年</p>
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


      <!-- <div class="count-info">
        <div class="info-title">考核进度</div>
        <div class="btn clearfix">
          <p class="week active">本周</p>
          <p class="month">本月</p>
          <p class="year">一年</p>
        </div>
        <div class="rank">
          <ul class="rank-list">
            <li class="rank-item clearfix">
              <p class="fl">
                张三
                <span class="f">15万</span>
              </p>
              <p class="fr percent">
                23%
                <span class="r">36万</span>
              </p>
            </li>
            <li class="rank-item clearfix">
              <p class="fl">
                张三
                <span class="f">15万</span>
              </p>
              <p class="fr percent">
                23%
                <span class="r">36万</span>
              </p>
            </li>
            <li class="rank-item clearfix">
              <p class="fl">
                张三
                <span class="f">15万</span>
              </p>
              <p class="fr percent">
                23%
                <span class="r">36万</span>
              </p>
            </li>
            <li class="rank-item clearfix">
              <p class="fl">
                张三
                <span class="f">15万</span>
              </p>
              <p class="fr percent">
                23%
                <span class="r">36万</span>
              </p>
            </li>
          </ul>
        </div>
      </div> -->
      <!-- 考核进度end -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counton:1,
      shenheList: [
        {
          id: 1,
          order_id: 11,
          type: 1,
          create_time: "1970-01-01 08:00",
          uid: 4,
          charge_person: "张三",
          is_stages: 1,
          name: "闫冠宇"
        },
        {
          id: 2,
          order_id: 11,
          type: 2,
          create_time: "1970-01-01 08:00",
          uid: 4,
          charge_person: "张三",
          is_stages: 1,
          name: "闫冠宇"
        },
        {
          id: 3,
          order_id: 11,
          type: 2,
          create_time: "1970-01-01 08:00",
          uid: 4,
          charge_person: "张三",
          is_stages: 1,
          name: "闫冠宇"
        },
        {
          id: 4,
          order_id: 11,
          type: 3,
          create_time: "1970-01-01 08:00",
          uid: 4,
          charge_person: "张三",
          is_stages: 1,
          name: "闫冠宇"
        },
      ],
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
  methods: {
    kaohe() {
      this.$router.push("/kaohe");
    },
    baobiao() {
      this.$router.push("/baobiao");
    },
    fenqi() {
      this.$router.push("/fenqi");
    },
    fapiao() {
      this.$router.push("/fapiao");
    },
    detail(id) {
      // 带id跳转订单详情页 根据id获取订单详细信息
      this.$router.push({
        name:'ShoukuanFapiao',
        params:{
          id
        }
      })
    }
  }
};
</script>

<style scoped lang='stylus'>
$pubcolor = #8665FF;

shadow() {
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 8px 10px 0px rgba(86, 64, 247, 0.06);
}

.title {
  margin: 70px 0 50px;
  color: rgba(68, 68, 82, 1);
  font-size: 28px;
}

.left {
  margin-right: 50px;
}

.check-item {
  width: 960px;
  padding: 26px 30px;
  margin-bottom: 20px;
  shadow();
}

.info-top {
  margin-bottom: 14px;
  font-weight: bold;
}
.date 
  margin-left :30px;
.name {
  color: #444452;
  font-size: 18px;
}

.red {
  color: #FF5151;
  font-size: 16px;
}

.purple {
  color: $pubcolor;
  font-size: 16px;
}

.info-botttom span, .info-botttom {
  color: #9494AF;
  font-size: 14px;
}
.detail 
  cursor:pointer;
.sanjiao {
  display: inline-block;
  border-style: solid;
  border-color: transparent transparent transparent #9494AF;
  border-width: 5px 0 5px 7px;
}

.meun-list {
  display: flex;
  flex-wrap: wrap;
  width: 552px;
  margin-bottom: 30px;
  shadow();
}

.meun-list li {
  font-size: 12px;
  color: #444452;
  text-align: center;
  vertical-align: middle;
  width: 96px;
  padding: 30px 20px 26px;
  border: 1px solid #FAFAFE;
}

.circle {
  display: inline-block;
  width: 56px;
  height: 56px;
  margin-bottom: 10px;
  border-radius: 50%;
  background-color: rgba(242, 242, 255, 1);
  position :relative;
}
.circle img {
  position: absolute;
  top: 12px;
  left: 12px;
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
  cursor:pointer;
}

.btn .active {
  background: $pubcolor;
  color: #fff;
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