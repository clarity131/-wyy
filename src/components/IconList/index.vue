<!--  -->
<template>
  <div class="iconList">
    <Item v-for="item in title" :title="item.name">
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="item.back"></use>
      </svg>
    </Item>
  </div>
</template>

<script lang='ts' setup>
  let { title } = toRefs(reactive<{
    title: {name:string,back:string}[],
  }>({
    title: [{name:'每日推荐',back:'#icon-tuijian1'},{name:'私人FM',back:'#icon-dianshi'},{name:'歌单',back:'#icon-gedan1'},{name:'排行榜',
    back:'#icon-paihangbang'}],
  }))
</script>
<style scoped lang='scss'>
  .iconList {
    display:flex;
    justify-content: space-between;
    margin: .3rem .5rem;
    font-size: .35rem;
    text-align: center;
  }
  .icon {
    width:1rem;
    height:1rem;
  }
</style>