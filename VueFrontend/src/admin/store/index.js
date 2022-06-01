import { createStore } from 'vuex'

// Import modules
import auth from './modules/auth'
import common from './modules/common'
import userListView from './modules/userListView'

const store = createStore({
  modules: {
    auth,
    common,
    userListView,
  },
})

export default store
