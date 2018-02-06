<template>
    <div>
      <mt-header title="个人中心">
        <mt-button slot="left"><i class="icon-fanhui iconfont" @click="routerBack"></i></mt-button>
      </mt-header>
      <loading v-show="showLoading"></loading>
    </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
  import loading from '../common/loading'
  export default {
    name: "mine",
    methods:{
      routerBack:function () {
        if (this.$route.query.goindex === 'true') {
          this.$router.push('/')
        } else {
          this.$router.back(-1)
        }
      }
    },
    components:{
      loading
    },
    computed:mapGetters([
      'showLoading'
    ]),
    mounted(){
      this.$store.dispatch('showLoading') ;
      var self = this ;
      var timer = setTimeout(()=>{
        self.$store.dispatch('hideLoading') ;
      },300)
    }
  }
</script>

<style scoped>

</style>
