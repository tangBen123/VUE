<template>
  <div id="app">
    <my-HeaderVue v-show="show"></my-HeaderVue>
    <loading v-show="showLoading"></loading>
    <transition :name="tranName">
      <router-view class="routerChild"></router-view>
    </transition>
    <myFooterVue v-show="footShow"></myFooterVue>
  </div>
</template>

<script>
  import myHeaderVue from './components/header/header'
  import myFooterVue from './components/footer/footer'
  import loading from './components/common/loading'
  import delicacy from './components/common/delicacy'
  import {mapActions,mapGetters} from 'vuex'
  export default {
    name: 'App',
    data(){
      return{
        footShow:true,
        tranName:'fade'
      }
    },
    watch:{
      $route(to,from){
        if(to.path != "/foods"){
          this.$store.dispatch('headShow') ;
        }else {
          this.$store.state.headShow = true ;
        };
        let path = from.path;
        if(path != to.path){
          var self = this ;
        }
      }
    },
    components:{
      myHeaderVue,
      myFooterVue,
      loading
    },
    computed:mapGetters([
      'show',
      'showLoading'
    ]),
    // mounted(){
    //   var self = this ;
    //   this.$store.dispatch('showLoading') ;
    //   var timer = setTimeout(()=>{
    //     this.$store.dispatch('hideLoading') ;
    //   },1000)
    // }
  }
</script>

<style lang="less" scoped>
  .fade-enter-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
