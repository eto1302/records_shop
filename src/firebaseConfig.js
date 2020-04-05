import firebase from 'firebase'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyBSTG_o0OxDEztBY7s_NE-cE-FQf5Ysvws",
    authDomain: "recordsshop-ec441.firebaseapp.com",
    databaseURL: "https://recordsshop-ec441.firebaseio.com",
    projectId: "recordsshop-ec441",
    storageBucket: "recordsshop-ec441.appspot.com",
    messagingSenderId: "193826217547",
    appId: "1:193826217547:web:4e041ae2889aea680f37ce"
};

firebase.initializeApp(config)

const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

const usersCollection = db.collection('users')
const recordsCollection = db.collection('records')
const ordersCollection = db.collection('orders')

export {
    db,
    auth,
    currentUser,
    usersCollection,
    recordsCollection,
    ordersCollection
}