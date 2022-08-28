<!--  -->
<template>
  <div class="footerMusic" >
    <div class="footerLeft" @click="showPopup">
      <img :src="store.state.playList[store.state.playListIdx].al.picUrl" alt="">
      <div>
        <p class="gm">{{ store.state.playList[store.state.playListIdx].name }}</p>
        <div class="zz">
          <span v-for="item in store.state.playList[store.state.playListIdx].ar">
            {{ item.name }}&nbsp;
          </span>
        </div>

      </div>
    </div>
    <div class="footerRight">
      <svg v-if="store.state.musicBoolean" class="icon" aria-hidden="true" @click="play">
        <use xlink:href="#icon-zanting"></use>
      </svg>
      <svg v-else class="icon" aria-hidden="true" @click="play">
        <use xlink:href="#icon-bofang1"></use>
      </svg>
      <svg class="icon" aria-hidden="true" >
        <use xlink:href="#icon-liebiao"></use>
      </svg>
    </div>
    <audio ref="domRef" :src="store.state.musicUrl" controls autoplay @ended="next" @timeupdate="test" @durationchange="addDuration" @play="getLy"></audio>
    <!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell> -->
    <van-popup v-model:show="store.state.musicShow" position="bottom" :style="{ height: '100%' }" :close-on-click-overlay="false" @click="stop">
      <MusicDetails ref='detailsDom' @watchPlay="play" @switchMusic="switchMusic" @changeMu="changeMu "></MusicDetails>
    </van-popup>
  </div>
</template>

<script lang='ts' setup>
import { useStore } from 'vuex'
import MusicDetails from '../musicDetails/index.vue';
const store = useStore()
const domRef = ref()
const detailsDom = ref()
const getLy = () => {
  detailsDom.value.getLyric()
}
const play = () => {
  if (store.state.musicBoolean === false) {
    domRef.value.play()
    store.commit('show', true)
  } else {
    domRef.value.pause()
    store.commit('show', false)
  }
}
const stop = (event: MouseEvent) => {
  event.stopPropagation()
}
const next = () => {
  store.commit('urlUpdate', store.state.playListIdx + 1)
}
const show = ref(false);
const showPopup = () => {
  if (store.state.musicShow === false) {
    store.commit('changeMusicShow', true)
  } else {
    store.commit('changeMusicShow', false)
  }
};

const switchMusic = (val:'next' | 'back') => {
  if (val === 'next') {
    store.commit('urlUpdate', store.state.playListIdx + 1)
  } else {
    store.commit('urlUpdate', store.state.playListIdx - 1)
  }
}
  let time:any = null
  const test = () => {
    if (!time) {
      time = setTimeout(()=> {
        store.commit('changeCurrentTime',domRef.value.currentTime)
        time = null
      },500)
    }
  }
const addDuration = () => {
  store.commit('updateDuration',domRef.value.duration)
}

const changeMu = () => {
  console.log();
  domRef.value.currentTime = store.state.currentTime
}
// watch(() => domRef.value, (newVal) => {
//   console.log(newVal);
// })

</script>
<style scoped lang='scss'>
.footerMusic {
  // background-color: rgba($color: #a39d9d, $alpha: .6);
  background-color: #fff;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 1.3rem;
  border-top: 1px solid #999;
  display: flex;
  justify-content: space-between;
  align-items: center;

  audio {
    width: 100%;
    border-radius: 100px;
    display: none;
  }

  .footerLeft {
    display: flex;
    width: 80%;
    font-size: .4rem;
    align-items: center;

    span {
      font-size: .32rem;
      color: #999;
    }

    img {
      width: .8rem;
      border-radius: 50%;
      margin-right: 10px;
    }

    .gm {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 4rem;
    }

    .zz {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 4rem;
    }
  }

  .footerRight {
    display: flex;
    justify-content: space-between;

    & .icon:nth-last-child(1) {
      margin-left: .3rem;
    }
  }
}
</style>