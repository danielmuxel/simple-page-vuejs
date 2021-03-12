import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// https://www.npmjs.com/package/@fortawesome/vue-fontawesome#get-started
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret, faHome, faUser, faEye, faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faJs, faHtml5, faCss3, faVuejs, faAngular, faGit, faDocker, faJsSquare, faNpm, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import solid from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import './assets/style.css'


fontawesome.library.add(brands, solid)
// library.add(faUserSecret, faHome, faUser, faEye, faEnvelope, faJs, faHtml5, faCss3, faVuejs, faAngular, faGit, faDocker, faJsSquare, faNpm, faNodeJs)




createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
