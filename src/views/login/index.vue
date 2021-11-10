<template>
  <div>
    <h1>login</h1>
    <div>
      <el-button type="primary" @click="handleClickIncrement">累加</el-button>
    </div>
    <div>
      <router-link to="/">去首页</router-link>
    </div>
    <div>count:{{ count }}</div>
  </div>
</template>
<script lang="ts" setup>
import { computed, watch } from 'vue'
import { useStore } from '../../store'
const store = useStore()
const count = computed(() => store.state.count)
const handleClickIncrement = () => {
  store.commit('increment')
}

watch(count, (count, prevCount) => {
  console.log(count, prevCount)
})
</script>
