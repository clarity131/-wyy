<!--  -->
<template>
  <div class="itemMusicTop">
    <img :src="props.list.playlist.coverImgUrl" alt="" class="bgImg">
    <div class="navTop">
      <div class="navLeft" @click="router.go(-1)">
        <svg class="icon" aria-hidden="true" >
          <use xlink:href="#icon-xiangzuojiantou"></use>
        </svg>
        <div>歌单</div>
      </div>
      <div class="navRight">
        <svg class="icon" aria-hidden="true" @click="$router.push('/search')">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-liebiao"></use>
        </svg>
      </div>
    </div>
    <div class="itemContent">
      <div class="leftImg">
        <img :src="props.list.playlist.coverImgUrl" alt="">
      </div>
      <div class="rightContent">
        <span>{{props.list.playlist.name}}</span>
        <div class="userInfo">
          <img :src="props.list.playlist.creator.avatarUrl" alt="">
          <span>{{props.list.playlist.creator.nickname}}</span>
        </div>
        <span class="userInfoVal">{{props.list.playlist.description}}</span>
      </div>
    </div>
    <div class="itemTool">
      <div class="itemToolBox">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shouye"></use>
        </svg>
        <div>{{props.list.playlist.commentCount}}</div>
      </div>
      <div class="itemToolBox">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
        <div>{{props.list.playlist.shareCount}}</div>
      </div>
      <div class="itemToolBox">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiazai"></use>
        </svg>
        <div>下载</div>
      </div>
      <div class="itemToolBox">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-duoxuanxuanzhong2"></use>
        </svg>
        <div>多选</div>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { playListDetailRes } from 'types/playListDetail';
  const props = defineProps<{ list: playListDetailRes }>()
  let router = useRouter()
</script>
<style scoped lang='scss'>
 .itemMusicTop{
    width: 100%;
    position: relative;
    margin-top: 10px;
    .bgImg {
      width: 100%;
      position: fixed;
      z-index: -999;
      height: 8rem;
      filter: blur(30px);
    }
    .navTop {
      top: .2rem;
      position: fixed;
      width: 100%;
      height: .88rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .navLeft, .navRight {
        width: 2.8rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .2rem;
        color: #999;
        .icon {
          fill: #999
        }
      }
    }
    .itemContent {
      display: flex;
      width: 100%;
      padding: 0 .2rem;
      margin-top: 1.48rem;
      .leftImg {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 0.2rem;
        overflow: hidden;
        margin-right: .8rem;
        img {
          width: 100%;
        }
      }
      .rightContent {
        flex: 1;
        font-size: .4rem;
        color: #fff;
        font-weight: 600;
        .userInfo {
          display: flex;
          margin: .2rem 0;
          align-items: center;
          color: darkgray;
          font-size: .32rem;
          img {
            width: .8rem;
            border-radius: 50%;
            margin-right: .2rem;
          }
        }
        .userInfoVal {
          color: darkgray;
          font-size: .32rem;
          display: block;
          -webkit-line-clamp: 2;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
    .itemTool {
      display: flex;
      justify-content: space-around;
      margin: .5rem 0 1rem 0;
      .itemToolBox {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: .32rem;
        .icon {
          fill: #fff;
          margin-bottom: .2rem;
        }
      }
    }
  }
</style>
