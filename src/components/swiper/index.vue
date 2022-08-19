<!--  -->
<template>
  <div class="banner">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in banners" :key="item.targetId">
        <img :src="item.imageUrl" alt="">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script lang='ts' setup>
import {Ibanner} from 'types/banner'
  const props = defineProps<{
    banners: Ibanner[]
  }>()
  
</script>
<style scoped lang='scss'>
.banner{
  width: 100%;
  padding: .2rem;
    .my-swipe  {  
        border-radius: .5rem;
      .van-swipe__track {
        .van-swipe-item {
          img {
            width: 100%;
          }
        }
      }
    }
  }
</style>