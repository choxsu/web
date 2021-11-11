import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/routes'
import { store, key } from '@/store'

// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

function runApp() {
    const app = createApp(App)
    app.use(router)
    app.use(store, key)
    app.mount('#app')
}

runApp()