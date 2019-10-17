<template>
  <div id="shoukuanfapiao">
    <div class="title">收款/发票审核</div>
    <div class="name">
      <p>姓名</p>
      <input type="text" class="name-ipt" disabled/>
    </div>
    <div class="client-info">
      <div class="ipt">
        <ul class="ipt-list clearfix">
          <div class="clearfix">
            <li class="ipt-item fl">
              <p>培训课程</p>
              <input type="text" disabled/>
            </li>
            <li class="ipt-item fl">
              <p>费用</p>
              <input type="text" disabled/>
            </li>
            <li class="ipt-item fl">
              <p>代缴费用</p>
              <input type="text" disabled/>
            </li>
            <li class="ipt-item fl">
              <p>本次课程负责人</p>
              <input type="text" disabled/>
            </li>
          </div>
          <div class="clearfix">
            <li class="ipt-item fl">
              <p>合作老师</p>
              <input type="text" disabled/>
            </li>
            <li class="ipt-item fl">
              <p>业绩分配比例</p>
              <input type="text" disabled/>
            </li>
          </div>
          <div class="clearfix">
            <li class="ipt-item fl">
              <p>1.缴费金额</p>
              <input type="text" disabled/>
            </li>
            <li class="ipt-item fl">
              <p>1.缴费日期</p>
              <input type="text" disabled/>
            </li>
            <li class="ipt-item fl">
              <p>1.缴费方式</p>
              <input type="text" />
            </li>
            <li class="ipt-item fl">
              <div class="upload">
                <!-- <input type="file" accept="image/*" multiple class="upload-image" /> -->
                <p class="img-text clearfix">
                  <img src="../../assets/image/photo.png" class="photo"/>
                  <span class="fr">查看</span>
                </p>
              </div>
            </li>
          </div>
          <div class="clearfix">
            <li class="ipt-item fl">
              <p>本次缴费</p>
              <input type="text" disabled/>
            </li>

            <li class="ipt-item fl">
              <p>缴费日期</p>
              <input type="text" disabled/>
            </li>
            <li class="ipt-item fl">
              <p>缴费方式</p>
              <select v-model="payMethods">
                <option value=1>微信支付</option>
                <option value=2>支付宝支付</option>
                <option value=3>现金支付</option>
              </select>
            </li>
            <li class="ipt-item fl">
              <div class="upload">
                <p class="img-text clearfix">
                  <img src="../../assets/image/photo.png" class="photo" />
                  <span class="fr">查看</span>
                </p>
              </div>
            </li>
          </div>
        </ul>
      </div>
    </div>
    <div class="fapiao-info">
      <p class="fapiao-title">增值税专用发票</p>
      <div class="ipt">
        <ul class="ipt-list clearfix">
          <div class="clearfix">
            <li class="ipt-item fl">
              <p>申请单位全称</p>
              <input type="text" disabled/>
            </li>
            <li class="ipt-item fl">
              <p>纳税人识别号</p>
              <input type="text" disabled/>
            </li>
            <li class="ipt-item fl">
              <p>开户银行</p>
              <input type="text" disabled/>
            </li>
            <li class="ipt-item fl">
              <p>开户账号</p>
              <input type="text" disabled/>
            </li>
          </div>
        </ul>
      </div>
    </div>
    <button class="confirm">审核通过</button>
    <button class="dimission" @click="isShow=true">驳 回</button>
    <!-- 驳回原因弹框 -->

    <!-- 遮罩层 -->
    <div v-show="isShow">
      <div class="zhezhao"></div>
      <div class="pop clearfix">
        <div class="pop-title">输入驳回原因</div>
        <textarea cols="30" rows="10" class="pop-ipt" ></textarea>
        <input type="text" >
        <button class="confirm fr" @click="isShow=false">确认驳回</button>
      </div>
    </div>
    
    <!-- 驳回原因弹框end -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      payMethods:0,
      isShow:false,
    };
  },
  mounted(){
    console.log(this.$route.params);
    
  }
};
</script>
<style lang="stylus" scoped>
#shoukuanfapiao {
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
  font-weight: bold;
}

.name {
  width: 1520px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 8px 10px 0px rgba(86, 64, 247, 0.06);
  padding: 50px;
  margin-bottom: 20px;
}

.client-info, .fapiao-info {
  width: 1520px;
  padding: 50px 50px 0;
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

.ipt p, .name p {
  font-size: 16px;
  color: #444452;
  font-weight: bold;
  margin-bottom: 16px;
}

.ipt input, .ipt select, .name input {
  padding-left: 10px;
  border-radius: 4px;
  margin-bottom: 30px;
  background-color: #fff;
  border: 1px solid rgba(239, 239, 248, 1);
}

.ipt input, .name input {
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

.fapiao-title {
  margin-bottom: 40px;
  color: rgba(121, 85, 249, 1);
  font-size: 20px;
  font-weight: bold;
}

.confirm {
  padding: 17px 50px;
  background-color: rgba(121, 85, 249, 1);
  color: #fff;
  font-size: 14px;
  border-radius: 10px;
  margin-right: 40px;
}

.dimission {
  padding: 17px 50px;
  background-color: #fff;
  color: #FF5151;
  font-size: 14px;
  border-radius: 10px;
  border: 1px solid #FF5151;
}

.upload {
  width: 280px;
  background-color: #fff;
  border: 1px solid rgba(239, 239, 248, 1);
  line-height: 40px;
  position: relative;
}

.img-text span {
  color: #7955F9;
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 10;
  font-size: 14px;
  font-weight: normal;
  cursor: pointer;
}
.photo 
  position relative;
  left:10px;
  top:13px;
.zhezhao {
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.pop {
  position: fixed;
  left: 50%;
  top: 50%;
  margin: -150px 0 0 -355px;
  width: 611px;
  padding: 60px 50px 30px;
  background-color: #fff;
  z-index: 10;
  border-radius: 10px;
}

.pop-title {
  color: #444452;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}

.pop-ipt {
  width: 570px;
  height: 70px;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: rgba(250, 250, 254, 1);
  border: 1px solid rgba(239, 239, 248, 1);
  resize :none;
  outline :none;
  font-size :14px;
  color:#444452;
}
</style>
