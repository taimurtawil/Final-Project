import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'
import { faEnvelope, faLock, faCircleUser, faClock, faDumbbell, faUpload} from '@fortawesome/free-solid-svg-icons'
import './assets/main.scss'


library.add(faEnvelope, faLock, faCircleUser, faClock, faDumbbell, faUpload)
const app = createApp(App)


app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

