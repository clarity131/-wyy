<!--  -->
<template>
  <div class="musicList">
    <div class="musicTop">
      <div class="title1">{{title1}}</div>
      <div class="title2">{{title2}}</div>
    </div>
    <div class="musicContent">
      <van-swipe :loop="false" :width="150" class="my-swiper" :show-indicators="false">
        <van-swipe-item v-for="item in list" :key="item.id">
          <div class="imgBox"><img :src="item.picUrl" alt=""/></div>
          <span class="playCount">
            {{changeCount(item.playCount)}}
          </span>
          <span class="name">{{item.name}}</span>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { personaLized } from '@/http/api';
import { personaLizedRes } from 'types';

  let { title1, title2, list } = toRefs(reactive<{
    title1: string
    title2: string
    list: personaLizedRes[]
  }>({
    title1: '发现好歌单',
    title2: '查看更多',
    list: []
  }))
  const getMusicList = async () => {
    const data = await personaLized()
    list.value = data.result
    console.log(list.value)
  }
  const changeCount = (num:number) => {
    if (num >= 100000000) {
      return (num / 100000000).toFixed(1) + "亿"
      } else if (num > 10000) {
        return (num / 10000).toFixed(1) + "万"
      }
  }
  getMusicList()
</script>
<style scoped lang='scss'>
  .musicList {
    margin: .7rem .2rem;
    .musicTop{
      display: flex;
      justify-content: space-between;
      .title1 {
        font-weight: 600;
      }
      .title2 {
        border-radius: .5rem;
        border: .02rem solid rgb(238, 238, 238);
        padding: 0 .2rem;
        font-size: .4rem;
      }
    }
    .musicContent {
      width: 100%;
      margin: .4rem 0;
      .van-swipe-item {
        margin-right: .2rem;
        
      }
      .my-swiper {
        height: 100%;
        img {
          width: 100%;
        }
        .playCount {
          display: flex;
          align-items: center;
          position: absolute;
          display: flex;
          font-size: .35rem;
          top: 0;
          right: .1rem;
          color: white;
          .icon {
            width: .8rem;
          }
        }
        .name {
          font-size: .32rem;
        }
      }
      .imgBox {
        border-radius: .3rem;
        overflow: hidden;
      }
    }
  }

</style>