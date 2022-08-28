<script setup lang="ts">
import { useStore } from 'vuex';
import FooterMusic from './components/footerMusic/index.vue';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
    const store = useStore()
</script>

<template>
    <router-view></router-view>
    <FooterMusic v-if="store.state.playList[0]"></FooterMusic>
</template>

<style lang="scss">
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }
 .icon {
  width: .6rem;
  height: .6rem;
 }
 a {
    color: black;
 }
</style>
