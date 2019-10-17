<template>
  <div id="Home" class="clearfix">
    <div class="title">首页</div>
    <div class="left fl">
      <!-- 数量趋势 -->
      <ul class="count clearfix">
        <li class="fl">
          <p>
            <span class="stat">{{trendlist[0].yesinc}}</span>
            <span :class="[trendlist[0].yesstate==2?'decline':'trend']">
              {{trendlist[0].yesratio}}%
              <i :class="[trendlist[0].yesstate==2?'down':'up']"></i>
            </span>
          </p>
          <p class="describe">
            <i></i>昨日新增量
          </p>
        </li>
        <li class="fl">
          <p>
            <span class="stat">{{trendlist[0].yesdonenum}}</span>
            <span  :class="[trendlist[0].yesdonenumstate==2?'decline':'trend']">
              {{trendlist[0].yesdonenumratio}}%
              <i :class="[trendlist[0].yesdonenumstate==2?'down':'up']"></i>
            </span>
          </p>
          <p class="describe">
            <i></i>昨日成交量
          </p>
        </li>
        <li class="fl">
          <p>
            <span class="stat">{{trendlist[0].yesdoneprice}}</span>
            <span :class="[trendlist[0].yesdonepricestate==2?'decline':'trend']">
              {{trendlist[0].yesdonepriceratio}}%
              <i :class="[trendlist[0].yesdonepricestate==2?'down':'up']"></i>
            </span>
          </p>
          <p class="describe">
            <i></i>昨日成交金额(万)
          </p>
        </li>
        <li class="fl">
          <p>
            <span class="stat">{{trendlist[0].weekinc}}</span>
            <span :class="[trendlist[0].weekstate==2?'decline':'trend']">
              {{trendlist[0].weekratio}}%
              <i :class="[trendlist[0].weekstate==2?'down':'up']"></i>
            </span>
          </p>
          <p class="describe">
            <i></i>本周成交金额
          </p>
        </li>
        <li class="fl">
          <p>
            <span class="stat">{{trendlist[0].sumdone}}</span>
          </p>
          <p class="describe">
            <i></i>总成交量
          </p>
        </li>
      </ul>
      <!-- 数量趋势end -->

      <!-- 曲线图 -->
      <div id="myChart"></div>
      <!-- 曲线图end -->


      <!-- 新客户列表 -->
      <ul class="new-client" v-on:click="jump">
        <li
          v-for="(item,index) in kehulist.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          :key="index"
        >
          <p>
            <span class="new">新客户</span>
            <span class="name">{{item.name}}</span>
            <span class="phone">{{item.phone}}</span>
            <span class="course">{{item.int_course}}</span>
            <span class="date">{{item.date}}</span>
            <span class="operation" @click.stop="fenpei(index)">
              <img src="../../assets/image/operation.png" alt />
            </span>
          </p>
          <div class="filter-item" v-show="index==fpidx">
            <span class="state">分配给：</span>
            <span
              v-for="subitem in yuangonglist"
              :key="subitem.id"
              @click.stop="item.teacher=subitem.id"
              :class="{'filteron':item.teacher==subitem.id}"
            >{{subitem.user_nickname}}</span>
          </div>
        </li>
      </ul>
      <!-- 分页 -->
      <div class="page-wrap clearfix">
        <div class="block fr">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="pagesize"
            layout="prev,next,slot"
            :total="kehulist.length"
            prev-text="上一页"
            next-text="下一页"
          >
            <span
              style="margin-left: 10px"
              class="page"
            >第{{currentPage}}页/共{{Math.ceil(kehulist.length/pagesize)}}页</span>
          </el-pagination>
        </div>
      </div>
      <!-- 分页end -->
      <!-- 新客户列表end -->
    </div>
    <div class="right fl">
      <!-- 功能菜单操作 -->
      <div class="menu">
        <ul class="meun-list">
          <li class="menu-item">
            <div class="circle" @click="course">
              <img src="../../assets/image/kecheng.png" alt />
            </div>
            <p>课程设置</p>
          </li>
          <li class="menu-item">
            <div class="circle" @click="baobiao">
              <img src="../../assets/image/caiwu.png" alt />
            </div>
            <p>财务报表</p>
          </li>
          <li class="menu-item">
            <div class="circle" @click="kaohe">
              <img src="../../assets/image/kaohe.png" alt />
            </div>
            <p>考核进度</p>
          </li>
          <li class="menu-item">
            <div class="circle" @click="fapiao">
              <img src="../../assets/image/fapiao.png" alt />
            </div>
            <p>发票记录</p>
          </li>
          <li class="menu-item">
            <div class="circle" @click="fenqi">
              <img src="../../assets/image/fenqi.png" alt />
            </div>
            <p>分期记录</p>
          </li>
          <!-- 可扩展 -->
          <li class="menu-item"></li>
          <li class="menu-item"></li>
        </ul>
      </div>
      <!-- 功能菜单操作end -->

      <!-- 个人业绩统计 -->
      <div class="count-info">
        <div class="info-title">个人业绩统计</div>
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
      <!-- 个人业绩统计end -->
    </div>
  </div>
