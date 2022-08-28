<!--  -->
<template>
  <div class="search">
    <div class="searchTop">
      <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
        <use xlink:href="#icon-xiangzuojiantou"></use>
      </svg>
      <input type="text" v-model="keywords" @keyup.enter="searchM">
    </div>
    <div class="musicList">
      <div v-for="(item, i) in songs" :key="item.id" class="musicItem" @click="playMusic(i)">
        <div class="index">
          {{i + 1}}
        </div>
        <div class="musicName">
          {{ item.name }}
          <div class="musicAuthor">
            <div v-for="item2 in item.ar">
              {{ item2.name }}&nbsp;
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { searchMusic } from '@/http/api'
import { songsItem } from 'types/playListDetail';
const router = useRouter()
const store = useStore()

const keywords = ref<string>('')
const songCount = ref<number>(0)
const songs = ref<songsItem[]>([])
const searchM = async () => {
  const res = await searchMusic({ keywords: keywords.value + '' })
  songCount.value = res.result.songCount
  songs.value = res.result.songs
}
const playMusic = (i: number) => {
  store.commit('updateVal', [songs.value[i]])
  store.commit('urlUpdate', i)
  store.commit('changeMusicShow', true)
}
</script>
<style scoped lang='scss'>
.search {
  width: 100%;
  padding: .2rem .4rem;
  margin-bottom: 1.3rem;
  .searchTop {
    width: 100%;
    display: flex;
    align-items: center;

    input {
      width: 100%;
      border: 0;
      height: 30px;
      border-bottom: 1px solid blue;
      margin-left: .2rem;
    }
  }

  .musicList {
    width: 100%;

    .musicItem {
      width: 100%;
      height: 1.5rem;
      margin-top: .2rem;
      display: flex;
      color: #999;
      .index {
        width: .6rem;
        text-align: center;
      }
      // justify-content: center;
      // flex-direction: column;
      align-items: center;
      .musicName {
        margin-left: .2rem;
        color: black;
        font-weight: 500;
        flex: 1;
        font-size: .5rem;
        .musicAuthor {
          font-size: .32rem;
          display: flex;
           color: #999;
           margin-top: .1rem;
        }
      }


    }
  }
}
</style>