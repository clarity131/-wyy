<!--  -->
<template>
  <div :class="{'active': title === pd}">
    <div class="imgBox">
      <slot></slot>
    </div>
    {{title}}
  </div>
</template>

<script lang='ts' setup>
  const props = defineProps<{
    title: string,
    url?: string,
    pd?: string
  }>()
</script>
<style scoped lang='scss'>
 .active {
  font-weight:900;
 }
   .imgBox {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>