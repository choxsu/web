<template>
  <n-form :model="form" ref="formRef" label-width="100px" class="login-form">
    <n-form-item label="用户名">
      <n-input v-model:value="form.name" placeholder="请输入用户名"></n-input>
    </n-form-item>
    <n-form-item label="密码">
      <n-input type="password" placeholder="请输入密码" v-model:value="form.pwd"></n-input>
    </n-form-item>
    <n-form-item>
      <n-button class="block" type="primary" @click="submitForm">提交</n-button>
    </n-form-item>
  </n-form>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useMessage, useNotification } from 'naive-ui'
interface Form {
  name: string
  pwd: string
}
const form = ref<Form>({
  name: '',
  pwd: '',
})
const formRef = ref(null)

const router = useRouter()
const route = useRoute()
const notification = useNotification()
function submitForm() {
  const { name, pwd } = form.value
  if (name && pwd) {
    // 定时器模拟登录
    setTimeout(() => {
      // 模拟信息存储到本地
      localStorage.setItem('user', JSON.stringify({ name, pwd }))
      // 跳转到上一次访问的页面 如果用户直接进入登录页面，那么就跳转到 '/'首页
      const path: string = (route.query as { url?: string }).url || '/'
      router.push(path)
    })
  } else {
    notification['error']({
      content: '用户名或密码不能🙅‍♀️为空',
      meta: '温馨提示',
      duration: 2500,
    })
  }
}
</script>
<style lang="less">
.login-form {
  width: 500px;
  margin: 200px auto;
}
.block {
  width: 100%;
}
</style>
