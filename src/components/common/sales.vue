<template>
  <div class="delicacy">
    <mt-header :title="name">
      <mt-button slot="left"><i class="icon-fanhui iconfont" @click="routerBack"></i></mt-button>
    </mt-header>
    <div class="foodInfo">
      <img src="../../assets/images/2.jpg" alt="">
      <div class="textInfo">
        <div class="title" v-text="name"></div>
        <div class="score" v-text="">
          <span>价格：</span>
          <span class="scoreNum">{{price}} 元</span>
        </div>
        <div class="score" v-text="">
          <span>评分：</span>
          <span class="scoreNum">4.6</span>
        </div>
        <div class="score" v-text="">
          <span>月销售：</span>
          <span class="scoreNum">{{monthSale}} 份</span>
        </div>
        <div class="score" v-text="">
          <span>评论数：</span>
          <span class="scoreNum">{{comment}} </span>
          <span>好评：</span>
          <span class="scoreNum">{{like}}%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "delicacy",
    props:{},
    data(){
      return{
        name:'',
        price:"",
        monthSale:"",
        like:"",
        comment:""
      }
    },
    created(){
      this.name = this.$route.query.title ;
      this.price = this.$route.query.price ;
      this.monthSale = this.$route.query.monthSale ;
      this.like = this.$route.query.like ;
      this.comment = this.$route.query.comment ;
    },
    methods:{
      routerBack:function () {
        if (this.$route.query.goindex === 'true') {
          this.$router.push('/')
        } else {
          this.$router.back(-1)
        }
      }
    },
  }
</script>

<style scoped>
  .delicacy{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    background-color: #fff;
    z-index: 999;
  }
  .foods .delicacy{
    padding-top: 0;
  }
  .foodInfo{
    padding: 10px;
  }
  .foodInfo  img{
      width: 100%;
      height: 180px;
      display: block;
  }
  .title{
    color: #333;
    font-size: 16px;
    font-weight: bold;
    line-height: 45px;
  }
  .scoreNum{
    color: orangered;
  }
</style>
