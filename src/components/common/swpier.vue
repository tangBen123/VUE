<template>
  <div class="banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="val in banList">
          <router-link :to="{path:'foods/food',query:{title:val.title,price:val.price,comment:val.comment,like:val.like,monthSale:val.monthSale}}">
            <img src="../../assets/images/3.jpg" alt="">
            <div class="desc" v-text="val.title"></div>
          </router-link>
        </div>
      </div>
      <!-- 如果需要分页器 -->
    </div>
    <transition name="router-slid" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import '../../../static/css/swiper-4.1.0.min.css'
  export default {
    name: "swpier",
    data(){
      return{
        banList:[
          {icon:'',title:"正宗韩国寿司，欢迎品尝！",price:'25',monthSale:845,comment:625,like:97},
          {icon:'../../assets/images/2.jpg',title:"农家菜馆~！",price:'19',monthSale:1000,comment:332,like:87},
          {icon:'../../assets/images/001.jpg',title:"新疆烤串，有你更精彩！",price:'32',monthSale:8000,comment:658,like:94}
        ]
      }
    },
    created(){

    },
    mounted(){
      var swiper = new Swiper('.swiper-container', {
        loop: true,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay:{
          delay:3000
        }
      });
    }
  }
</script>

<style scoped>
  .banner{
    width: 100%;
    padding-top: 50px;
  }
  .swiper-container {
    width:100%;
    height: 180px;
  }
  .swiper-container img{
    width: 100%;
    height: 100%;
  }
  .swiper-slide{
    position: relative;
  }
  .desc{
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    color: #fff;
    background-color: rgba(0,0,0,.3);
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: center;
  }
  .router-slid-enter-active, .router-slid-leave-active {
    transition: all .5s ease;
  }
  .router-slid-enter, .router-slid-leave-active {
    transform: translate3d(50px, 0, 0);
    opacity: 0;
  }
</style>
