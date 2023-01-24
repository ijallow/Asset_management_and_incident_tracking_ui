import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from "./router/router.js";
import {Form} from 'vform'
import moment from 'moment'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';
import Toaster from '@meforma/vue-toaster';
import Spinner from './components/Spinner.vue'
import axios from './plugins/axios'

// import router from './router/router.js'

window.Form = Form
loadFonts()

const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: 'red',
};

const app = createApp(App)

app.use(store)
app.use(router)
app.use(vuetify)
app.use(moment)
app.use(VueSweetalert2, options)
app.use(Toaster)

//global registration of component
app.component('Spinner', Spinner)

app.mount('#app')