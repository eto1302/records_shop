import Vue from 'vue'
import Vuex from 'vuex'
const fb= require('./firebaseConfig.js');

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        currentUser: null,
        isAuth: false,
        userProfile: {}
    },
    actions: {
        fetchUserProfile({commit, state}) {
            fb.usersCollection.doc(state.currentUser.uid).get().then(res => {
                commit('setUserProfile', res.data())
            }).catch(err => {
                console.log(err);
            })
        },
        clearData({commit}){
            commit('setCurrentUser', null)
            commit('setUserProfile', {})
        }
    },
    mutations: {
        
        setCurrentUser(state, val){
            state.currentUser = val;
            state.isAuth = true;
        },
        setUserProfile(state, val) {
            state.userProfile = val;
        }
    }
})