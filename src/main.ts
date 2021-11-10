import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/routes'
import { store, key } from '@/store'
function runApp() {
    const app = createApp(App)
    app.use(router)
    app.use(store, key)
    app.mount('#app')
}

runApp()