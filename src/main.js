import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(ElementPlus).mount('#app')

const app2 = createApp(App)

app2.use(ElementPlus)
app2.mount('#app2')