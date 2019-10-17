<template>
    <div id="shoukuan">
    <div class="title">收款审核</div>
    <div class="name">
        <p>姓名</p>
        <input type="text" class="name-ipt" />
    </div>
    <div class="client-info">
      <div class="ipt">
        <ul class="ipt-list clearfix">
            <div class="clearfix">
                <li class="ipt-item fl">
                    <p>
                    培训课程
                    </p>
                    <input type="text" />
                </li>
               <li class="ipt-item fl">
                    <p>
                    费用
                    </p>
                    <input type="text" />
                </li>
                <li class="ipt-item fl">
                    <p>
                    本次课程负责人
                    </p>
                    <input type="text" />
                </li>
            </div>
             <div class="clearfix">
                <li class="ipt-item fl">
                    <p>
                    合作老师
                    </p>
                    <input type="text" />
                </li>
               <li class="ipt-item fl">
                    <p>
                    业绩分配比例
                    </p>
                    <input type="text" />
                </li>
            </div>
            <div class="clearfix">
                <li class="ipt-item fl">
                    <p>
                    本次缴费
                    </p>
                    <input type="text" />
                </li>

                <li class="ipt-item fl">
                    <p>
                    缴费日期
                    </p>
                    <input type="text" />
                </li>
                <li class="ipt-item fl">
                    <p>
                    缴费方式
                    </p>
                    <input type="text" />
                </li>
                <li class="ipt-item fl">
              <div class="upload">
                <input type="file" accept="image/*" multiple class="upload-image" />
                <p class="img-text">
                  <img src alt />
                  <span class="fr">修改</span>
                </p>
              </div>
            </li>
            </div>

        </ul>
      </div>

    </div>
    <button class="confirm">审核通过</button>
    <button class="dimission">驳 回</button>

    </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="stylus" scoped>
#shoukuan {
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
.name
    width: 1520px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 8px 10px 0px rgba(86, 64, 247, 0.06);
    padding: 50px;
    margin-bottom :20px;
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

.ipt p,.name p {
    font-size: 16px;
    color: #444452;
    font-weight: bold;
    margin-bottom: 16px;
}

.ipt input, .ipt select,.name input {
    padding-left: 10px;
    border-radius: 4px;
    margin-bottom: 30px;
    background-color: #fff;
    border: 1px solid rgba(239, 239, 248, 1);
}

.ipt input ,.name input{
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

.confirm {
  padding: 17px 50px;
  background-color: rgba(121, 85, 249, 1);
  color: #fff;
  font-size: 14px;
  border-radius: 10px;
  margin-right :40px;
}

.dimission {
  padding: 17px 50px;
  background-color: #fff;
  color: #FF5151;
  font-size: 14px;
  border-radius: 10px;
  border :1px solid #FF5151;
}
.upload {
  width: 280px;
  background-color: #fff;
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
  top: 10px;
  z-index: 10;
  font-size: 14px;
  font-weight: normal;
  cursor: pointer;
}

</style>
