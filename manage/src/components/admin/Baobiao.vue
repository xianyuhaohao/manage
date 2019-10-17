<template>
  <div id="baobiao" class="clearfix">
    <div class="title">财务报表</div>
    <div id="header">
      <div class="block">
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </div>
    </div>
    <div class="head clearfix">
      <div class="filter-item">
        <span class="state">选择部门</span>
        <span class="departon">国际部</span>
        <span class>国内部</span>
        <span class>市场部</span>
      </div>
      <div class="filter-item">
        <span class="state">选择老师</span>
        <span
          v-for="(item,index) in staffList"
          :key="index"
          @click="staff(index,item.user_nickname)"
          :class="{'staffon':staffidx==index}"
        >{{item.user_nickname}}</span>
      </div>
    </div>

    <div id="table">
      <el-table
        :data="tableList.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        style="width: 100%"
      >
        <el-table-column width="40"></el-table-column>
        <el-table-column prop="name" label="客户姓名" width="130"></el-table-column>
        <el-table-column prop="phone" label="联系电话" width="160"></el-table-column>
        <el-table-column prop="proj" label="缴费项目"></el-table-column>
        <el-table-column prop="money" label="缴费金额" width="130"></el-table-column>
        <el-table-column prop="methods" label="缴费方式" width="130"></el-table-column>
        <el-table-column prop="date" label="缴费日期"></el-table-column>
        <el-table-column prop="response" label="负责老师" width="130"></el-table-column>
        <el-table-column prop="cooperate" label="合作老师" width="130"></el-table-column>
        <el-table-column prop="percent" label="提成比例" width="130"></el-table-column>
        <el-table-column prop="outstand" label="计入业绩金额"></el-table-column>
      </el-table>
      <div class="bottom clearfix">
        <p class="excel fl">
          <img src="../../assets/image/excel.png" alt /> 导出excel
        </p>

        <!-- 分页 -->
        <div class="page-wrap fr">
          <div class="block">
            <el-pagination
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage"
              :page-size="pagesize"
              layout="prev,next,slot"
              :total="tableList.length"
              prev-text="上一页"
              next-text="下一页"
            >
              <span
                style="margin-left: 10px"
                class="page"
              >第{{currentPage}}页/共{{Math.ceil(tableList.length/pagesize)}}页</span>
            </el-pagination>
          </div>
        </div>
        <!-- 分页end -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      staffidx: -1,
      currentPage: 1,
      pagesize: 6,
      value1: "",
      tableData: [
        {
          name: "张芳",
          phone: "13415646521",
          proj: "健康管理师",
          money: "1324",
          methods: "支付宝",
          date: "2019-3-12 12:22",
          response: "张瑶",
          cooperate: "贺宇",
          percent: "70%",
          outstand: "4000"
        },
        {
          name: "王小虎",
          phone: "13415646521",
          proj: "健康管理师",
          money: "1324",
          methods: "支付宝",
          date: "2019-3-12 12:22",
          response: "韩国强",
          cooperate: "贺宇",
          percent: "70%",
          outstand: "4000"
        },
        {
          name: "韩梅梅",
          phone: "13415646521",
          proj: "健康管理师",
          money: "1324",
          methods: "支付宝",
          date: "2019-8-12 12:22",
          response: "韩国强",
          cooperate: "贺宇",
          percent: "70%",
          outstand: "4000"
        },
        {
          name: "李蕾",
          phone: "13415646521",
          proj: "健康管理师",
          money: "1324",
          methods: "支付宝",
          date: "2019-6-12 12:22",
          response: "韩国强",
          cooperate: "贺宇",
          percent: "70%",
          outstand: "4000"
        },
        {
          name: "张三",
          phone: "13415646521",
          proj: "健康管理师",
          money: "1324",
          methods: "支付宝",
          date: "2019-1-12 12:22",
          response: "胡晶晶",
          cooperate: "贺宇",
          percent: "70%",
          outstand: "4000"
        },
        {
          name: "李四",
          phone: "13415646521",
          proj: "健康管理师",
          money: "1324",
          methods: "支付宝",
          date: "2019-7-12 12:22",
          response: "胡晶晶",
          cooperate: "贺宇",
          percent: "70%",
          outstand: "4000"
        },
        {
          name: "王五",
          phone: "13415646521",
          proj: "健康管理师",
          money: "1324",
          methods: "支付宝",
          date: "2019-7-12 12:22",
          response: "贺宇",
          cooperate: "贺宇",
          percent: "70%",
          outstand: "4000"
        },
        {
          name: "赵六",
          phone: "13415646521",
          proj: "健康管理师",
          money: "1324",
          methods: "支付宝",
          date: "2019-4-12 12:22",
          response: "贺宇",
          cooperate: "贺宇",
          percent: "70%",
          outstand: "4000"
        },
        {
          name: "张芳",
          phone: "13415646521",
          proj: "健康管理师",
          money: "1324",
          methods: "支付宝",
          date: "2019-2-12 12:22",
          response: "贺宇",
          cooperate: "贺宇",
          percent: "70%",
          outstand: "4000"
        },
        {
          name: "张芳",
          phone: "13415646521",
          proj: "健康管理师",
          money: "1324",
          methods: "支付宝",
          date: "2019-2-12 12:22",
          response: "王春荣",
          cooperate: "贺宇",
          percent: "70%",
          outstand: "4000"
        },
        {
          name: "张芳",
          phone: "13415646521",
          proj: "健康管理师",
          money: "1324",
          methods: "支付宝",
          date: "2019-2-12 12:22",
          response: "王春荣",
          cooperate: "贺宇",
          percent: "70%",
          outstand: "4000"
        },
        {
          name: "张芳",
          phone: "13415646521",
          proj: "健康管理师",
          money: "1324",
          methods: "支付宝",
          date: "2019-8-12 12:22",
          response: "王春荣",
          cooperate: "贺宇",
          percent: "70%",
          outstand: "4000"
        },
        {
          name: "张芳",
          phone: "13415646521",
          proj: "健康管理师",
          money: "1324",
          methods: "支付宝",
          date: "2019-8-12 12:22",
          response: "刘磊",
          cooperate: "贺宇",
          percent: "70%",
          outstand: "4000"
        }
      ],
      tableList: [
        {
          name: "张芳",
          phone: "13415646521",
          proj: "健康管理师",
          money: "1324",
          methods: "支付宝",
          date: "2019-3-12 12:22",
          response: "张瑶",
          cooperate: "贺宇",
          percent: "70%",
          outstand: "4000"
        },
        {
          name: "王小虎",
          phone: "13415646521",
          proj: "健康管理师",
          money: "1324",
          methods: "支付宝",
          date: "2019-3-12 12:22",
          response: "张瑶",
          cooperate: "贺宇",
          percent: "70%",
          outstand: "4000"
        },
        {
          name: "韩梅梅",
          phone: "13415646521",
          proj: "健康管理师",
          money: "1324",
          methods: "支付宝",
          date: "2019-8-12 12:22",
          response: "张瑶",
          cooperate: "贺宇",
          percent: "70%",
          outstand: "4000"
        },
        {
          name: "李蕾",
          phone: "13415646521",
          proj: "健康管理师",
          money: "1324",
          methods: "支付宝",
          date: "2019-6-12 12:22",
          response: "张瑶",
          cooperate: "贺宇",
          percent: "70%",
          outstand: "4000"
        },
        {
          name: "张三",
          phone: "13415646521",
          proj: "健康管理师",
          money: "1324",
          methods: "支付宝",
          date: "2019-1-12 12:22",
          response: "张瑶",
          cooperate: "贺宇",
          percent: "70%",
          outstand: "4000"
        },
        {
          name: "李四",
          phone: "13415646521",
          proj: "健康管理师",
          money: "1324",
          methods: "支付宝",
          date: "2019-7-12 12:22",
          response: "张瑶",
          cooperate: "贺宇",
          percent: "70%",
          outstand: "4000"
        },
        {
          name: "王五",
          phone: "13415646521",
          proj: "健康管理师",
          money: "1324",
          methods: "支付宝",
          date: "2019-7-12 12:22",
          response: "张瑶",
          cooperate: "贺宇",
          percent: "70%",
          outstand: "4000"
        },
        {
          name: "赵六",
          phone: "13415646521",
          proj: "健康管理师",
          money: "1324",
          methods: "支付宝",
          date: "2019-4-12 12:22",
          response: "张瑶",
          cooperate: "贺宇",
          percent: "70%",
          outstand: "4000"
        },
        {
          name: "张芳",
          phone: "13415646521",
          proj: "健康管理师",
          money: "1324",
          methods: "支付宝",
          date: "2019-2-12 12:22",
          response: "张瑶",
          cooperate: "贺宇",
          percent: "70%",
          outstand: "4000"
        },
        {
          name: "张芳",
          phone: "13415646521",
          proj: "健康管理师",
          money: "1324",
          methods: "支付宝",
          date: "2019-2-12 12:22",
          response: "张瑶",
          cooperate: "贺宇",
          percent: "70%",
          outstand: "4000"
        },
        {
          name: "张芳",
          phone: "13415646521",
          proj: "健康管理师",
          money: "1324",
          methods: "支付宝",
          date: "2019-2-12 12:22",
          response: "张瑶",
          cooperate: "贺宇",
          percent: "70%",
          outstand: "4000"
        },
        {
          name: "张芳",
          phone: "13415646521",
          proj: "健康管理师",
          money: "1324",
          methods: "支付宝",
          date: "2019-8-12 12:22",
          response: "张瑶",
          cooperate: "贺宇",
          percent: "70%",
          outstand: "4000"
        },
        {
          name: "张芳",
          phone: "13415646521",
          proj: "健康管理师",
          money: "1324",
          methods: "支付宝",
          date: "2019-8-12 12:22",
          response: "张瑶",
          cooperate: "贺宇",
          percent: "70%",
          outstand: "4000"
        }
      ],
      tableFilter: [],
      staffList: [
        {
          user_nickname: "韩国强",
          user_login: "11111",
          user_type: "国内部",
          user_status: 1
        },
        {
          user_nickname: "贺宇",
          user_login: "123456",
          user_type: "国内部",
          user_status: 1
        },
        {
          user_nickname: "胡晶晶",
          user_login: "123456",
          user_type: "国内部",
          user_status: 1
        },
        {
          user_nickname: "王春荣",
          user_login: "123456",
          user_type: "国际部",
          user_status: 1
        },
        {
          user_nickname: "陈亚雪",
          user_login: "123456",
          user_type: "国际部",
          user_status: 1
        },
        {
          user_nickname: "刘磊",
          user_login: "123456",
          user_type: "市场部",
          user_status: 1
        }
      ],
      filterList: []
    };
  },
  methods: {
    handleSizeChange(val) {
      this.pagesize = val;
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.fpidx = -1;
      console.log(`当前页: ${val}`);
    },
    // 根据负责老师筛选
    staff(index, itemName) {
      this.staffidx = index;
      this.tableFilter = this.tableData.filter(item => {
        return item.response.indexOf(itemName) != -1;
      });
      this.tableList = this.tableFilter;
    }
  },
  watch: {
    // 根据时间筛选
    value1: function(newValue) {
      console.log(newValue);

      if (newValue != null) {
        var startDate = new Date(date(newValue[0])).getTime();    //要转成时间戳
        var endDate = new Date(date(newValue[1])).getTime();

        var arr = this.tableList.filter(item => {
          let on=new Date(item.date).getTime()   
          return on >= startDate && on <= endDate;
        });
        this.tableList = arr;
      } else {
        
        if (this.tableFilter.length == 0) {
          this.tableList = this.tableData;
        } else {
          this.tableList = this.tableFilter;
        }
      }

      // 转换日期
      function date(params) {
        let d =
          params.getFullYear() +
          "-" +
          (params.getMonth() + 1) +
          "-" +
          params.getDate() +
          " " +
          params.getHours() +
          ":" +
          params.getMinutes() +
          ":" +
          params.getSeconds();
        return d;
      }
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

#baobiao {
  width:1650px;
  padding: 0 40px 40px;
  min-height: 960px;
  background: #FAFAFE;
  margin-left: -40px;
  min-width: 1620px;
}

#table >>> .el-table__header tr {
  color: #444452;
}
#table >>> .el-date-editor .el-range__icon, .el-input__icon .el-range__icon .el-icon-date
  color: $pubcolor;
