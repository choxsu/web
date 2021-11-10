<template>
  <div>
    <h1>home</h1>
    <div>vuex中的count:{{ count }}</div>
    <div>
      <router-link to="/login">去登录</router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed,watch } from 'vue'
import { useStore } from '@/store'
const store = useStore()
const count = computed(() => store.state.count)
watch(
  () => store.state.count,
  (count, prevCount) => {
    console.log(count, prevCount)
  }
)
</script>
