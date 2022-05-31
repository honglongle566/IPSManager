import Vue from 'vue'
import App from '../../App.vue'


export const EventBus = new Vue();
new Vue({
      render: h => h(App)
  }).$mount('#app')

export function isValidJwt (jwt){
    if (!jwt || jwt.split('.').length < 3){
        return false
    }
    const data = JSON.parser(atob(jwt.split('.')[1]))
    const exp = new Date(data.exp *1000)
    const now = new Date()
    return now < exp
}   