<!--  -->
<template>
  <div class="home">
    <TopNav></TopNav>
    <Swiper :banners="banners"></Swiper>
    <IconList></IconList>
    <MusicList></MusicList>
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
 getBanner()

 
</script>
<style scoped lang='scss'>
</style>