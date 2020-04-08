import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

const fb = require('./firebaseConfig.js');

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        currentUser: null,
        isAuth: false,
        userProfile: {},
        records: [],
        selectedRecord: {},
        orders: [],
        selectedOrder: {}
    },
    actions: {
        fetchUserProfile({ commit, state }) {
            fb.usersCollection.doc(state.currentUser.uid).get().then(res => {
                commit('setUserProfile', res.data())
            }).catch(err => {
                console.log(err);
            })
        },
        clearData({ commit }) {
            commit('setCurrentUser', null)
            commit('setUserProfile', {})
            commit('setRecords', {})
        }
    },
    mutations: {

        setCurrentUser(state, val) {
            state.currentUser = val;
            state.isAuth = val === null ? false : true;
        },
        setUserProfile(state, val) {
            state.userProfile = val;
        },
        setRecords(state, val) {
            state.records = val;
        },
        selectRecord(state, val) {
            fb.recordsCollection.doc(val)
                .get().then(snapshot => {
                    if (!snapshot.exists) return undefined;
                    state.selectedRecord = snapshot.data();                    
                });
        },
        removeRecord(state, val){
            fb.recordsCollection.doc(val)
                .delete();
        },
        setOrders(state, val) {
            state.orders = val.filter(o => o.userEmail === state.currentUser.email);
        },
        selectOrder(state, val) {
            fb.ordersCollection.doc(val)
                .get().then(snapshot => {
                    if (!snapshot.exists) return undefined;
                    state.selectedOrder = snapshot.data();                    
                });
        },
        removeOrder(state, val){
            fb.ordersCollection.doc(val)
                .delete();
        }
    },
    plugins: [createPersistedState()]
})