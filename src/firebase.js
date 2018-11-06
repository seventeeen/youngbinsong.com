import Vue from 'vue'
import firebase from 'firebase/app'
import VueFire from 'vuefire'
import 'firebase/storage'
import 'firebase/firestore'

Vue.use(VueFire)

firebase.initializeApp({
  apiKey: 'AIzaSyCp0i_KC75JLMBXL_JKDGA7b8YrmbiKNVA',
  authDomain: 'youngbinsong-com.firebaseapp.com',
  databaseURL: 'https://youngbinsong-com.firebaseio.com',
  projectId: 'youngbinsong-com',
  storageBucket: 'youngbinsong-com.appspot.com',
  messagingSenderId: '911019205648'
})

export const db = firebase.firestore()
db.settings({ timestampsInSnapshots: true })

export const storage = firebase.storage()
