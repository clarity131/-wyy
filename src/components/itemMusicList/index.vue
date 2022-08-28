<!--  -->
<template>
  <div class="itemMusicList">
    <div class="itemListTop">
      <div class="itemListLeft">
        <svg class="icon" aria-hidden="true" @click="playAll">
          <use xlink:href="#icon-bofang1"></use>
        </svg>
        <div class="itemListTitle">
          <span >播放全部</span>
          <span class="min">(共{{ props.list.songs.length }}首)</span>
        </div>
      </div>
      <div class="itemListRight">收藏({{ props.list.sc }})</div>
    </div>
    <div class="itemListContent" v-for="(item, i) in props.list.songs" @click="playMusic(i)">
      <div class="itemListContentLeft">
        <div class="itemListIdx">{{i + 1}}</div>
        <div class="itemListName">
          <div>{{item.name}}</div>
          <div class="author" >
            <div v-for="item2 in item.ar">{{item2.name}}&nbsp;&nbsp;</div>
          </div>
        </div>
      </div>
      <div class="itemListContentRight">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-liebiao"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import store from '@/store';
import { playListTrackAllRes, songsItem } from '../../../types/playListDetail';


const props = defineProps<{
  list: playListTrackAllRes
}>()

const playMusic = (i:number) => {
  store.commit('updateVal', props.list.songs)
  store.commit('urlUpdate',i)
  store.commit('changeMusicShow', true)
}
const playAll = () => {
  store.commit('updateVal', props.list.songs)
  store.commit('urlUpdate',0)
}

</script>
<style scoped lang='scss'>
.itemMusicList {
  width: 100%;
  background-color: #fff;
  padding: .4rem;
  border-top-right-radius: .4rem;
  border-top-left-radius: .4rem;

  // margin-top: 500px;
  .itemListTop {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .itemListLeft {
      display: flex;
      align-items: center;
      font-size: .4rem;
      font-weight: 600;

      .icon {
        margin-right: .4rem;
      }

      .itemListTitle {
        display: flex;
        align-items: center;

        .min {
          font-size: .32rem;
          color: darkgray;
        }
      }
    }

    .itemListRight {
      width: 2.7rem;
      height: 1rem;
      background-color: rgb(255, 24, 0);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 1rem;
      color: #fff;
      font-size: .34rem;
    }
  }

  .itemListContent {
    margin: .6rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:nth-last-child(1) {
      margin-bottom: 1.3rem;
    }
    .itemListContentLeft {
      display: flex;
      align-items: center;
      .itemListIdx {
        color: darkgray;
        width: .5rem;
        text-align: center;
      }

      .itemListName {
        // margin-right: .2rem;
        // color: bisque;
        margin: 0 0 0 .6rem;
        font-size: .4rem;

        .author {
          display: flex;
          font-size: .32rem;
          color: rgb(196, 198, 198);
          width: 7rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}

</style>