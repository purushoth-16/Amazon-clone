import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDtJLHJld46RVOQ4UcInmfqZBOcBs8kec8",
    authDomain: "clone-ca925.firebaseapp.com",
    projectId: "clone-ca925",
    storageBucket: "clone-ca925.appspot.com",
    messagingSenderId: "342285801010",
    appId: "1:342285801010:web:64e50e2a5a097e86128e2b",
    measurementId: "G-1417CKVL13"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig)

  const db=firebaseApp.firestore()
  const auth=firebase.auth()

  export{db,auth};