<template>
  <!-- 客户信息页 -->
  <div id="Client">
    <div class="title">客户信息</div>
    <div class="client-info">
      <!-- 填写客户信息 -->
      <div class="ipt">
        <ul class="ipt-list clearfix">
          <li class="ipt-item fl">
            <p>
              <i>*</i> 姓名
            </p>
            <input type="text" v-model="name" />
          </li>
          <li class="ipt-item fl">
            <p>
              <i>*</i> 性别
            </p>
            <select v-model="sex">
              <option
                v-for="(item,index) in sexList"
                :key="index"
                :value="item.value"
                :label="item.label"
              ></option>
            </select>
          </li>
          <li class="ipt-item fl">
            <p>
              <i>*</i> 学历
            </p>
            <select v-model="edu">
              <option
                v-for="(item,index) in eduList"
                :key="index"
                :value="item.param_name"
                :label="item.param_name"
              ></option>
            </select>
          </li>
          <li class="ipt-item fl">
            <p>英语水平</p>
            <select v-model="eng">
              <option
                v-for="(item,index) in engList"
                :key="index"
                :value="item.param_name"
                :label="item.param_name"
              ></option>
            </select>
          </li>
          <li class="ipt-item fl">
            <p>
              <i>*</i> 工作年限
            </p>
            <select v-model="work">
              <option
                v-for="(item,index) in workList"
                :key="index"
                :value="item.value"
                :label="item.label"
              ></option>
            </select>
          </li>
          <li class="ipt-item fl">
            <p>
              <i>*</i> 工作科室
            </p>
            <select v-model="depart">
              <option
                v-for="(item,index) in departList"
                :key="index"
                :value="item.param_name"
                :label="item.param_name"
              ></option>
            </select>
          </li>
          <li class="ipt-item fl">
            <p>工作医院</p>
            <select v-model="hospital">
              <option
                v-for="(item,index) in hospitalList"
                :key="index"
                :value="item.value"
                :label="item.label"
              ></option>
            </select>
          </li>
          <li class="ipt-item fl">
            <p>
              <i>*</i> 省份
            </p>
            <select v-model="address">
              <option
                v-for="(item,index) in addressList"
                :key="index"
                :value="item.value"
                :label="item.label"
              ></option>
            </select>
          </li>
          <li class="ipt-item fl">
            <p>
              <i>*</i> 手机号
            </p>
            <input type="text" v-model="phone" />
          </li>

          <li class="ipt-item fl">
            <p>QQ</p>
            <input type="text" v-model="qq" />
          </li>
        </ul>
      </div>
      <!-- 填写客户信息end -->

      <div class="wish-abroad">
        出国意愿
        <div class="abroad-sel clearfix">
          <el-checkbox-group v-for="(item,index) in abroadList" :key="index" v-model="abroadCheck">
            <el-checkbox :label="item.param_name" class="fl"></el-checkbox>
          </el-checkbox-group>
        </div>
      </div>

      <div class="wish-course">
        意向培训课程
        <div class="course-sel clearfix">
          <el-checkbox-group v-model="courseCheck" v-for="(item,index) in courseList" :key="index">
            <el-checkbox :label="item.course_name" class="fl"></el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
    </div>

    <!-- 新客户分配 -->
    <div class="new-client">
        <p class="new-title">新客户  <span class="date">2019</span></p>
        <p class="distri-title">分配客户:</p>
        <div class="distribute">
            <ul class="clearfix">
                <li class="name fl"
                  v-for="(item,index) in yuangonglist"
                  :key="index"
                  @click="fenpei(index,item.user_nickname)"
                  :class="{'filteron':staffidx==index}"
                >{{item.user_nickname}}</li>
                
            </ul>
        </div>
    </div>
    <!-- 新客户分配end -->
    <button class="confirm"  @click="confirm">确认分配</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      staffidx: 0,
      name: "",
      sex: "",
      phone: "",
      qq: "",
      edu: "",
      eng: "",
      work: "",
      depart: "",
      hospital: "",
      address: "",
      abroad: "",
      int_course: "",
      sexList: [
        {
          value: "0",
          label: "女"
        },
        {
          value: "1",
          label: "男"
        }
      ],
      eduList: [
        {
          id: "1",
          type: "1",
          param_name: "高中"
        },
        {
          id: "2",
          type: "1",
          param_name: "专科"
        }
      ],
      engList: [
        {
          id: "5",
          type: "3",
          param_name: "英语四级"
        },
        {
          id: "6",
          type: "3",
          param_name: "英语六级"
        }
      ],
      workList: [
        {
          value: "1",
          label: "1"
        },
        {
          value: "2",
          label: "2"
        }
      ],
      departList: [
        {
          id: "3",
          type: "2",
          param_name: "内科"
        },
        {
          id: "4",
          type: "2",
          param_name: "外科"
        }
      ],
      hospitalList: [
        {
          value: "0",
          label: "人民医院"
        },
        {
          value: "1",
          label: "和谐医院"
        }
      ],
      addressList: [
        {
          value: "0",
          label: "北京"
        },
        {
          value: "1",
          label: "天津"
        },
        {
          value: "2",
          label: "河北"
        }
      ],
      abroadList: [
        {
          id: "6",
          type: "4",
          param_name: "美国"
        },
        {
          id: "7",
          type: "4",
          param_name: "德国"
        },
        {
          id: "8",
          type: "4",
          param_name: "加拿大"
        },
        {
          id: "9",
          type: "4",
          param_name: "芬兰"
        },
        {
          id: "10",
          type: "4",
          param_name: "澳洲"
        },
        {
          id: "11",
          type: "4",
          param_name: "新加坡"
        },
        {
          id: "12",
          type: "4",
          param_name: "日本"
        },
        {
          id: "13",
          type: "4",
          param_name: "沙特"
        },
        {
          id: "14",
          type: "4",
          param_name: "其他"
        }
      ],
      courseList: [
        {
          course_name: "护理管理师"
        },
        {
          course_name: "健康管理师"
        },
        {
          course_name: "产后康复师"
        },
        {
          course_name: "初级护师"
        },
        {
          course_name: "中级护师"
        },
        {
          course_name: "营养师"
        },
        {
          course_name: "护士资格"
        },
        {
          course_name: "催乳师"
        },
        {
          course_name: "心理咨询师"
        },
        {
          course_name: "母婴护理师"
        },
        {
          course_name: "执业医师"
        },
        {
          course_name: "小儿推拿保健师(师资班)"
        }
      ],
      abroadCheck: [],
      courseCheck: [],
      yuangonglist: [
        {
          user_nickname: "韩国强"
        },
        {
          user_nickname: "贺宇"
        },
        {
          user_nickname: "胡晶晶"
        },
        {
          user_nickname: "王春荣"
        },
        {
          user_nickname: "陈亚雪"
        },
        {
          user_nickname: "刘磊"
        },
        {
          user_nickname: "张瑶"
        },
        {
          user_nickname: "卢海华"
        },
        {
          user_nickname: "张艳华"
        },
        {
          user_nickname: "李秀红"
        }
      ],
    };
  },
  methods:{
    fenpei(index,user){
      this.staffidx = index;
      console.log(index,user);
      
    },
    confirm() {
      //判断还差省份必选 分配老师没有存
      if (
        (this.name &&
        this.sex &&
        this.phone &&
        this.edu &&
        this.work &&
        this.depart &&
        this.abroadCheck.length!=0 &&
        this.courseCheck.length!=0)
      ) {
        let addList=[]
        let obj = 
          {
            name: this.name,
            sex: this.sex,
            edu: this.edu,
            eng: this.eng,
            work: this.work,
            depart: this.depart,
            hospital: this.hospital,
            address: this.address,
            abroad: this.abroadCheck.join(","),
            int_course: this.courseCheck.join(",")
          }
        addList.push(obj)
        console.log(addList);
        this.$alert('添加成功', '消息提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }else{
        this.$alert('请完整填写必填项！', '消息提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
    }
  }
};
</script>

<style scoped lang='stylus'>
$pubcolor = #8665FF;
#Client {
  padding: 0 40px 40px;
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
}

.client-info {
  width: 1520px;
  padding: 50px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 8px 10px 0px rgba(86, 64, 247, 0.06);
  overflow: hidden;
  margin-bottom: 40px;
}

.ipt {
  margin-bottom: 40px;
  width: 1700px;
}

.ipt-item {
  margin: 0 130px 10px 0;
}

.ipt p {
  font-size: 16px;
  color: #444452;
  font-weight: bold;
  margin-bottom: 16px;
}

.ipt input, .ipt select {
  padding-left: 10px;
  border-radius: 4px;
  margin-bottom: 30px;
  background-color: rgba(250, 250, 254, 1);
  border: 1px solid rgba(239, 239, 248, 1);
}

.ipt input {
  width: 270px;
  height: 38px;
}

.ipt select {
  width: 280px;
  height: 40px;
}

.ipt i {
  color: red;
}

.wish-abroad, .wish-course {
  color: rgba(68, 68, 82, 1);
  font-size: 16px;
  font-weight: bold;
}

.abroad-sel, .course-sel {
  width: 1440px;
  padding: 30px 40px;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(239, 239, 248, 1);
  margin: 16px 0 40px;
  line-height: 25px;
}

.abroad-sel label {
  margin-right: 100px;
}

.course-sel label {
  width: 200px;
}
.new-client
    width: 1520px;
    padding:50px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 8px 10px 0px rgba(86, 64, 247, 0.06);
    margin-bottom :30px;

.new-title
    color:#32A9FF;
    font-size :28px;
    font-weight :bold;
    margin-bottom :40px;
.date
    color:#9494AF;
    font-size :14px;
    font-weight :normal;
    margin-right :20px;
.name
    background-color: rgba(250, 250, 254, 1);
    padding:7px 12px;
    margin :0 20px 20px 0;
    border-radius :4px;
    color:#444452;
    font-size :14px;
    cursor :pointer;
.distri-title{
    font-weight :bold;
    margin-bottom :20px;
    color: rgba(68, 68, 82, 1);
}

.filteron {
  background-color: $pubcolor;
  color: #fff;
  border-radius: 6px;
}
.confirm
    padding:17px 50px 17px 70px;
    background-color: rgba(121, 85, 249, 1);
    color:#fff;
    font-size :14px;
    border-radius :10px;
    background-image: url('../../assets/image/fenpei.png');
    background-repeat: no-repeat;
    background-position: 50px;
    cursor: pointer;
</style>