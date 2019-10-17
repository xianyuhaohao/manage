<template>
  <div id="order" class="clearfix">
    <div class="title">订单管理</div>
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
    <div>
      <div class="filter-item">
      <span class="state">选择部门</span>
      <span  @click="all" :class="{'filteron':counton==0}">全部订单</span>
      <span  @click="fenqi" :class="{'filteron':counton==1}">分期中</span>
      <span  @click="ok" :class="{'filteron':counton==2}">已成交</span>
    </div>
    </div>
    
    <p class="total">
      总共
      <span class="num">{{tableList.length}}</span>客户
    </p>

    <div id="table">
      <ul class="client">
        <li class="table-title">
          <p>提交时间</p>
          <p class="course-title">培训课程</p>
          <p>姓名</p>
          <p>手机号</p>
          <p>状态</p>
          <p>负责人</p>
          <p class="remark-title">备注</p>
        </li>
        <li
          v-for="(item,index) in tableList.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          :key="index"
        >
          <p>
            <span>{{item.create_time}}</span>
            <span class="course">{{item.course}}</span>
            <span>{{item.name}}</span>
            <span>{{item.phone}}</span>
            <span :class="[item.status==1?'ok':'fenqi']">{{item.status==1?'已支付':'分期中'}}</span>
            <span>{{item.charge_person}}</span>
            <span class="remark">{{item.remark}}</span>
          </p>
        </li>
      </ul>
      <div class="page-wrap clearfix">
        <div class="block fr">
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
</template>

