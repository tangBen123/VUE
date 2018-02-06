<template>
    <div>
      <mt-header title="搜索">
          <mt-button slot="left"><i class="icon-fanhui iconfont" @click="routerBack"></i></mt-button>
      </mt-header>
      <div class="input">
        <input type="text" placeholder="请输入.." class="foodSear">
        <input type="button" value="提交" class="inpBtn">
      </div>
      <div class="input searHistory">
        搜索历史
      </div>
      <div class="input clear">
        清空搜索历史
      </div>
      <loading v-show="showLoading"></loading>
    </div>
</template>

<script>
  import loading from '../common/loading'
  import {mapActions,mapGetters} from 'vuex'
  export default {
    name: "search",
    data(){
      return{

      }
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
    computed:mapGetters([
      'showLoading'
    ]),
    components:{
      loading
    },
    created(){
      var self = this ;
      this.$store.dispatch('showLoading') ;
      var timer = setTimeout(()=>{
        self.$store.dispatch('hideLoading') ;
      },300)
    }
  }
</script>

<style lang="less" scoped>
  .input{padding: 10px}
  .foodSear{
    width: 290px;
    height: 30px;
    border: 0;
    border: 1px solid #eee;
    border-radius: 5px;
    padding-left: 10px;
    outline: medium;
  }
  .inpBtn{
    .foodSear ;
    width: 55px;
    margin-left: 5px;
    color: #fff;
    background: deepskyblue;
    padding-left: 0px;
    letter-spacing: 2px;
  }
  .clear{
    text-align: center;
    color: #007aff;
    border-top:1px solid #eee ;
  }
  .searHistory{
    background: #eee;
  }
</style>
