import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/routes'
import { store, key } from '@/store'

// 全量引入
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'

function runApp() {
    const app = createApp(App)
    app.use(router)
    app.use(store, key)
    // ElementPlus
    app.use(ElementPlus)
    app.mount('#app')
}

runApp()