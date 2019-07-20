import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyArahuXEL_aGVK42Hrn5cmg4jdM_0YjYl8",
  authDomain: "electron-chatnapro.firebaseapp.com",
  databaseURL: "https://electron-chatnapro.firebaseio.com",
  projectId: "electron-chatnapro",
  storageBucket: "electron-chatnapro.appspot.com",
  messagingSenderId: "308446187166",
  appId: "1:308446187166:web:b7cb8d13660d10ce"
}
firebase.initializeApp(config)
firebase.firestore().settings({
  timestampsInSnapshots: true
})

export const myFirebase = firebase
export const myFirestore = firebase.firestore()
export const myStorage = firebase.storage()

