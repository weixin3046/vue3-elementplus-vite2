import { createApp } from 'vue'
import { setupStore } from './store' // 状态管理
import router, { setupRouter } from './routes/index'
import { setupElement } from './libs/element'

import App from './App.vue'
import SvgIcon from './components/SvgIcon/index.vue'

// import './styles/index.scss'

const app = createApp(App)

app.component('svg-icon', SvgIcon)

setupStore(app) // 引入状态管理

setupRouter(app) //引入路由

setupElement(app)

router.isReady().then(()=>{
    app.mount('#app')
})

