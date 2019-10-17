<template>
    <div id="add-staff">
    <div class="title">添加课程</div>
    <div class="client-info">
      <!-- 填写客户信息 -->
      <div class="ipt">
       <ul class="ipt-list clearfix">
            <div class="clearfix">
                <li class="ipt-item fl">
                    <p>
                    <i>*</i> 课程名
                    </p>
                    <input type="text" v-model="this.course_name"/>
                </li>
                <li class="ipt-item fl">
                    <p>
                    <i>*</i> 参考价格
                    </p>
                    <input type="text"  v-model="this.price"/>
                </li>
            </div>
            <div class="clearfix">
                <li class="ipt-item fl">
                    <p>
                    <i>*</i> 业绩提成比例
                    </p>
                    <select v-model="this.commission_scale">
                    <option value></option>
                    <option value></option>
                    </select>
                </li>

                <li class="ipt-item fl">
                    <p>
                    <i>*</i> 是否需要教材
                    </p>
                    <select v-model="this.is_material">
                    <option value="1">需要</option>
                    <option value="2">不需要</option>
                    </select>
                </li>
                <li class="ipt-item fl">
                    <p>
                    <i>*</i> 是否处于开启状态
                    </p>
                    <select v-model="this.status">
                    <option value="1">开启</option>
                    <option value="2">关闭</option>
                    </select>
                </li>
            </div>

        </ul>
      </div>
      <!-- 填写客户信息end -->

    </div>
    <button class="confirm" @click="confirm">确认添加</button>
    </div>
</template>
<script>
export default {
  data() {
    return {
        course_name: "",
        price: 0,
        commission_scale: 0,
        is_material: 0,
        status: 0,
        create_time: 0
    };
  },
  methods:{
    confirm(){
        // 先判空
    }
  },
};
</script>
<style lang="stylus" scoped>
#add-staff {
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
</style>
