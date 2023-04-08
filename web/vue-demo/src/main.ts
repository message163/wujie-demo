import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementUi from 'element-plus'
import 'element-plus/dist/index.css'
createApp(App).use(ElementUi).mount('#app')

declare global {
    interface Window {
        $wujie:{
            props:Record<string,any>
            bus:{
                $emit:any
            }
        }
    }
}