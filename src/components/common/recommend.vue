<template>
    <div class="recommend">
      <div class="title">
       <span class="sign">——</span> 推荐商家 <span class="sign">——</span>
      </div>
      <!--<div class="selectNav">-->
        <!--<span v-for="(val,index) in selectNav" :class="{selectActive:val.show}" v-text="val.title" @click="selActive(index)"></span>-->
      <!--</div>-->
      <ul class="sales">
        <li class="salesLi" v-for="(val,index) in saleArr">
          <router-link tag="div" :to="{path:'foods/sales',query:{title:val.title}}">
            <img src="../../assets/images/001.jpg" alt="">
            <div class="right_con">
              <div class="title" v-text="val.title">
              </div>
                <span>
                  月销量：<span class="monColor">{{val.monthSale}}</span>
                </span><br>
                <span class="give">￥20起送/配送费约￥5元</span>
              <div class="type">
                <div class="bird">
                  蜂鸟专送
                </div>
                <div>
                  距您：<span v-text="val.kileMiter"></span>公里
                </div>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    
    <!--<transition name="router-slid" mode="out-in">
      <router-view></router-view>
    </transition>-->
</template>

<script>
    export default {
      name: "recommend",
      data(){
        return{
          selectNav:[
            {title:'综合排序',show:true},
            {title:'好评优先',show:false},
            {title:'距离最近',show:false},
            {title:'筛选',show:false},
          ],
          saleArr:[
            {title:'苏州嘻哈包子铺',monthSale:76,kileMiter:1.5,time:"15分钟"},
            {title:'广州酒家',monthSale:128,kileMiter:2.3,time:"8分钟"},
            {title:'民信老铺',monthSale:564,kileMiter:4.5,time:"12分钟"},
            {title:'大闸蟹旗舰店',monthSale:246,kileMiter:0.8,time:"4分钟"},
            {title:'大闸蟹旗舰店',monthSale:246,kileMiter:0.8,time:"20分钟"},
          ]
        }
      },
      methods:{
        // selActive: function (index) {
        //   for(let i=0;i<this.selectNav.length;i++){
        //     this.selectNav[i].show = false ;
        //     if(i == index){
        //       this.selectNav[index].show = true ;
        //     }
        //   }
        // }
      },
      mounted(){
        // console.log(this.selectNav)
      }
    }
</script>

<style scoped lang="less">
  .recommend{
    padding: 15px;
    padding-bottom: 50px;
  }
  .title{
    font: 16px "微软雅黑";
    font-weight: bold ;
    text-align: center;
    letter-spacing: 2px;
    color: #666;
    margin-bottom: 5px;
  }
  .selectNav{
    display: flex;
    span{
      flex: 1;
      text-align: center;
      line-height: 30px;
      font-size: 14px;
    }
  }
  .selectActive{
    font-weight: bold;
  }
  .salesLi{
    border-bottom: 1px solid #eee;
    padding: 10px;
    overflow: hidden;
  }
  .salesLi img{
    width: 60px;
    height: 60px;
    float: left;
    display: block;
    margin-right: 10px;
  }
  .right_con{
    float: left;
    width: 255px;
    position: relative;
  }
  .right_con .title{
    font-size: 14px;
    text-align: left;
  }
  .sign{
    color: #ddd;
  }
  .monColor{
    color: orangered;
  }
  .give{
    color: #999;
  }
  .type{
    position: absolute;
    top: 20px;
    right: 0;
  }
  .bird{
    width: 52px;
    background-color: cornflowerblue;
    color: #fff;
    text-align: center;
    border-radius:3px ;
    margin: 5px auto;
    margin-top: 0;
  }
</style>
