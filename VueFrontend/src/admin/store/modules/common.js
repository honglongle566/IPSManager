const state = {
  common: {
    collapsedSideBar: true,
  },
};

const getters = {
  collapsedSideBar: (state) => state.common.collapsedSideBar,
};


const actions = {};

const mutations = {
  TOGGLE_SIDEBAR(state) {
    state.common.collapsedSideBar = !state.common.collapsedSideBar;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
