import { createStore } from 'vuex';
import { authenticate } from '../api';
import { isValidJwt,EventBus } from '../utils/authenticate';
// Import modules
import auth from './modules/auth';
import common from './modules/common';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = createStore({
  modules: {
    auth,
    common,
  },
})
// eslint-disable-next-line no-unused-vars
const state = {
  user:{},
  jwt: ''
}
// eslint-disable-next-line no-unused-vars
const actions = {
  login(context, userData) {
    context.commit('setUserData',{userData})
    return authenticate(userData)
      .then (response => context.commit('setJwtToken',{ jwt: response.data}))
      .catch(error =>{
        console.log('Error Authenticate: ', error)
        EventBus.$emit('failedAuthenticate', error)
      })
  }
}
// eslint-disable-next-line no-unused-vars
const mutations = {
  setUSerData(state, payload){
    console.log('setUserData payload =', payload)
    state.iserData = payload.userData
  },
  setJwtToken (state, payload){
    console.log('setJwtToken payload =', payload)
    localStorage.token = payload.jwt.token
    state.jwt = payload.jwt
  }
}
// eslint-disable-next-line no-unused-vars
const getters = {
  isAuthenticated (state){
    return isValidJwt(state.jwt.token)
  }
}

export default store;
