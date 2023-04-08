import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Wujie from 'wujie-vue3' //引入一下引入对应的框架
//import Wujie from 'wujie-vue-setup'
const { preloadApp } = Wujie
const app = createApp(App)


app.use(router).use(Wujie) //注册一下

app.mount('#app')

preloadApp({ name: "vue3", url: "http://127.0.0.1:5174/", exec: true })
preloadApp({ name: "react", url: "http://127.0.0.1:5175/", exec: true })