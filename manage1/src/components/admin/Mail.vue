<template>
  <div id="mail clearfix">
    <div class="title">邮寄管理</div>
    <div class="clearfix">
      <div class="filter-item fl">
        <span class="state">邮寄记录</span>
        <span @click="counton=1" :class="{'filteron':counton==1}">待处理</span>
        <span @click="counton=0" :class="{'filteron':counton==0}">全部记录</span>
      </div>

      <div class="upload fl">
        <img src="../../assets/image/upload.png" alt=""> 上传Excel
        <input type="file" class="fileIpt"/>
      </div>
    </div>
    <div class="order">
      <ul class="order-list">
        <li class="order-item" v-for="item in mailList" :key="item.id">
          <div class="order-left fl">
            <p class="order-title">发票</p>
            <p>客户姓名：{{item.name}}</p>
            <p>培训课程：{{item.course}}</p>
            <p>培训费用：{{item.course_price}}</p>
            <p>缴费日期：{{item.create_time}}</p>
          </div>
          <div class="order-center fl">
            <p class="invoice-title">增值税发票</p>
            <p>申请单位全称：</p>
            <p>纳税人识别号：</p>
            <p>开户银行：</p>
            <p>开户账号：</p>
          </div>
          <div class="order-right fl">
            <div class="info">
              <p>客户姓名：{{item.receipt_name}}</p>
              <p>客户手机：{{item.receipt_phone}}</p>
              <p>客户地址：{{item.receipt_address}}</p>
            </div>
            <p class="express">
              <i class="star">*</i> 快递单号
            </p>
            <div class="order-number clearfix">
              <input type="text" placeholder="请输入快递单号" class="express-ipt" v-model="item. express_number"/>
              <input type="submit" value="提交" class="submit fr" @click="submit(item.id)"/>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counton: 1,
      mailList: [
        {
          id: 1,
          create_time: "2019-09-18 10:41",
          course_id: "1",
          course_price: "100.00",
          receipt_name: "小明",
          receipt_phone: "1234456789",
          receipt_address: "常营",
          name: "闫冠宇",
          phone: "13051588225",
          express_number:'',
          course: "护士管理师"
        },
         {
          id: 2,
          create_time: "2019-09-18 10:41",
          course_id: "1",
          course_price: "100.00",
          receipt_name: "小明",
          receipt_phone: "1234456789",
          receipt_address: "常营",
          name: "闫冠宇",
          phone: "13051588225",
          express_number:'',
          course: "护士管理师"
        },
         {
          id: 3,
          create_time: "2019-09-18 10:41",
          course_id: "1",
          course_price: "100.00",
          receipt_name: "小明",
          receipt_phone: "1234456789",
          receipt_address: "常营",
          name: "闫冠宇",
          phone: "13051588225",
          express_number:'',
          course: "护士管理师"
        }, {
          id: 4,
          create_time: "2019-09-18 10:41",
          course_id: "1",
          course_price: "100.00",
          receipt_name: "小明",
          receipt_phone: "1234456789",
          receipt_address: "常营",
          name: "闫冠宇",
          phone: "13051588225",
          express_number:'',
          course: "护士管理师"
        },
         {
          id: 5,
          create_time: "2019-09-18 10:41",
          course_id: "1",
          course_price: "100.00",
          receipt_name: "小明",
          receipt_phone: "1234456789",
          receipt_address: "常营",
          name: "闫冠宇",
          phone: "13051588225",
          express_number:'',
          course: "护士管理师"
        },
      ]
    };
  },
  methods:{
    submit(id){
      // 带id把单号提交上去
      
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

.filter-item {
  display: inline-block;
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
  cursor: pointer;
}

.filteron {
  background-color: $pubcolor;
  color: #fff;
  border-radius: 6px;
}

.state {
  color: #9494AF;
}

.upload {
  width: 125px;
  height: 48px;
  text-align: center;
  line-height: 48px;
  color: #fff;
  font-size: 14px;
  border-radius: 10px;
  background-color: $pubcolor;
  margin-top: 10px;
  position :relative;
  cursor:pointer;

}

.fileIpt {
  opacity: 0;
  position: absolute;
    left: 0;
    top: 0;
    width: 125px;
    height: 48px;
  cursor:pointer;
}

.order-item {
  display: inline-block;
  height: 224px;
  padding: 40px;
  font-size: 16px;
  color: #444452;
  font-weight: bold;
  margin-bottom: 30px;
  shadow();
}

.order-left {
  width: 250px;
  padding-right: 30px;
  line-height: 30px;
}

.order-title {
  font-size: 20px;
  color: $pubcolor;
  margin-bottom: 20px;
}

.order-center {
  width: 439px;
  height: 164px;
  background-color: rgba(250, 250, 254, 1);
  padding: 0 30px 40px;
  margin-right: 40px;
  font-weight: normal;
  font-size: 14px;
  color: rgba(68, 68, 82, 1);
  line-height: 30px;
}

.invoice-title {
  font-size: 16px;
  margin: 20px 0 10px;
  font-weight: bolder;
}

.order-right {
  width: 555px;
}

.info {
  background-color: rgba(250, 250, 254, 1);
  padding: 20px;
  line-height: 30px;
  margin-bottom: 20px;
}

.order-number {
  line-height: 30px;
  color: rgba(68, 68, 82, 1);
  font-size: 16px;
}

.star {
  color: red;
}

.express {
  margin-bottom: 10px;
}

.express-ipt {
  width: 270px;
  height: 40px;
  padding-left: 10px;
  background-color: rgba(250, 250, 254, 1);
  border: 1px solid rgba(239, 239, 248, 1);
}

.submit {
  width: 185px;
  height: 48px;
  background-color: $pubcolor;
  color: #fff;
  font-size: 14px;
  border-radius: 7px;
}
</style>