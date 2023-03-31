import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Wujie from 'wujie-vue3' //引入一下引入对应的框架
const app = createApp(App)



app.use(router).use(Wujie) //注册一下

app.mount('#app')
