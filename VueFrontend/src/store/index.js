import { createStore } from 'vuex';

// Import modules
import auth from './modules/auth';
import common from './modules/common';

const store = createStore({
  modules: {
    auth,
    common,
  },
});

export default store;
