import Vue from 'vue'
import firebase from 'firebase/app'
import VueFire from 'vuefire'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './vuetify'

Vue.config.productionTip = false

Vue.use(VueFire)

firebase.initializeApp({
  apiKey: 'AIzaSyCp0i_KC75JLMBXL_JKDGA7b8YrmbiKNVA',
  authDomain: 'youngbinsong-com.firebaseapp.com',
  databaseURL: 'https://youngbinsong-com.firebaseio.com',
  projectId: 'youngbinsong-com',
  storageBucket: 'youngbinsong-com.appspot.com',
  messagingSenderId: '911019205648'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
