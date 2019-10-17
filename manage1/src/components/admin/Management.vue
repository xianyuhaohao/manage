<template>
  <div id="management" class="clearfix">
    <div class="title">客户管理</div>
    <div class="header clearfix">
      <input
        type="text"
        placeholder="搜索(手机号/姓名)"
        class="search"
        v-model="searchContent"
        @keyup.enter="search"
      />
      <button class="search-btn" @click="search">搜索</button>
      <button class="add-btn fr" @click="add">添加客户</button>
    </div>
    <p class="total">
      总共
      <span class="num">{{tablelist.length}}</span>客户
    </p>
    <div id="table">
      <ul class="client">
        <li class="table-title">
          <p>姓名</p>
          <p>性别</p>
          <p>学历</p>
          <p class="wish-course">意向培训课程</p>
          <p>手机号</p>
          <p>来访记录</p>
          <p class="operation">操作</p>
        </li>
        <li
          v-for="(item,index) in tablelist.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          :key="index"
          @click="client(item.id)"
        >
          <p>
            <span class="name">{{item.name}}</span>
            <span class="sex">{{item.sex}}</span>
            <span class="edu">{{item.edu}}</span>
            <span class="course">{{item.int_course}}</span>
            <span class="phone">{{item.phone}}</span>
            <span class="visit">{{item.visit}}</span>
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
      fpidx: -1,
      staffidx: 0,
      searchContent: "",
      tablelist: [],
      tableData: [
        {
          id:1,
          name: "王芳",
          sex: "女",
          edu: "本科",
          int_course:
            "小儿推拿、产后护理小儿推拿、产后护理小儿推拿、产后护理小儿推拿、产后护理小儿推拿、产后护理",
          phone: "1546465465455",
          visit: "查看来访记录",
          teacher: 0
        },
        {
          id:2,
          name: "王小虎",
          sex: "男",
          edu: "本科",
          int_course: "小儿推拿",
          phone: "18033251456",
          teacher: 0
        },
        {
          id:3,
          name: "张三",
          sex: "女",
          edu: "专科",
          int_course: "小儿推拿",
          phone: "18034590630",
          teacher: 0
        },
        {
          id:4,
          name: "李四",
          sex: "女",
          edu: "本科",
          int_course: "小儿推拿、产后护理",
          phone: "13466665987",
          teacher: 0
        },
        {
          id:5,
          name: "卢海燕",
          sex: "女",
          edu: "高中",
          int_course: "小儿推拿",
          phone: "15464654654",
          teacher: 0
        },
        {
          id:6,
          name: "翠花",
          sex: "男",
          edu: "本科",
          int_course: "小儿推拿",
          phone: "18835468421",
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
      currentPage: 1,
      pagesize: 3
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
    add() {
      this.$router.push("/addclient");
    },
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
    },
    client(id){
      this.$router.push({
        name:"teacherClient",
        params:{
          id
        }
      })
    }
  },

  mounted() {
    this.tablelist = this.tableData;
  }
};
</script>

<style scoped lang='stylus'>
$pubcolor = #7752F8;

shadow() {
  box-shadow: 0px 4px 10px 0px rgba(166, 113, 246, 0.1);
}

#table >>> .el-table__header tr {
  padding: 0 50px;
  color: #444452;
  font-size: 14px;
}

#table >>> .el-table__body tr {
  padding: 0 50px;
  shadow();
}

#table >>> .el-table__body {
  color: #444452;
  border-spacing: 0 20px;
}

#table >>> table th {
  border: 0px;
}

#table >>> table td {
  border: 0px;
  height: 70px;
}

#table >>> .el-table--border::after, .el-table--group::after, .el-table::before {
  background-color: #FFF;
}

#table >>> .el-table__body .el-table_1_column_9 {
  color: #7955F9;
}

#table >>> .el-table__body .el-table_1_column_10 {
  background-image: url('../../assets/image/operation.png');
  background-repeat: no-repeat;
  background-position: 10px center;
}

#management
  width:1650px;
  overflow :hidden;
#table {
  width: 100%;
  padding-top: 30px;
  margin-bottom: 30px;
}

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

.search {
  width: 296px;
  height: 48px;
  background-color: rgba(255, 255, 255, 1);
  margin: -15px 30px 0 40px;
  padding-left: 36px;
  shadow();
  border-radius: 6px;
  background-image: url('../../assets/image/search-grey.png');
  background-repeat: no-repeat;
  background-position: 15px;
}

.search-btn {
  width: 90px;
  height: 48px;
  padding-left: 15px;
  background-color: $pubcolor;
  border-radius: 9px;
  margin-right: 30px;
  font-size: 14px;
  color: #fff;
  background-image: url('../../assets/image/search-white.png');
  background-repeat: no-repeat;
  background-position: 16px;
  cursor: pointer;
}

.add-btn {
  width: 110px;
  height: 48px;
  padding-left: 30px;
  background-color: $pubcolor;
  border-radius: 9px;
  font-size: 14px;
  color: #fff;
  background-image: url('../../assets/image/add.png');
  background-repeat: no-repeat;
  background-position: 18px;
  cursor: pointer;
}

.total {
  color: rgba(148, 148, 175, 1);
  font-size: 16px;
}

.num {
  color: $pubcolor;
}

.table {
  width: 100%;
}

.client .table-title {
  width: 100%;
  box-shadow: none;
  border-radius: 0;
}

.table-title p {
  display: inline-block;
  width: 150px;
  margin-right: 40px;
  font-weight: bold;
  color: rgba(68, 68, 82, 1);
  font-size: 14px;
}

.table-title .wish-course {
  width: 400px;
  margin-right: 60px;
}

.client li {
  display: inline-block;
  padding: 12px 40px;
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
  width: 150px;
  margin-right: 40px;
}

.client .course {
  width: 400px;
  margin-right: 60px;
}

.client .operation {
  width: 30px;
  margin-right: 0;
}

.client .visit {
  color: $pubcolor;
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

.page-wrap {
  margin-right: 100px;
}
</style>