<template>
    <div class="foods">
      <div>
        <banner></banner>
        <recommend></recommend>
        <loading v-show="showLoading"></loading>

      </div>

    </div>

</template>

<script>
  import {mapActions,mapGetters} from 'vuex'
  import loading from '../common/loading'
  import banner from '../common/swpier'
  import recommend from '../common/recommend'
  export default {
    name: "foods",
    data(){
      return{
        router:'',
        routerChilden:true
      }
    },
    methods:mapActions([
      "add",
      "milus",
    ]),
    computed:mapGetters([
      'count',
      'showLoading',
    ]),
    components:{
      loading,
      banner,
      recommend
    },
    created(){
      var self = this ;
      this.$store.dispatch('showLoading') ;
      var timer = setTimeout(()=>{
        self.$store.dispatch('hideLoading') ;
      },300)
    },
    watch:{
      $route(to,from){
        var len = to.path.split('/').length ;
        if(len > 2){
          this.routerChilden = false ;
        }
      }
    },
  }
</script>

<style lang="less" scoped>
  .foods{

  }
  input{
    width: 90px;
    height: 30px;
    outline: medium;
    margin-left: 30px;
    line-height: 20px;
    text-align: center;
    border: 0;
    border-radius: 5px;
  }
  .foods li{
    text-align: center;
    line-height: 30px;
    font-size: 16px;
    margin-top: 20px;
  }
  img{
    width: 150px;
    height: 150px;
    display: block;
    margin: 50px auto;
  }

</style>