</template>

<script>
let echarts = require("echarts/lib/echarts");
// 引入柱状图组件
require("echarts/lib/chart/bar");
// 引入提示框和title组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
export default {
  data() {
    return {
      fpidx: -1,
      staffidx: 0,
      currentPage: 1, //初始页
      pagesize: 3,
      kehulist: [
        {
          name: "王芳",
          phone: "1345649855455",
          int_course: "小儿推拿小儿推拿小儿推拿小儿推拿小",
          date: "2019-8-12",
          teacher: 0
        },
        {
          name: "王芳芳",
          phone: "1345649855455",
          int_course:
            "心理咨询心理咨询心理咨询心理咨询心理咨询心理咨询心理咨询心理咨询",
          date: "2019-8-12",
          teacher: 0
        },
        {
          name: "王芳",
          phone: "1345649855455",
          int_course:
            "老年护理老年护理老年护理老年护理老年护理老年护理老年护理老年护理老年护理",
          date: "2019-8-12",
          teacher: 0
        },
        {
          name: "王芳",
          phone: "1345649855455",
          int_course:
            "老年护理老年护理老年护理老年护理老年护理老年护理老年护理老年护理老年护理",
          date: "2019-8-12",
          teacher: 0
        },
        {
          name: "王芳",
          phone: "1345649855455",
          int_course:
            "老年护理老年护理老年护理老年护理老年护理老年护理老年护理老年护理老年护理",
          date: "2019-8-12",
          teacher: 0
        },
        {
          name: "王芳",
          phone: "1345649855455",
          int_course:
            "老年护理老年护理老年护理老年护理老年护理老年护理老年护理老年护理老年护理",
          date: "2019-8-12",
          teacher: 0
        },
        {
          name: "王芳",
          phone: "1345649855455",
          int_course:
            "产后护理产后护理产后护理产后护理产后护理产后护理产后护理产后护理产后护理产后护理",
          date: "2019-8-12",
          teacher: 0
        },
        {
          name: "王芳",
          phone: "1345649855455",
          int_course:
            "产后护理产后护理产后护理产后护理产后护理产后护理产后护理产后护理产后护理产后护理",
          date: "2019-8-12",
          teacher: 0
        }
      ],
      yuangonglist: [
        {
          id: 1,
          user_nickname: "韩国强"
        },
        {
          id: 2,
          user_nickname: "贺宇"
        },
        {
          id: 3,
          user_nickname: "胡晶晶"
        },
        {
          id: 4,
          user_nickname: "王春荣"
        },
        {
          id: 5,
          user_nickname: "陈亚雪"
        },
        {
          id: 6,
          user_nickname: "刘磊"
        },
        {
          id: 7,
          user_nickname: "张瑶"
        },
        {
          id: 8,
          user_nickname: "卢海华"
        },
        {
          id: 9,
          user_nickname: "张艳华"
        },
        {
          id: 10,
          user_nickname: "李秀红"
        }
      ],
      counton: 1,
      // 拿到数据需要转换百分比
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
      trendlist: [
        {
          yesinc: 600,
          yesratio: 60,
          yesstate: 2,
          yesdonenum: 2500,
          yesdonenumratio: 20,
          yesdonenumstate: 1,
          yesdoneprice: 300,
          yesdonepriceratio: 30,
          yesdonepricestate: 2,
          weekinc: 909,
          weekratio: 10,
          weekstate: 1,
          sumdone: 2000
        }
      ]
    };
  },
  methods: {
    fenpei(index) {
      this.fpidx = index;
    },

    handleSizeChange(val) {
      this.pagesize = val;
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.fpidx = -1;
      console.log(`当前页: ${val}`);
    },
    jump() {
      this.$router.push("/client");
    },
    course() {
      this.$router.push("/course");
    },
    baobiao() {
      this.$router.push("/baobiao");
    },
    kaohe() {
      this.$router.push("/kaohe");
    },
    fapiao() {
      this.$router.push("/fapiao");
    },
    fenqi() {
      this.$router.push("/fenqi");
    },
    // 绘制曲线图
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "近期新增/成交趋势图",
          textStyle: {
            fontWeight: "normal",
            color: "#444452",
            fontSize: 14
          },
          x: "center",
          y: "bottom",
          subtext: ""
        },
        legend: {
          x: "right",
          y: "bottom",
          data: ["成交量", "报名量"]
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一 ", "周二", "周三", "周四", "周五", "周六", "周日"],
          axisLine: {
            lineStyle: {
              type: "solid",
              color: "#9494AF" //左边线的颜色
            }
          },
          axisLabel: {
            textStyle: {
              color: "#9494AF" //坐标值得具体的颜色
            }
          }
        },
        yAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              type: "solid",
              color: "#9494AF" //左边线的颜色
            }
          },
          axisLabel: {
            textStyle: {
              color: "#9494AF" //坐标值得具体的颜色
            }
          }
        },
        series: [
          {
            name: "报名量",
            type: "line",
            smooth: true,
            symbol: "circle",
            data: [300, 450, 330, 390, 400, 430, 400],
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "rgb(255,228,228)" },
                  { offset: 0.5, color: "#fff" }
                ])
              }
            }, //填充区域样式
            itemStyle: {
              normal: {
                color: "#FF5151",
                borderColor: "#FF5151",
                lineStyle: {
                  color: "#FF5151"
                }
              }
            }
          },
          {
            name: "成交量",
            type: "line",
            smooth: true,
            symbol: "circle",
            data: [156, 280, 225, 190, 204, 260, 170],

            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0.3, color: "rgb(230,224,254)" },
                  { offset: 1, color: "#fff" }
                ])
              }
            }, //填充区域样式
            itemStyle: {
              normal: {
                color: "#744EF7",
                borderColor: "#744EF7",
                lineStyle: {
                  color: "#744EF7"
                }
              }
            }
          }
        ]
      });
    }
    // 绘制曲线图end
  },
  mounted() {
    this.drawLine();
  }
};
</script>

