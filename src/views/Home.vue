<!--  -->
<template>
  <div class="home">
    <TopNav></TopNav>
    <keep-alive>
      <Swiper :banners="banners"></Swiper>
    </keep-alive>
    <IconList></IconList>
    <keep-alive>
    <MusicList></MusicList>
    </keep-alive>
    <!-- <button @click="dl">登录</button> -->
  </div>
</template>

<script lang='ts' setup>
import TopNav from '@/components/TopNav/index.vue';
import Swiper from '@/components/swiper/index.vue';
import {Ibanner} from 'types/banner'
import { banner } from '@/http/api';
import IocoList from '@/components/IconList/index.vue';
 let { banners } = toRefs(reactive<{
  banners: Ibanner[]
 }>({
  banners: []
 }))
 const getBanner = async () => {
    const data = await banner()
    banners.value = data.banners
 }
//  const dl = async () => {
//     let data = await login()
//     console.log(data)
//  }
 getBanner()

 
</script>
<style scoped lang='scss'>
</style>