<script>
export default {
  data() {
    return {
      counton:0,
      value1: "",
      currentPage: 1,
      pagesize: 6,
      tableData:[
        {
          id: 11,
          create_time: "2019-08-18 10:41",
          course_id: "1",
          name: "闫冠宇",
          phone: "13051588225",
          status: 1,
          charge_person: "admin",
          remark: "不分期",
          course: "护士管理师"
        },
        {
          id: 11,
          create_time: "2019-08-18 10:41",
          course_id: "1",
          name: "闫冠宇",
          phone: "13051588225",
          status: 2,
          charge_person: "admin",
          remark: "不分期",
          course: "护士管理师"
        },
        {
          id: 11,
          create_time: "2019-08-18 10:41",
          course_id: "1",
          name: "闫冠宇",
          phone: "13051588225",
          status: 2,
          charge_person: "admin",
          remark: "不分期",
          course: "护士管理师"
        },
        {
          id: 11,
          create_time: "2019-09-18 10:41",
          course_id: "1",
          name: "闫冠宇",
          phone: "13051588225",
          status: 1,
          charge_person: "admin",
          remark: "不分期",
          course: "护士管理师"
        },
        {
          id: 11,
          create_time: "2019-09-18 10:41",
          course_id: "1",
          name: "闫冠宇",
          phone: "13051588225",
          status: 1,
          charge_person: "admin",
          remark: "不分期",
          course: "护士管理师"
        },
        {
          id: 11,
          create_time: "2019-09-18 10:41",
          course_id: "1",
          name: "闫冠宇",
          phone: "13051588225",
          status: 2,
          charge_person: "admin",
          remark: "不分期",
          course: "护士管理师"
        },
        {
          id: 11,
          create_time: "2019-09-18 10:41",
          course_id: "1",
          name: "闫冠宇",
          phone: "13051588225",
          status: 1,
          charge_person: "admin",
          remark: "不分期",
          course: "护士管理师"
        },
        {
          id: 11,
          create_time: "2019-07-18 10:41",
          course_id: "1",
          name: "闫冠宇",
          phone: "13051588225",
          status: 2,
          charge_person: "admin",
          remark: "不分期",
          course: "护士管理师"
        },
        {
          id: 11,
          create_time: "2019-07-18 10:41",
          course_id: "1",
          name: "闫冠宇",
          phone: "13051588225",
          status: 1,
          charge_person: "admin",
          remark: "不分期",
          course: "护士管理师"
        },
        {
          id: 11,
          create_time: "2019-09-18 10:41",
          course_id: "1",
          name: "闫冠宇",
          phone: "13051588225",
          status: 2,
          charge_person: "admin",
          remark: "不分期",
          course: "护士管理师"
        },
      ],
      tableList: []
    };
  },
  methods:{
    handleSizeChange(val) {
      this.pagesize = val;
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.fpidx = -1;
      console.log(`当前页: ${val}`);
    },
    all(){
      this.counton=0
      this.tableList=this.tableData
    },
    fenqi(){
      this.counton=1
      this.tableList=[]
      this.tableData.forEach(item=>{
        
         if(item.status==2){
            this.tableList.push(item)
         }
       })
    },
    ok(){
      this.counton=2
      this.tableList=[]
      this.tableData.forEach(item=>{
         if(item.status==1){
            this.tableList.push(item)
         }
       })
    }
  },
   watch: {
     
    // 根据时间筛选
    value1: function(newValue) {
      if (newValue != null) {
        var startDate = new Date(date(newValue[0])).getTime();
        var endDate = new Date(date(newValue[1])).getTime();
        console.log(startDate,endDate);
        
       let arr= this.tableList.filter(item=>{
         let on=new Date(item.create_time).getTime()         
         return on>=startDate && on<=endDate
       })
        this.tableList = arr;
        
      } else {
        this.tableList = this.tableData;
      }
     

      // 转换日期
      function date(params) {
        let d =
          params.getFullYear() +
          "/" +
          (params.getMonth() + 1) +
          "/" +
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
  mounted() {
    this.tableList=this.tableData
  }
};
</script>

<style scoped lang="stylus">
$pubcolor = #8665FF;

shadow() {
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 8px 10px 0px rgba(86, 64, 247, 0.06);
}

#header >>> .el-date-editor, .el-range-editor, .el-input__inner, .el-date-editor--daterange {
  shadow();
  border-color: #fff;
}

#table >>> .has-gutter th {
  color: #444452;
  font-size: 14px;
}

#table {
  width:1650px;
  padding-top: 30px;
  overflow hidden;
  margin-bottom: 30px;
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

.bottom {
  height: 60px;
  line-height: 60px;
  padding: 0 50px;
  color: #646477;
  font-size: 12px;
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
  display :inline-block;
  background-color: rgba(250, 250, 254, 1);
  padding: 25px 20px;
  font-size: 14px;
  color: #444452;
  border-radius: 10px;
  margin: 0 40px 40px 0;
}

.filter-item span {
  padding: 8px 14px;
  margin-right: 26px;
  cursor :pointer;
}

.filteron {
  background-color: $pubcolor;
  color: #fff;
  border-radius: 6px;
}

.state {
  color: #9494AF;
}

.total {
  color: rgba(148, 148, 175, 1);
  font-size: 16px;
}

.num {
  color: $pubcolor;
}

.client .table-title {
  width: 100%;
  box-shadow: none;
  border-radius: 0;
  padding:0 40px;
}

.table-title p {
  display: inline-block;
  width: 160px;
  margin-right: 40px;
  font-weight: bold;
  color: rgba(68, 68, 82, 1);
  font-size: 14px;
}

.client li {
  display: inline-block;
  padding: 25px 40px;
  margin-bottom: 20px;
  color: #444452;
  font-size: 14px;
  shadow();
  cursor: pointer;
  border-radius: 10px;
}

.client li p {
  line-height: 30px;
}

.client li p span {
  display: inline-block;
  vertical-align: middle;
  width: 160px;
  margin-right: 40px;
}
.client li .course,.client li .remark 
  width :220px;
  overflow :hidden;
  white-space:nowrap;
  text-overflow :ellipsis;
.client li .course-title,.client li .remark-title
  width :220px;
.page {
  color: #9494AF;
  font-size: 14px;
  font-weight: normal;
  margin-right :40px;
}

.ok
  color :#16B3A3;
  font-weight :bold;
.fenqi 
  color:#FF5151;
  font-weight :bold;
</style>