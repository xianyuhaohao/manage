<template>
  <div id="fapiao" class="clearfix">
    <div class="title">发票(申请)记录</div>
    <div class="header clearfix">
      <!-- <div class="search-wrap">  -->
        <img src="../../assets/image/search-grey.png" alt="" class="grey">
        <input type="text" placeholder="搜索(手机号/姓名)" class="search" v-model="searchContent" @keyup.enter="search"/>
      <!-- </div> -->
      <button class="search-btn" @click="search"> <img src="../../assets/image/search-white.png" alt="" class="white"> 搜索</button>
    </div>

    <div id="table">
      <ul class="client">
        <li class="table-title">
          <p>开票时间</p>
          <p class="small">姓名</p>
          <p class="middle">手机号</p>
          <p>实际缴费</p>
          <p>负责人</p>
          <p class="middle">发票类型</p>
          <p class="extend">申请单位/个人全称</p>
          <p class="extend">纳税人识别号</p>
          <p class="extend">开户银行</p>
          <p class="extend">开户账号</p>
          
        </li>
        <li
          v-for="(item,index) in tablelist.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          :key="index"
        >
          <p>
            <span>{{item.date}}</span>
            <span class="small">{{item.name}}</span>
            <span class="middle">{{item.phone}}</span>
            <span class="pay">{{item.pay}}</span>
            <span>{{item.response}}</span>
            <span class="middle">{{item.fapiao}}</span>
            <span class="extend">{{item.quancheng}}</span>
            <span class="extend">{{item.shibiehao}}</span>
            <span class="extend">{{item.bank}}</span>
            <span class="extend">{{item.zhanghao}}</span>            
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
      searchContent:'',
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          phone: '18361546121',
          pay:4000,
          response:'韩国强',
          fapiao:'增值税专用发票',
          quancheng:'网络有限公司',
          shibiehao:'34154564531435547553',
          bank:'中国建设银行',
          zhanghao:'4364631581387157574355',
        },
        {
          date: "2016-05-02",
          name: "刘磊",
          phone: '13465945687',
          pay:4000,
          response:'韩国强',
          fapiao:'增值税专用发票',
          quancheng:'网络有限公司',
          shibiehao:'34154564531435547553',
          bank:'中国建设银行',
          zhanghao:'4364631581387157574355',
        },
        {
          date: "2016-05-02",
          name: "王小",
          phone: '13946843214',
          pay:4000,
          response:'韩国强',
          fapiao:'增值税专用发票',
          quancheng:'网络有限公司',
          shibiehao:'34154564531435547553',
          bank:'中国建设银行',
          zhanghao:'4364631581387157574355',
        },
        {
          date: "2016-05-02",
          name: "王芳",
          phone: '18322266548',
          pay:4000,
          response:'韩国强',
          fapiao:'增值税专用发票',
          quancheng:'网络有限公司',
          shibiehao:'34154564531435547553',
          bank:'中国建设银行',
          zhanghao:'4364631581387157574355',
        },
        {
          date: "2016-05-02",
          name: "翠花",
          phone: '180265744562',
          pay:4000,
          response:'韩国强',
          fapiao:'增值税专用发票',
          quancheng:'网络有限公司',
          shibiehao:'34154564531435547553',
          bank:'中国建设银行',
          zhanghao:'4364631581387157574355',
        },
        {
          date: "2016-05-02",
          name: "赵六",
          phone: '18201548842',
          pay:4000,
          response:'韩国强',
          fapiao:'增值税专用发票',
          quancheng:'网络有限公司',
          shibiehao:'34154564531435547553',
          bank:'中国建设银行',
          zhanghao:'4364631581387157574355',
        },
        {
          date: "2016-05-02",
          name: "王五",
          phone: '165465456125',
          pay:4000,
          response:'韩国强',
          fapiao:'增值税专用发票',
          quancheng:'网络有限公司',
          shibiehao:'34154564531435547553',
          bank:'中国建设银行',
          zhanghao:'4364631581387157574355',
        },
        {
          date: "2016-05-02",
          name: "李四",
          phone: '165465456125',
          pay:4000,
          response:'韩国强',
          fapiao:'增值税专用发票',
          quancheng:'网络有限公司',
          shibiehao:'34154564531435547553',
          bank:'中国建设银行',
          zhanghao:'4364631581387157574355',
        },
        {
          date: "2016-05-02",
          name: "张三",
          phone: '13602548631',
          pay:4000,
          response:'韩国强',
          fapiao:'增值税专用发票',
          quancheng:'网络有限公司',
          shibiehao:'34154564531435547553',
          bank:'中国建设银行',
          zhanghao:'4364631581387157574355',
        },
        
      ],
      tablelist:[],
      currentPage: 1, //初始页
      pagesize: 6,
    };
  },
  watch: {
    searchContent: function(newVal) {
      if (newVal == "") {
        this.tablelist = this.tableData;
      }
    }
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
    search() {
      if (this.searchContent != "") {
        this.tablelist = [];
        this.tableData.forEach(item => {
          if (
            item.name.indexOf(this.searchContent) != -1 ||
            item.phone.indexOf(this.searchContent) != -1
          ) {
            this.tablelist.push(item);
          }
        });
      }
    }
  },
  mounted(){
    this.tablelist=this.tableData
  }
};
</script>

<style scoped lang='stylus'>
$pubcolor = #7752F8;

shadow() {
  box-shadow: 0px 4px 10px 0px rgba(166, 113, 246, 0.1);
}

#fapiao {
  width:1620px;
  padding: 0 40px 50px;
  margin-left: -40px;
  background: #FAFAFE;
}

#table >>> .el-pagination .btn-next{
  background :transparent;
}
#table >>> .el-pagination .btn-prev
  background :transparent;
.header {
  padding-top: 60px;
  width: 1400px;
  margin-bottom: 30px;
  display: inline-block;
}

.title {
  display: inline-block;
  margin: 70px 0 30px;
  color: rgba(68, 68, 82, 1);
  font-size: 28px;
}

.grey
  position relative;
  left: 75px;
  top: 2px;
.white
  position: relative;
  top: 2px;
  left: -2px;
.search {
  width: 296px;
  height: 48px;
  background-color: rgba(255, 255, 255, 1);
  margin: -15px 30px 0 40px;
  padding-left: 36px;
  shadow();
  border-radius: 9px;

}

.search-btn {
  width: 104px;
  height: 48px;
  background-color: $pubcolor;
  border-radius: 9px;
  margin-right: 30px;
  font-size: 14px;
  color: #fff;
}
#table {
  width: 100%;
  min-height :980px;
}

.client .table-title {
  width: 100%;
  box-shadow: none;
  border-radius: 0;
  background :transparent;
  padding:12px 40px;
}

.table-title p {
  display: inline-block;
  width: 90px;
  margin-right: 20px;
  font-weight: bold;
  color: rgba(68, 68, 82, 1);
  font-size: 14px;
}
.client .small
  width:70px;
.client .extend
  width: 180px;
.client .middle
  width:120px;
.pay
  color:$pubcolor;
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
  width: 90px;
  margin-right: 20px;
}
.page {
  color: #9494AF;
  font-size: 14px;
  font-weight: normal;
}
</style>