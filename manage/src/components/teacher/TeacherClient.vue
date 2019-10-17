<template>
  <!-- 教师客户管理页 -->
  <div id="Client">
    <div class="title">客户信息</div>

    <!-- 填写客户信息 -->
    <div class="client-info">
      <div class="ipt">
        <ul class="ipt-list clearfix">
          <li class="ipt-item fl">
            <p>
              <i>*</i> 姓名
            </p>
            <input type="text" v-model="personList.name" />
          </li>
          <li class="ipt-item fl">
            <p>
              <i>*</i> 性别
            </p>
            <select v-model="personList.sex">
              <option value="0">女</option>
              <option value="1">男</option>
            </select>
          </li>
          <li class="ipt-item fl">
            <p>
              <i>*</i> 学历
            </p>
            <select v-model="personList.edu">
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
            <select v-model="personList.eng">
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
            <select v-model="personList.work">
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
            <select v-model="personList.depart">
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
            <select v-model="personList.hospital">
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
            <select v-model="personList.address">
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
            <input type="text" v-model="personList.phone" />
          </li>

          <li class="ipt-item fl">
            <p>QQ</p>
            <input type="text" v-model="personList.qq" />
          </li>
        </ul>
      </div>

      <!-- 出国意愿 -->
      <div class="wish-abroad">
        出国意愿
        <div class="abroad-sel clearfix">
          <el-checkbox-group v-for="item in personList.abroad" :key="item.id" v-model="abroadCheck">
            <el-checkbox :label="item.param_name" class="fl"></el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
      <!-- 出国意愿end -->

      <!-- 意向课程  -->
      <div class="wish-course">
        意向培训课程
        <div class="course-sel clearfix">
          <el-checkbox-group
            v-model="courseCheck"
            v-for="item in personList.int_course"
            :key="item.id"
          >
            <el-checkbox :label="item.course_name" class="fl"></el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
      <!-- 意向课程end  -->

      <!-- 成交后已培训课程 -->
      <div class="already">
        已培训课程
        <ul class="already-list clearfix">
          <li class="already-item fl" @click="courseDetail">
            <p>护士管理课、护士证</p>
            <p class="already-date">2019-8-5</p>
          </li>
          <li class="already-item fl">
            <p>护士管理课、护士证</p>
            <p class="already-date">2019-8-5</p>
          </li>
        </ul>
      </div>
      <!-- 成交后已培训课程end -->
    </div>
    <!-- 填写客户信息end -->

    <!-- 订单跟进状态(分期中)  -->  
    <div class="state-fenqi" v-show="value==3">
      <div class="state-select clearfix">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <img src="../../assets/image/shenhe.png" alt="" class="fr" v-show="shenhe">
      </div>

      <!-- 培训课程  -->
      <div class="message2">
        <div class="train-course">
          <i class="course-title">*</i> 培训课程
          <div class="train-sel clearfix">
            <el-checkbox-group v-model="fenqiCheck" v-for="(item,index) in courseList" :key="index">
              <el-checkbox :label="item.course_name" class="fl"></el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
      </div>
      <!-- 培训课程end  -->

      <!-- 课程信息  -->
      <div class="ipt">
        <ul class="ipt-list clearfix">
          <div class="fl">
            <li class="ipt-item fl">
              <p>
                <i>*</i> 全部费用
              </p>
              <input type="text" />
            </li>
            <li class="ipt-item fl">
              <p>
                <i>*</i> 代缴费用
              </p>
              <input type="text" />
            </li>
            <li class="ipt-item fl">
              <p>
                <i>*</i> 下次缴费提醒
              </p>
              <select>
                <option value></option>
                <option value></option>
              </select>
            </li>
            <br />
          </div>
          <div class="fl">
            <li class="ipt-item fl">
              <p>合作老师</p>
              <select>
                <option value></option>
                <option value></option>
                <option value></option>
              </select>
            </li>
            <li class="ipt-item fl">
              <p>负责人的提成比例</p>
              <select>
                <option value></option>
                <option value></option>
                <option value></option>
              </select>
            </li>
          </div>
          <div class="fl">
            <li class="ipt-item fl">
              <p>
                <i>*</i> 本次缴费金额
              </p>
              <input type="text" />
            </li>
            <li class="ipt-item fl">
              <p>
                <i>*</i> 本次缴费日期
              </p>
              <select>
                <option value></option>
                <option value></option>
                <option value></option>
              </select>
            </li>
            <li class="ipt-item fl">
              <p>
                <i>*</i> 缴费方式
              </p>
              <select>
                <option value></option>
                <option value></option>
                <option value></option>
              </select>
            </li>
            <li class="ipt-item fl">
              <div class="upload">
                <input type="file" accept="image/*" multiple class="upload-image" />
                <p class="img-text">
                  <img src="../../assets/image/photo.png" alt />
                  <span class="fr">修改</span>
                </p>
              </div>
            </li>
          </div>

          <div class="fl">
            <li class="ipt-item fl">
              <p>收货人姓名</p>
              <input type="text" />
            </li>
            <li class="ipt-item fl">
              <p>收货手机号</p>
              <input type="text" />
            </li>

            <li class="ipt-item fl">
              <p>收货地址</p>
              <input type="text" class="address" />
            </li>
          </div>
        </ul>
        <div class="message1">
          <p class="remark">备注</p>
          <textarea cols="2100" rows="1" class="remark-content" placeholder="请填写备注"></textarea>
        </div>
      </div>
      <!-- 课程信息end -->

      <div class="agree clearfix">
        <p class="checkImg fl">
          <img
            src="../../assets/image/check-off.png"
            alt
            @click="mailcheck=true"
            v-show="!mailcheck"
          />
          <img
            src="../../assets/image/check-on.png"
            alt
            @click="mailcheck=false"
            v-show="mailcheck"
          />
        </p>
        <p class="mail fl">邮寄合同 / 教材</p>
        <p class="apply fl">发票申请单</p>
        <p class="new fl" @click="newly=!newly">{{newly==false?'新增':'收回'}}</p>
      </div>
       <!-- 发票申请单 -->
      <div class="fapiao-wrap" v-show="newly==true">
        <div class="fapiao-title clearfix">
          <p class="fl" @click="counton=1" :class="{'active':counton==1}">增值税专用发票</p>
          <p class="fl" @click="counton=2" :class="{'active':counton==2}">企业发票</p>
          <p class="fl" @click="counton=3" :class="{'active':counton==3}">个人发票</p>
        </div>
        <div class="ipt">
          <ul class="ipt-list clearfix" v-show="counton==1">
            <div class="clearfix">
              <li class="ipt-item fl">
                <p><i class="star">*</i> 申请单位全称</p>
                <input type="text" />
              </li>
              <li class="ipt-item fl">
                <p><i class="star">*</i> 纳税人识别号</p>
                <input type="text" />
              </li>
              <li class="ipt-item fl">
                <p><i class="star">*</i> 开户银行</p>
                <input type="text" />
              </li>
              <li class="ipt-item fl">
                <p><i class="star">*</i> 开户账号</p>
                <input type="text" />
              </li>
            </div>
          </ul>
          <ul class="ipt-list clearfix" v-show="counton==2">
            <div class="clearfix">
              <li class="ipt-item fl">
                <p><i class="star">*</i> 名称</p>
                <input type="text" />
              </li>
              <li class="ipt-item fl">
                <p><i class="star">*</i> 纳税人识别号</p>
                <input type="text" />
              </li>
            </div>
          </ul>
          <ul class="ipt-list clearfix" v-show="counton==3">
            <div class="clearfix">
              <li class="ipt-item fl">
                <p><i class="star">*</i> 名称</p>
                <input type="text" />
              </li>
            </div>
          </ul>
        </div>
      </div>
      <!-- 发票申请单end -->

    </div>
    <!-- 订单跟进状态(分期中)end  -->

    <!-- 订单跟进状态(成交状态) -->
    <div class="state-done" v-show="value==2">
      <div class="state-select clearfix">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <img src="../../assets/image/shenhe.png" alt=""  class="fr" v-show="shenhe">
      </div>

      <div class="message2">
        <!-- 培训课程  -->
        <div class="train-course">
          <i class="course-title">*</i> 培训课程
          <div class="train-sel clearfix">
            <el-checkbox-group v-model="fenqiCheck" v-for="(item,index) in courseList" :key="index">
              <el-checkbox :label="item.course_name" class="fl"></el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <!-- 意向课程end  -->
      </div>

      <!-- 课程信息  -->
      <div class="ipt">
        <ul class="ipt-list clearfix">
          <div class="fl">
            <li class="ipt-item fl">
              <p>
                <i>*</i> 全部费用
              </p>
              <input type="text" />
            </li>
            <li class="ipt-item fl">
              <p>
                <i>*</i> 代缴费用
              </p>
              <input type="text" />
            </li>
            <li class="ipt-item fl">
              <p>合作老师</p>
              <select>
                <option value></option>
                <option value></option>
                <option value></option>
              </select>
            </li>
            <li class="ipt-item fl">
              <p>负责人的提成比例</p>
              <select>
                <option value></option>
                <option value></option>
                <option value></option>
              </select>
            </li>
            <br />
          </div>
          <div class="fl">
            <li class="ipt-item fl">
              <p>
                <i>*</i> 缴费日期
              </p>
              <select>
                <option value></option>
                <option value></option>
                <option value></option>
              </select>
            </li>
            <li class="ipt-item fl">
              <p>
                <i>*</i> 缴费方式
              </p>
              <select>
                <option value></option>
                <option value></option>
                <option value></option>
              </select>
            </li>
            <li class="ipt-item fr">
              <div class="upload">
                <input type="file" accept="image/*" multiple class="upload-image" />
                <p class="img-text">
                  <img src="../../assets/image/photo.png" alt />
                  <span class="fr">修改</span>
                </p>
              </div>
            </li>
          </div>

          <div class="fl">
            <li class="ipt-item fl">
              <p>收货人姓名</p>
              <input type="text" />
            </li>
            <li class="ipt-item fl">
              <p>收货手机号</p>
              <input type="text" />
            </li>

            <li class="ipt-item fl">
              <p>收货地址</p>
              <input type="text" class="address" />
            </li>
          </div>
        </ul>
        <div class="message1">
          <p class="remark">备注</p>
          <textarea cols="210" rows="1" class="remark-content" placeholder="请填写备注"></textarea>
        </div>
      </div>
      <!-- 课程信息end -->

      <!-- 发票申请单 -->
      <div class="agree clearfix">
        <p class="apply fl">发票申请单</p>
        <p class="new fl" @click="newly=!newly">{{newly==false?'新增':'收回'}}</p>
      </div>
      <div class="fapiao-wrap" v-show="newly==true">
        <div class="fapiao-title clearfix">
          <p class="fl" @click="counton=1" :class="{'active':counton==1}">增值税专用发票</p>
          <p class="fl" @click="counton=2" :class="{'active':counton==2}">企业发票</p>
          <p class="fl" @click="counton=3" :class="{'active':counton==3}">个人发票</p>
        </div>
        <div class="ipt">
          <ul class="ipt-list clearfix" v-show="counton==1">
            <div class="clearfix">
              <li class="ipt-item fl">
                <p><i class="star">*</i> 申请单位全称</p>
                <input type="text" />
              </li>
              <li class="ipt-item fl">
                <p><i class="star">*</i> 纳税人识别号</p>
                <input type="text" />
              </li>
              <li class="ipt-item fl">
                <p><i class="star">*</i> 开户银行</p>
                <input type="text" />
              </li>
              <li class="ipt-item fl">
                <p><i class="star">*</i> 开户账号</p>
                <input type="text" />
              </li>
            </div>
          </ul>
          <ul class="ipt-list clearfix" v-show="counton==2">
            <div class="clearfix">
              <li class="ipt-item fl">
                <p><i class="star">*</i> 名称</p>
                <input type="text" />
              </li>
              <li class="ipt-item fl">
                <p><i class="star">*</i> 纳税人识别号</p>
                <input type="text" />
              </li>
            </div>
          </ul>
          <ul class="ipt-list clearfix" v-show="counton==3">
            <div class="clearfix">
              <li class="ipt-item fl">
                <p><i class="star">*</i> 名称</p>
                <input type="text" />
              </li>
            </div>
          </ul>
        </div>
      </div>
      <!-- 发票申请单end -->

    </div>
    <!-- 订单跟进状态(成交状态)end -->

    <!-- 订单跟进状态(跟进中) -->
    <div class="state-genjin" v-show="value==1">
      <div class="state-select">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="(item,index) in options"
            :key="index"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <img src="../../assets/image/shenhe.png" alt=""  class="fr" v-show="shenhe">
      </div>
      <div class="message1">
        <p class="remark">备注</p>
        <textarea cols="210" rows="1" class="remark-content" placeholder="请填写备注"></textarea>
      </div>
    </div>
    <!-- 订单跟进状态(跟进中)end -->

    <!-- 订单跟进状态(无意向、无法联系) -->
    <div class="state-none" v-show="value==4||value==5">
      <div class="state-select">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="(item,index) in options"
            :key="index"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <img src="../../assets/image/shenhe.png" alt=""  class="fr" v-show="shenhe">
      </div>
      <div class="message1">
        <p class="remark">备注</p>
        <textarea cols="210" rows="1" class="remark-content" placeholder="请填写备注"></textarea>
      </div>
    </div>
    <!-- 订单跟进状态(无意向、无法联系)end -->

    <!-- 成交后 -->
    <div class="add-course" v-show="false">
      <img src="../../assets/image/plus-none.png" alt />新增培训课程
    </div>
    <!-- 成交后end -->

    <button class="btn" @click="confirm" v-show="btnShow">确认提交</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      abroadCheck: [],
      courseCheck: [],
      fenqiCheck: [],
      value: "3",
      shenhe:false,
      btnShow:true,
      mailcheck: false,
      counton:1,
      newly:false,
      options: [
        {
          value: "1",
          label: "跟进中"
        },
        {
          value: "2",
          label: "已成交"
        },
        {
          value: "3",
          label: "分期付款"
        },
        {
          value: "4",
          label: "无意向"
        },
        {
          value: "5",
          label: "无法联系"
        }
      ],
      personList: {
        id: 1,
        name: "闫冠宇",
        sex: 1,
        edu: "大专",
        eng: "一般",
        work: "4",
        depart: "1",
        hospital: "常营",
        address: "海淀",
        phone: "13051588225",
        qq: "944631436",
        abroad: [
          {
            id: 36,
            param_name: "美国",
            sel: 1
          },
          {
            id: 37,
            param_name: "德国",
            sel: 0
          },
          {
            id: 38,
            param_name: "加拿大",
            sel: 0
          },
          {
            id: 39,
            param_name: "芬兰",
            sel: 0
          },
          {
            id: 40,
            param_name: "澳洲",
            sel: 0
          },
          {
            id: 41,
            param_name: "新加坡",
            sel: 0
          },
          {
            id: 42,
            param_name: "沙特",
            sel: 0
          },
          {
            id: 43,
            param_name: "日本",
            sel: 0
          },
          {
            id: 44,
            param_name: "其他",
            sel: 0
          }
        ],
        int_course: [
          {
            id: 1,
            course_name: "护士管理师",
            sel: 1
          },
          {
            id: 3,
            course_name: "小儿推拿12",
            sel: 0
          }
        ],
        remark: "有意向",
        create_time: 1568597919
      },
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
      ]
    };
  },
  methods: {
    courseDetail() {
      this.$router.push("/coursedetail");
    },
    confirm(){
      console.log(222222);
      
      this.shenhe=true
      this.btnShow=false
    }
  },
  mounted() {
    // 用id请求数据
  }
};
</script>

