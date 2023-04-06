import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { createPinia } from 'pinia'
import { Icon } from '@iconify/vue';
import  HeaderTitle  from './components/HeaderTitle.vue'
import 'flowbite';
import './style.css'
import './index.css'

import { register } from './plugins/global-components'
const pinia = createPinia()
const app = createApp(App)

register(app)
app.component('Icon', Icon)
app.component('HeaderTitle',HeaderTitle)
app.use(router)
app.use(pinia)
app.mount('#app')

