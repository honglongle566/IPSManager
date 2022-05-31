import Vue from 'vue';
import App from '../../App.vue'

export const EventBus = new Vue();
new Vue({
  render: h => h(App)
}).$mount('#app')

export function isValidJwt (jwt) {
  if (!jwt || jwt.split('.').length < 3) {
    return false
  }
  const data = JSON.parse(atob(jwt.split('.')[1]))
  const exp = new Date(data.exp * 1000) // JS deals with dates in milliseconds since epoch
  const now = new Date()
  return now < exp
}