<style scoped lang='stylus'>
shadow() {
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 8px 10px 0px rgba(86, 64, 247, 0.06);
}

#Client {
  padding: 0 40px 40px;
  min-height: 960px;
  background: #FAFAFE;
  margin-left: -40px;
  width: 1620px;
}

.wish-abroad >>> .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner, .el-checkbox__inner:hover {
  background-color: #7955F9;
  border-color: #7955F9;
}

.wish-course >>> .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner, .el-checkbox__inner:hover, .el-checkbox__input.is-checked, .el-checkbox__label {
  background-color: #7955F9;
  border-color: #7955F9;
  color: black;
}

.state-done >>> .el-input--suffix .el-input__inner {
  color: #3CC0B2;
  font-size: 20px;
}

.state-done >>> .el-input__inner {
  border-color: #fff;
  shadow();
}

.state-fenqi >>> .el-input--suffix .el-input__inner {
  color: #FF5151;
  font-size: 20px;
}

.state-fenqi >>> .el-input__inner {
  border-color: #fff;
  shadow();
}

.state-genjin >>> .el-input--suffix .el-input__inner {
  color: #32A9FF;
  font-size: 20px;
}

.state-genjin >>> .el-input__inner {
  border-color: #fff;
  shadow();
}

.state-none >>> .el-input--suffix .el-input__inner {
  color: #9494AF;
  font-size: 20px;
}

