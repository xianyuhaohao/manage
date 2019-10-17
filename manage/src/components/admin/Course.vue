<template>
  <div id="course">
    <div class="title">课程设置</div>
    <div class="header">
      <button class="add-btn" @click="add">
      <img src="../../assets/image/addCourse.png" alt="">
      添加课程</button>
    </div>
    <div id="table">
      <ul class="client">
        <!-- 后台数据少人数 -->
        <li class="table-title">
          <p class="id">课程id</p>
          <p>课程名</p>
          <p>已报名人数</p>
          <p>业绩提成比例</p>
          <p>是否需要教材</p>
          <p>参考价格</p>
          <p>状态</p>
          <p class="operation">操作</p>
        </li>
        <li
          v-for="item in tablelist.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          :key="item.id"
        >
          <p>
            <span class="id">{{item.id}}</span>
            <span>{{item.course_name}}</span>
            <span>{{item.commission_scale}}</span>
            <span>{{item.commission_scale}}%</span>
            <span>{{item.is_material==1?'是':'否'}}</span>
            <span>{{item.price}}</span>
            <span>{{item.status==1?'开启':'关闭'}}</span>
            <span class="operation" @click="edit(item)">
              <img src="../../assets/image/operation.png" alt />
            </span>
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
      currentPage: 1, //初始页
      pagesize: 6,
      tablelist: [
        {
          id: 1,
          course_name: "护士管理师",
          price: "19800.00",
          commission_scale: 80,
          is_material: 1,
          is_contract: 2,
          status: 1,
          create_time: 19889988
        },
        {
          id: 2,
          course_name: "护士管理师",
          price: "19800.00",
          commission_scale: 80,
          is_material: 2,
          is_contract: 2,
          status: 1,
          create_time: 19889988
        },
        {
          id: 3,
          course_name: "护士管理师",
          price: "19800.00",
          commission_scale: 80,
          is_material: 2,
          is_contract: 2,
          status: 1,
          create_time: 19889988
        },
        {
          id: 4,
          course_name: "护士管理师",
          price: "19800.00",
          commission_scale: 80,
          is_material: 1,
          is_contract: 2,
          status: 1,
          create_time: 19889988
        },
        {
          id: 5,
          course_name: "护士管理师",
          price: "19800.00",
          commission_scale: 80,
          is_material: 1,
          is_contract: 2,
          status: 1,
          create_time: 19889988
        },
        {
          id: 6,
          course_name: "护士管理师",
          price: "19800.00",
          commission_scale: 80,
          is_material: 2,
          is_contract: 2,
          status: 1,
          create_time: 19889988
        },
        {
          id: 7,
          course_name: "护士管理师",
          price: "19800.00",
          commission_scale: 80,
          is_material: 2,
          is_contract: 2,
          status: 1,
          create_time: 19889988
        },
        {
          id: 8,
          course_name: "护士管理师",
          price: "19800.00",
          commission_scale: 80,
          is_material: 1,
          is_contract: 2,
          status: 1,
          create_time: 19889988
        },
      ]
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
    add() {
      this.$router.push("/addcourse");
    },
    edit(item) {
      this.$router.push({
        path:"/editcourse",
        query:{
          item
        }
        });
    }
  }
};
</script>
<style lang="stylus" scoped>
$pubcolor = #7752F8;

#table >>> .el-pagination .btn-next{
  background :transparent;
}
#table >>> .el-pagination .btn-prev
  background :transparent;

#course {
  padding: 0 40px;
  min-height: 960px;
  background: #FAFAFE;
  margin-left: -40px;
  width: 1620px;
}

.title {
  display: inline-block;
  margin: 70px 0 30px;
  color: rgba(68, 68, 82, 1);
  font-size: 28px;
  font-weight: bold;
}

.header {
  padding-top: 60px;
  width: 1400px;
  margin: 0 0 30px 40px;
  display: inline-block;
}

.add-btn {
  width: 114px;
  height: 48px;
  background-color: $pubcolor;
  border-radius: 9px;
  font-size: 14px;
  color: #fff;
}
.add-btn img{
  padding-right: 5px;
  position: relative;
  top: 2px;
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
  width:190px;
  margin-right: 20px;
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
  width:190px;
  margin-right: 20px;
}
.client li .operation,.client li .id
  width: 90px;
.page {
  color: #9494AF;
  font-size: 14px;
  font-weight: normal;
}
</style>
