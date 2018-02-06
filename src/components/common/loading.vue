<template>
    <div class="load">
      <img src="../../assets/images/loading.gif" alt="">
    </div>
</template>

<script>
    export default {
        name: "loading"
    }
</script>

<style scoped>
  .load{
    position: fixed;
    top: 150px;
    left: 50%;
    margin-left: -75px;
  }
  .load img{
    width: 150px;
    height: 150px;
    display: block;
    margin: 50px auto;
  }
</style>