.state-none >>> .el-input__inner {
  border-color: #fff;
  shadow();
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

.ipt i, .course-title {
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

.course-sel label, .train-sel label {
  width: 200px;
}

.wish-course, .train-course, .already {
  color: rgba(68, 68, 82, 1);
  font-size: 16px;
  font-weight: bold;
}

.train-sel {
  width: 1440px;
  padding: 30px 40px;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(239, 239, 248, 1);
  margin: 16px 0 40px;
  line-height: 25px;
}

.already-list {
  margin: 16px 0 0;
}

.already-item {
  padding: 30px;
  width: 270px;
  background-color: rgba(250, 250, 254, 1);
  margin: 0 20px 20px 0;
}

.already-item p {
  line-height: 30px;
}

.already-item .already-date {
  font-size: 14px;
  color: #9494AF;
  font-weight: normal;
}

.new-client {
  width: 1520px;
  padding: 50px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 8px 10px 0px rgba(86, 64, 247, 0.06);
  margin-bottom: 30px;
}

.new-title {
  color: #32A9FF;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 40px;
}

.date {
  color: #9494AF;
  font-size: 14px;
  font-weight: normal;
  margin-right: 20px;
}

.name {
  background-color: rgba(250, 250, 254, 1);
  padding: 7px 12px;
  margin: 0 20px 20px 0;
  border-radius: 4px;
  color: #444452;
  font-size: 14px;
}

.distri-title {
  font-weight: bold;
  margin-bottom: 20px;
  color: rgba(68, 68, 82, 1);
}

.btn {
  padding: 17px 50px;
  background-color: rgba(121, 85, 249, 1);
  color: #fff;
  font-size: 14px;
  border-radius: 10px;
}

.state-genjin, .state-fenqi, .state-done, .state-none {
  padding: 50px;
  width: 1520px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 8px 10px 0px rgba(86, 64, 247, 0.06);
  margin-bottom: 40px;
  overflow: hidden;
}

.state-select {
  margin-bottom: 40px;
}

.message1 {
  margin-bottom: 40px;
}

.remark {
  margin-bottom: 16px;
  color: #444452;
  font-size: 16px;
}

.message1 .remark-content {
  padding: 20px;
  background-color: rgba(250, 250, 254, 1);
  border: 1px solid rgba(239, 239, 248, 1);
  border-radius: 4px;
  color: #444452;
  font-size: 14px;
  resize: none;
  outline: none;
}

.upload {
  width: 280px;
  background-color: rgba(250, 250, 254, 1);
  border: 1px solid rgba(239, 239, 248, 1);
  line-height: 40px;
  position: relative;
}

.upload-image {
  opacity: 0;
  position: absolute;
  left: 0;
  top: 10px;
}

.img-text span {
  color: #7955F9;
  position: absolute;
  right: 10px;
  top: 17px;
  z-index: 10;
  font-size: 14px;
  font-weight: normal;
  cursor: pointer;
}

.img-text img {
  position: relative;
  top: 15px;
  left: 15px;
}

.ipt-item .address {
  width: 690px;
}

.agree {
  color: #444452;
  font-size: 16px;
  height: 30px;
  line-height: 16px;
  margin-bottom:30px;
}

.mail {
  margin-right: 40px;
}

.checkImg {
  width: 16px;
  margin-right: 6px;
  text-align: center;
}

.apply {
  font-weight: bold;
  margin-right: 20px;
}

.new {
  color: #7955F9;
  font-size: 14px;
  cursor:pointer;
}

.state-title {
  padding: 40px 50px;
  width: 1520px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 8px 10px 0px rgba(86, 64, 247, 0.06);
  position: relative;
  color: #9494AF;
  font-size: 16px;
}
.fapiao-title
  margin-bottom:30px;
.fapiao-title p
  padding:8px 20px;
  margin-right:20px;
  color: rgba(68, 68, 82, 1);
  font-size: 14px;
  cursor:pointer;
.fapiao-title .active
  background:#7752F8;
  color:#fff;
  border-radius:6px;
.add-course {
  padding: 30px 50px;
  width: 152px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 8px 10px 0px rgba(86, 64, 247, 0.06);
  color: #7955F9;
  font-size: 20px;
  font-weight: bold;
}
.star
  color:red;
.add-course img {
  position: relative;
  top: 3px;
  right: 7px;
}

</style>