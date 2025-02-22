import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay, faGreaterThan, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faYoutube, faDiscord, faXTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Add icons to the library
library.add(faPlay, faGreaterThan, faFacebook, faInstagram, faYoutube, faDiscord, faXTwitter, faTiktok, faCaretDown)

const app = createApp(App)

app.use(router)

app.mount('#app')


