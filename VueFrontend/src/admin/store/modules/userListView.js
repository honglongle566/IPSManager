const state = {
  userListView: {
    isShowEdit: false,
  },
}

const getters = {
  isShowEdit: (state) => state.userListView.isShowEdit,
}

const actions = {}

const mutations = {
  TOGGLE_MODEL_SHOW_EDIT(state) {
    console.log('quang')
    state.userListView.isShowEdit = !state.userListView.isShowEdit
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
