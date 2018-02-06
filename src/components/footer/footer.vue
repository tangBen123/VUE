<template>
    <div class="footer">
      <router-link tag="div"  v-for="(item,index) in navArr" :to="item.to">
        <span class="foot_span" >
          <i :class="isSelect===item.to? item.isActive:item.noActive"></i>{{item.title}}
        </span>
      </router-link>
    </div>
</template>

<script>
  export default {
    name: "footerNav",
    data(){
      return {
        navArr:[
          {
            id:1,
            to:'/foods',
            isActive:'iconfont icon-coupon active',
            noActive:'iconfont icon-coupon',
            title:'外卖'
          },
          {
            id:2,
            to:'/footSearch',
            isActive:'iconfont icon-fujin1 active',
            noActive:'iconfont icon-fujin1',
            title:'搜索'
          },
          {
            id:3,
            to:'/order',
            isActive:'iconfont icon-dingdan active',
            noActive:'iconfont icon-dingdan',
            title:'订单'
          },
          {
            id:4,
            to:'/mine',
            isActive:'iconfont icon-wode active',
            noActive:'iconfont icon-wode',
            title:'我的'
          },
        ],
        isSelect:'/foods'
      }
    },
    methods:{
      select(){
        this.isSelect = this.$route.path ;
      }
    },
    watch:{
      '$route':'select'
    },
    mounted(){

    },
    created(){
      this.select() ;
    }
  }
</script>

<style lang="less" scoped>
  @icon:20px ;
  .footer{
    height: 45px;
    border-top:1px solid #eee ;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
  }
  .footer div{
    flex: 1;
  }
  .foot_span{
    width: 40px;
    margin: 3px auto;
    display: block;
    color: #000;
    text-align: center;
  }
  .foot_span .iconfont{
    font-size: @icon;
    display: block;
    transition: 0.3s;
  }
  .foot_span .active{
    color: deepskyblue;
  }
</style>
