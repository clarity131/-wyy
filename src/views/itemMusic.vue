<!--  -->subscribedCount
<template>
  <div>
    <ItemMusicTop :list="playListItem"></ItemMusicTop>
    <ItemMusicList :list="trackAll"></ItemMusicList>
  </div>
</template>

<script lang='ts' setup>
  import { playListDetail, playListTrackAll } from '@/http/api';
  import { playListDetailRes, playListTrackAllRes } from 'types/playListDetail';
  import { useRouter } from 'vue-router'
  import ItemMusicTop from '@/components/itemMusicTop/index.vue'
  import ItemMusicList from '../components/itemMusicList/index.vue'
import { useStore } from 'vuex';
  const router = useRouter()
  const store = useStore()
  let { playListItem, trackAll } = toRefs(reactive<{
    playListItem: playListDetailRes
    trackAll: playListTrackAllRes
  }>
  ({
    playListItem: {
      playlist: {
        creator: {avatarUrl:'',nickname:'', description:''},
        subscribedCount: 0
      }, 
      privileges: []
    },
      trackAll: {
        privileges: [],
        songs: [{id:0}],
        sc: 0
      }
  }))

  const getPlayListDetail = async() => {
    let id:string = router.currentRoute.value.query && router.currentRoute.value.query.id as string
    let data = await playListDetail({id})
    playListItem.value = data
    let res = await playListTrackAll( {id} )
    trackAll.value = res
    trackAll.value.sc = data.playlist.subscribedCount
  }
  getPlayListDetail()
</script>
<style scoped lang='scss'>
</style>