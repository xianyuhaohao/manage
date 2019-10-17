<template>
  <div id="fenqi" class="clearfix">
    <div class="title">分期记录</div>

     <div id="table">
      <ul class="client">
        <li class="table-title">
          <p>分期申请时间</p>
          <p >客户姓名</p>
          <p>手机号</p>
          <p>缴费项目</p>
          <p>分期次数</p>
          <p>费用</p>
          <p>已缴费用</p>
          <p>剩余代缴费用</p>
          <p>下次缴费时间</p>
          <p>负责人</p>
          
        </li>
        <li
          v-for="(item,index) in tablelist.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          :key="index"
        >
          <p>
            <span>{{item.apply}}</span>
            <span >{{item.name}}</span>
            <span >{{item.phone}}</span>
            <span>{{item.project}}</span>
            <span>{{item.number}}</span>
            <span>{{item.fee}}</span>
            <span>{{item.done_fee}}</span>
            <span class="surplus_fee">{{item.surplus_fee}}</span>
            <span>{{item.pay_time}}</span>
            <span>{{item.response}}</span>            
          </p>
        
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
            :total="tablelist.length"
            prev-text="上一页"
            next-text="下一页"
          >
            <span
              style="margin-left: 10px"
              class="page"
            >第{{currentPage}}页/共{{Math.ceil(tablelist.length/pagesize)}}页</span>
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
      tablelist:[
        {
          apply:'2019-8-12- 12:22',
          name:'王小虎',
          phone:'13588899945',
          project:'健康管理师',
          number:'3',
          fee:22000,
          done_fee:8000,
          surplus_fee:6000,
          pay_time:'2019-10-12',
          response:'韩国强',
        },
        {
          apply:'2019-8-12- 12:22',
          name:'王小虎',
          phone:'13588899945',
          project:'健康管理师',
          number:'3',
          fee:22000,
          done_fee:8000,
          surplus_fee:6000,
          pay_time:'2019-10-12',
          response:'韩国强',
        },
        {
          apply:'2019-8-12- 12:22',
          name:'王小虎',
          phone:'13588899945',
          project:'健康管理师',
          number:'3',
          fee:22000,
          done_fee:8000,
          surplus_fee:6000,
          pay_time:'2019-10-12',
          response:'韩国强',
        },
        {
          apply:'2019-8-12- 12:22',
          name:'王小虎',
          phone:'13588899945',
          project:'健康管理师',
          number:'3',
          fee:22000,
          done_fee:8000,
          surplus_fee:6000,
          pay_time:'2019-10-12',
          response:'韩国强',
        },
        {
          apply:'2019-8-12- 12:22',
          name:'王小虎',
          phone:'13588899945',
          project:'健康管理师',
          number:'3',
          fee:22000,
          done_fee:8000,
          surplus_fee:6000,
          pay_time:'2019-10-12',
          response:'韩国强',
        },
        {
          apply:'2019-8-12- 12:22',
          name:'王小虎',
          phone:'13588899945',
          project:'健康管理师',
          number:'3',
          fee:22000,
          done_fee:8000,
          surplus_fee:6000,
          pay_time:'2019-10-12',
          response:'韩国强',
        },
        {
          apply:'2019-8-12- 12:22',
          name:'王小虎',
          phone:'13588899945',
          project:'健康管理师',
          number:'3',
          fee:22000,
          done_fee:8000,
          surplus_fee:6000,
          pay_time:'2019-10-12',
          response:'韩国强',
        },
      ],
      currentPage: 1, //初始页
      pagesize: 6,
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
  }
};
</script>

<style scoped lang='stylus'>
$pubcolor = #7752F8;

shadow() {
  box-shadow: 0px 4px 10px 0px rgba(166, 113, 246, 0.1);
}
#table >>> .el-pagination .btn-next{
  background :transparent;
}
#table >>> .el-pagination .btn-prev
  background :transparent;
#fenqi   {
  padding: 0 40px 50px;
  margin-left: -40px;
  background: #FAFAFE;
  overflow:hidden;
}

.title {
  margin: 70px 0 30px;
  color: rgba(68, 68, 82, 1);
  font-size: 28px;
}

#table {
  width: 100%;
  min-height :980px
}

.client .table-title {
  width: 100%;
  box-shadow: none;
  border-radius: 0;
  background :transparent;
  padding:0 40px;
}

.table-title p {
  display: inline-block;
  width:130px;
  margin-right: 20px;
  font-weight: bold;
  color: rgba(68, 68, 82, 1);
  font-size: 14px;
}

.surplus_fee
  color:#FF5151;
.client li {
  display: inline-block;
  padding: 25px 40px;
  margin-bottom: 20px;
  color: #444452;
  font-size: 14px;
  cursor: pointer;
  border-radius: 10px;
  background:#fff;
}

.client li p {
  line-height: 30px;
}

.client li p span {
  display: inline-block;
  vertical-align: middle;
  width:130px;
  margin-right: 20px;
}
.page {
  color: #9494AF;
  font-size: 14px;
  font-weight: normal;
}
</style>