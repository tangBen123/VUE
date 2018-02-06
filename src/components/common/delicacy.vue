<template>
    <div class="delicacy">
      <mt-header title="美食">
        <mt-button slot="left"><i class="icon-fanhui iconfont" @click="routerBack"></i></mt-button>
      </mt-header>
      123
    </div>
</template>

<script>
  export default {
    name: "delicacy",
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
  height: 100%;
  width: 100%;
  background-color: #fff;
}
  .foods .delicacy{
    padding-top: 0;
  }
</style>
