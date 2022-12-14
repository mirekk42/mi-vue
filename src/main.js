import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './server/server'


import './assets/main.css'
import './assets/style.css'
import './assets/elevation.css'
import './assets/materialIcons.css'
import './assets/base.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
