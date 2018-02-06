<template>
    <div>
      <mt-header title="我的订单">
        <mt-button slot="left"><i class="icon-fanhui iconfont" @click="routerBack"></i></mt-button>
      </mt-header>
      <loading v-show="showLoading"></loading>
      <div>
        <input type="button" @click="tran" value="点击显示隐藏">
      </div>
      <transition name="slide-fade">
        <div class="tran" v-show="show"></div>
      </transition>
    </div>
</template>

<script>
  import {mapGetters,mapActions} from  'vuex'
  import loading from '../common/loading'
  export default {
    name: "order",
    data(){
      return{
        show:false
      }
    },
    methods:{
      routerBack:function () {
        if (this.$route.query.goindex === 'true') {
          this.$router.push('/')
        } else {
          this.$router.back(-1)
        }
      },
      tran:function () {
        this.show = !this.show
      },

    },
    computed:mapGetters([
      "showLoading"
    ]),
    components:{
      loading
    },
    mounted(){
      var self = this ;
      this.$store.dispatch('showLoading') ;
      var timer = setTimeout(()=>{
        self.$store.dispatch('hideLoading') ;
      },300)
    },
    beforeDestroy(){

    }
  }
</script>

<style scoped>
.tran{
  width: 200px;
  height: 100px;
  background-color: blanchedalmond;
}
  input{
    width: 300px;
    text-align: center;
    line-height: 50px;
    margin-top: 50px;
  }
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
 .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(20px);
  opacity: 0;
}
.slide-fade-enter{
  transform: translateX(20px);
  opacity: 0;
}
</style>