<style scoped lang="stylus">
$pubcolor = #8665FF;

shadow() {
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 8px 10px 0px rgba(86, 64, 247, 0.06);
}

#Home{
  width:1650px;
}
.title {
  margin: 70px 0 50px;
  color: rgba(68, 68, 82, 1);
  font-size: 28px;
}

.right {
  margin-left: 20px;
}

.count {
  margin-bottom: 30px;
}

.count li {
  padding-top: 30px;
  margin-right: 20px;
  width: 192px;
  height: 100px;
  text-align: center;
  shadow();
}

.count li p {
  margin-bottom: 14px;
}

.stat {
  color: rgba(116, 78, 247, 1);
  font-size: 26px;
}

.trend {
  color: #16B3A3;
}

.decline {
  color: rgba(255, 81, 81, 1);
}

.up {
  display: inline-block;
  width: 9px;
  height: 14px;
  background-image: url('../../assets/image/up.png');
  background-repeat: no-repeat;
}

.down {
  display: inline-block;
  width: 9px;
  height: 14px;
  background-image: url('../../assets/image/down.png');
  background-repeat: no-repeat;
}

.describe {
  color: rgba(148, 148, 175, 1);
  font-size: 14px;
}

#myChart {
  width: 980px;
  height: 293px;
  margin-bottom: 30px;
  padding: 30px;
  shadow();
}

#myChart >>> canvas {
  width: 980px;
  height: 353px;
}

.new-client li {
  width: 960px;
  padding: 12px 40px;
  margin-bottom: 20px;
  color: #444452;
  font-size: 14px;
  shadow();
  cursor: pointer;
  border-radius: 10px;
}

.new-client li p {
  line-height: 30px;
}

.new-client li p span {
  display: inline-block;
  vertical-align: middle;
}

.new {
  color: #5C8CFE;
  font-size: 14px;
  font-weight: bold;
  margin-right: 50px;
}

.name {
  width: 100px;
}

.course {
  width: 378px;
  color: #444452;
  font-weight: bold;
  margin-right: 40px;
}

.date, .phone {
  width: 150px;
  color: #9494AF;
}

.filter-item {
  padding: 20px 0;
  font-size: 14px;
  color: #444452;
  border-top: 1px solid #EFEFF8;
  margin-top: 15px;
}

.filter-item span {
  display: inline-block;
  margin-right: 20px;
  padding: 7px 14px;
  cursor: pointer;
}

.filteron {
  background-color: $pubcolor;
  color: #fff;
  border-radius: 6px;
}

.filter-item .state {
  color: #9494AF;
  margin: 0;
}

.page {
  color: #9494AF;
  font-size: 14px;
  font-weight: normal;
}

.meun-list {
  display: flex;
  flex-wrap: wrap;
  width: 552px;
  height: 282px;
  margin-bottom: 30px;
  shadow();
}

.meun-list li {
  font-size: 12px;
  color: #444452;
  text-align: center;
  vertical-align: middle;
  width: 96px;
  padding: 30px 20px 20px;
  border: 1px solid #FAFAFE;
}

.circle {
  display: inline-block;
  width: 56px;
  height: 56px;
  margin-bottom: 10px;
  border-radius: 50%;
  background-color: rgba(242, 242, 255, 1);
  position: relative;
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
  cursor: pointer;
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