<template>
  <div id="coursedetail">
    <div class="title">课程详情</div>
    <div class="detail-info">
      <!-- 课程信息 -->
      <div class="kecheng">
        <div class="info-title">
          <i></i> 课程信息
        </div>
        <p class="one">
          培训课程：
          <span>护理管理</span>
          <span>健康管理</span>
        </p>
        <p class="two">
          全部费用：
          <span>20000元</span>
          代缴费用：
          <span>300元</span>
          合作老师：
          <span>张磊</span>
          提成比例：
          <span>70%</span>
        </p>
      </div>
      <!-- 缴费信息 -->
      <div class="record clearfix">
        <div class="info-title">
          <i></i>缴费信息
        </div>
        <ul>
          <li class="record-item fl">
            <p class="record-date">2019-3-9</p>
            <div class="record-img clearfix">
              <input type="file" accept="image/*" multiple class="upload-image" />
              <div class="fl">
                <p class="record-money">缴费金额：13000元</p>
                <p class="record-pay">微信支付</p>
              </div>
              <img src alt class="fl" />
            </div>
          </li>

          <li class="record-item fl">
            <p class="record-date">2019-3-9</p>
            <div class="record-img clearfix">
              <input type="file" accept="image/*" multiple class="upload-image" />
              <div class="fl">
                <p class="record-money">缴费金额：13000元</p>
                <p class="record-pay">微信支付</p>
              </div>
              <img src alt class="fl" />
            </div>
          </li>
        </ul>
      </div>
      <!-- 发票信息 -->
      <div class="fapiao">
        <div class="info-title">
          <i></i> 发票信息
        </div>
        <p class="sub-title">增值税专用发票</p>
        <ul class="fapiao-list clearfix">
          <li class="fapiao-item fl">
            <p class="top">申请单位全称：</p>
            <p class="bottom">中国护士网</p>
          </li>
          <li class="fapiao-item fl">
            <p class="top">纳税人识别号：</p>
            <p class="bottom">13545646465464</p>
          </li>
          <li class="fapiao-item fl">
            <p class="top">开户银行：</p>
            <p class="bottom">中国银行</p>
          </li>
          <li class="fapiao-item fl">
            <p class="top">开户账号：</p>
            <p class="bottom">465435454654</p>
          </li>
        </ul>
      </div>
      <!-- 邮寄信息 -->
      <div class="package">
        <div class="info-title">
          <i></i> 邮寄信息
        </div>
        <ul class="fapiao-list clearfix">
          <li class="package-list clearfix"></li>
          <li class="package-item fl">
            <p class="top">收货人姓名：</p>
            <p class="bottom">中国护士网</p>
          </li>
          <li class="package-item fl">
            <p class="top">收货人手机号：</p>
            <p class="bottom">13545646465464</p>
          </li>
          <li class="package-item fl">
            <p class="top">收货人地址：</p>
            <p class="bottom">中国银行</p>
          </li>
        </ul>
      </div>

      <div class="agree clearfix">
        <p class="apply fl">发票申请单</p>
        <p class="new fl">新增</p>
      </div>

      <div class="agree">
        <div class="agree-top clearfix">
          <p class="apply fl">发票申请单</p>
          <p class="new fl">收回</p>
        </div>
        <div class="agree-tag clearfix">
            <p class="tag-item tag-active fl">增值税专用发票</p>
            <p class="tag-item fl">个人发票</p>
            <p class="tag-item fl">企业发票</p>
        </div>
        <div class="ipt">
          <ul class="ipt-list clearfix">
            <div class="clearfix">
              <li class="ipt-item fl">
                <p><i>*</i>  申请单位全称</p>
                <input type="text" />
              </li>
              <li class="ipt-item fl">
                <p><i>*</i>  纳税人识别号</p>
                <input type="text" />
              </li>
              <li class="ipt-item fl">
                <p>开户银行</p>
                <input type="text" />
              </li>
              <li class="ipt-item fl">
                <p>开户账号</p>
                <input type="text" />
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
    <button class="btn">确认提交</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped lang="stylus">
#coursedetail {
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

.detail-info {
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 8px 10px 0px rgba(86, 64, 247, 0.06);
  margin-bottom: 50px;
}

.kecheng, .record, .fapiao, .package, .agree {
  padding: 50px;
  border-bottom: 2px solid #EFEFF8;
  color: #9494AF;
  font-size: 16px;
  background: #fff;
}

.kecheng p {
  line-height: 40px;
}

.kecheng span {
  display: inline-block;
  color: #444452;
  font-weight: bold;
  margin-left: 30px;
}

.two span {
  width: 150px;
}

.record-item {
  margin-right: 50px;
}

.record-img {
  width: 270px;
  padding: 30px;
  background-color: rgba(250, 250, 254, 1);
}

.record-date {
  margin-bottom: 20px;
  font-size: 16px;
  color: #646476;
}

.record-money {
  margin-bottom: 10px;
  font-size: 16px;
  color: #FF5151;
}

.record-pay {
  font-size: 14px;
  color: #9494AF;
}

.upload-image {
  opacity: 0;
  position: absolute;
  left: 0;
  top: 10px;
}

.info-title {
  color: #7955F9;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 30px;
}

.sub-title {
  font-weight: bold;
  margin-bottom: 30px;
  color: rgba(68, 68, 82, 1);
  font-size: 16px;
}

.fapiao-item, .package-item {
  width: 380px;
  background-color: rgba(255, 255, 255, 1);
}

.top {
  margin-bottom: 16px;
}

.bottom {
  color: #444452;
}

.btn {
  padding: 17px 50px;
  background-color: rgba(121, 85, 249, 1);
  color: #fff;
  font-size: 14px;
  border-radius: 10px;
}
.agree-top
    margin-bottom :30px;
.apply {
  font-weight: bold;
  margin-right: 20px;
  color: #444452;
}

.new {
  color: #7955F9;
  font-size: 14px;
}
.agree-tag 
    font-size :14px;
    color:#444452;
    margin-bottom :30px;
.tag-item
    padding:8px 20px;
.tag-active 
    color:#fff;
    background:#7752F8;
    border-radius :6px;
.ipt {
  margin-bottom: 40px;
  width: 100%;
  overflow :hidden;
}
.ipt-list
  width:1700px;
.ipt-item {
  margin: 0 130px 10px 0;
}

.ipt p {
  font-size: 16px;
  color: #444452;
  font-weight: bold;
  margin-bottom: 16px;
}

.ipt input {
  width: 270px;
  height: 38px;
  padding-left: 10px;
  border-radius: 4px;
  border: 1px solid rgba(239, 239, 248, 1);
  background-color: rgba(250, 250, 254, 1);
}

.ipt i {
  color: red;
}
</style>