#table >>> .el-table__body .el-table_45_column_495 {
  color: $pubcolor;
}

#header >>> .el-date-editor, .el-range-editor, .el-input__inner, .el-date-editor--daterange {
  shadow();
  border-color: #fff;
}

.title {
  margin: 70px 0 50px;
  color: rgba(68, 68, 82, 1);
  display: inline-block;
  font-size: 28px;
}

#header {
  padding-top: 60px;
  margin: 0 0 30px 40px;
  display: inline-block;
}

#table {
  shadow();
  max-width: 1600px;
}

.bottom {
  height: 60px;
  line-height: 60px;
  padding: 0 50px;
  color: #646477;
  font-size: 12px;
}

.excel {
  cursor: pointer;
}

.bottom img {
  vertical-align: middle;
}

.page-wrap {
  padding-top: 15px;
}

.page {
  color: #9494AF;
  font-size: 14px;
  font-weight: normal;
}

.set-btn {
  width: 114px;
  height: 48px;
  background-color: $pubcolor;
  border-radius: 9px;
  font-size: 14px;
  color: #fff;
  float: right;
}

.filter-item {
  float: left;
  background-color: rgba(255, 255, 255, 1);
  padding: 25px 20px;
  font-size: 14px;
  color: #444452;
  border-radius: 10px;
  margin: 0 40px 40px 0;
}

.filter-item span {
  padding: 8px 14px;
  margin-right: 26px;
  cursor: pointer;
}

.departon, .staffon {
  background-color: $pubcolor;
  color: #fff;
  border-radius: 6px;
}

.state {
  color: #9494AF;
}
</style>