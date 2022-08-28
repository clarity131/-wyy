<!--  -->
<template>
  <img class="bacImg" :src="store.state.playList[store.state.playListIdx].al.picUrl" alt="">
  <div class="musicDetails">
    <div class="detailsTop">
      <div class="left">
        <svg class="icon" aria-hidden="true" @click="showMusic">
          <use xlink:href="#icon-xiafang"></use>
        </svg>
      </div>
      <div class="title">
        <p>{{ store.state.playList[store.state.playListIdx].name }}</p>
        <div class="author">
          <p v-for="item in store.state.playList[store.state.playListIdx].ar">{{ item.name }} &nbsp;</p>
        </div>

      </div>
      <div class="right">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
      </div>
    </div>
    <transition name="fade">
      <div v-show="isLyricShow" class="detailsContent" @click="changeLyricShow">
        <img src="@/assets/needle-ab.png" alt="" class="img_needle_ar"
          :class="{ img_needle_ar_active: store.state.musicBoolean }">
        <img src="@/assets/d7e4e3a244701ee85fecb5d4f6b5bd57.png" alt="" class="img_cd">
        <img :src="store.state.playList[store.state.playListIdx].al.picUrl" alt="" class="img_ar"
          :class='store.state.musicBoolean === true ? "img_ar_active" : "img_ar_paused"'>
      </div>
    </transition>
    <transition name="fade">
      <div v-show="!isLyricShow" class="musicLyric" @click="changeLyricShow">
        <p v-for="item in lyricRes" :key="item"
          :class="{ active: (store.state.currentTime * 1000 >= item.time && store.state.currentTime * 1000 < item.pre) }">
          {{ item.lrc }}
        </p>
      </div>
    </transition>
    <div class="footerContent">
      <input ref="inDom" type="range" class="range" min="0" :max="store.state.duration" v-model="store.state.currentTime"
        step="0.05"  :onchange="change">
    </div>
    <div class="musicMedia">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-aixin"></use>
      </svg>
      <svg class="icon" aria-hidden="true" @click="switchMusic('back')">
        <use xlink:href="#icon-shangyishoushangyige"></use>
      </svg>
      <svg v-if="store.state.musicBoolean" class="icon" aria-hidden="true" @click="play">
        <use xlink:href="#icon-zanting"></use>
      </svg>
      <svg v-else class="icon" aria-hidden="true" @click="play">
        <use xlink:href="#icon-bofang"></use>
      </svg>
      <svg class="icon" aria-hidden="true" @click="switchMusic('next')">
        <use xlink:href="#icon-xiayigexiayishou"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-liebiao"></use>
      </svg>
    </div>
  </div>
</template>

<script lang='ts' setup>


import { lyric } from '@/http/api';
import { ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const lyricRes = ref<any[]>([])
const isLyricShow = ref<boolean>(true)
const inDom = ref()
const emits = defineEmits<{
  (e: 'watchPlay'): void
  (e: 'switchMusic', val: 'next' | 'back'): void
  (e:'changeMu'): void
}>()
const showMusic = () => {
  store.commit('changeMusicShow', false)
}
const play = () => {
  emits('watchPlay')
}

const switchMusic = (val: 'next' | 'back') => {
  emits('switchMusic', val)
}

const getLyric = async () => {
  let data = await lyric({ id: store.state.playList[store.state.playListIdx].id })
  lyricRes.value = data.lrc.lyric.split('\n').map((item, i) => {
    let min = item.slice(1, 3)
    let sec = item.slice(4, 6)
    let mill = item.slice(7, 10)
    let lrc = item.slice(11, item.length)
    let time = parseInt(min) * 60 * 1000 + parseInt(sec) * 1000 + parseInt(mill)
    if (isNaN(Number(mill))) {
      mill = item.slice(7, 9)
      lrc = item.slice(10, item.length)
      time = parseInt(min) * 60 * 1000 + parseInt(sec) * 1000 + parseInt(mill)
    }
    return { min, sec, mill, lrc, time }
  })
  lyricRes.value.slice(-1, 1)
  lyricRes.value.forEach((item, i) => {
    if (i === lyricRes.value.length - 1) {
      item.pre = 0
    } else {
      item.pre = lyricRes.value[i + 1].time
    }
  })
}

getLyric()

const changeLyricShow = () => {
  isLyricShow.value = !isLyricShow.value
}
const change = () => {
  store.commit('changeCurrentTime',inDom.value.value)
  emits('changeMu')
}

defineExpose({ getLyric })

</script>
<style scoped lang='scss'>
.bacImg {
  height: 100%;
  position: fixed;
  z-index: -999;
  transform: translateX(-20%);
  filter: blur(30px);
  transition: all 2s;
}

@keyframes rotate {
  0% {
    transform: rotateZ(0deg);
  }

  100% {
    transform: rotateZ(360deg);
  }
}

.musicDetails {
  // padding: .4rem .4rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  .title {
    flex: 1;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .author {
      text-align: center;
      overflow: hidden;
      white-space: nowrap;
      color: #999;
      font-size: .32rem;
      display: flex;
    }
  }

  .detailsTop {
    display: flex;
    align-items: center;
    padding: .4rem .4rem 0 .4rem;
    // position: relative;
    z-index: 1;
    .left,
    .right {
      width: .8rem;
      height: .8rem;
      display: flex;
      align-items: center;
      justify-content: center;

      .icon {
        fill: #000
      }
    }
  }

  .detailsContent {
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    .img_needle_ar {
      width: 2.5rem;
      height: 4rem;
      position: absolute;
      transform-origin: 0 0;
      transform: rotate(-35deg);
      transition: all 2s;
      top: 2.5rem;
      left: 45%;
    }

    .img_needle_ar_active {
      transform: rotate(-10deg);
    }

    .img_cd {
      width: 7rem;
      height: 7rem;
      position: absolute;
      z-index: -1;
      top: 4rem;

    }

    .img_ar {
      width: 4.5rem;
      height: 4.5rem;
      border-radius: 50%;
      position: absolute;
      top: 5.25rem;
      animation: rotate 10s linear infinite;
      z-index: -1;
    }

    .img_ar_active {
      animation-play-state: running;
    }

    .img_ar_paused {
      animation-play-state: paused
    }
  }

  .musicMedia {
    width: 100%;
    height: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .4rem .4rem .6rem .4rem;

    .icon {
      fill: #fff;
      animation: all .5s ease-in-out;
    }

    .icon:nth-child(3) {
      width: 1.2rem;
      height: 1.2rem;
    }
  }

  .musicLyric {
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    padding: .2rem .2rem;

    p {
      text-align: center;
      color: rgb(192, 186, 186);
      margin-bottom: .6rem;
      font-size: .4rem;
      transition: all .5s ease-in-out;
    }

    .active {
      color: #fff;
      font-size: .6rem;
    }
  }

  .footerContent {
    width: 100%;
    padding: .2rem;
    position: absolute;
    bottom: 1.5rem;

    .range {
      width: 100%;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .1s
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active in <2.1.8 */
  {
  opacity: 0
}
</style>