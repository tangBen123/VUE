<template>
  <div class="box">
    <mt-header fixed title="点单中心">
      <mt-button   slot="left"><i class="iconfont icon-sousuo"></i></mt-button>
      <mt-button slot="right"><i class="iconfont icon-wode"></i></mt-button>
    </mt-header>
  </div>
</template>

<script>
    export default {
        name: "headerVue"
    }
</script>

<style lang="less" scoped>
  @headeIcon:18px;
  .icon-sousuo{
    color: #fff;
    font-size: @headeIcon;
  }
  .icon-wode{
    font-size: @headeIcon;
  }
  .mint-header{
    font-size: @headeIcon;
  }
  .box{
    position: fixed;
    top: 0;
    width: 100%;
    height: 40px;
    z-index: 2;
  }
</style>
