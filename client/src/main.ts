import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Oruga from '@oruga-ui/oruga-next'
import '@oruga-ui/oruga-next/dist/oruga.css'

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'
import { faEnvelope, faLock, faCircleUser, faClock, faDumbbell, faUpload, faHome, faEllipsis, faRightFromBracket, faWeightScale} from '@fortawesome/free-solid-svg-icons'
import './assets/main.scss'



library.add(faEnvelope, faLock, faCircleUser, faClock, faDumbbell, faUpload, faHome, faEllipsis, faRightFromBracket, faWeightScale)
const app = createApp(App)


app.use(createPinia())
app.use(router)
app.use(Oruga)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

