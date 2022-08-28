<!--  -->
<template>
  <div class="topNav">
    <div class="topLeft">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-24gf-playlistMusic2"></use>
      </svg>
    </div>
    <div class="topContent" >
      <Item v-for="item in title" :title="item.name" :pd="xs" @click="qiehuan(item.name)">
      </Item>
    </div>
    <div class="topRight" @click="$router.push('/search')">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
    </div>
  </div>
</template>

<script lang='ts' setup>
import Item from '../Item.vue';
let { title, xs } = toRefs(reactive<{
  title: {name:string}[],
  xs: string
}>({
  title: [{name:'我的'},{name:'发现'},{name:'云村'},{name:'视频'}],
  xs: '发现'
}))
const qiehuan = (val: string):void => {
  xs.value = val
}

</script>
<style scoped lang='scss'>
  .topNav {
    height: .88rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: .3rem;
    margin-top: .2rem;
    .topContent {
      display: flex;
      justify-content: space-around;
      height: 100%;
      width: 65%;
      align-items: center;
    }
    .topLeft, .topRight {
      height: 100%;
      width: .6rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>