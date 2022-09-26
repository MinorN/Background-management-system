import { getToken, setToken, removeToken } from '@/utils/auth'
import { login } from '@/api/user.js'

const state = {
  token: getToken()
}
const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
    setToken(token)
  },
  REMOVE_TOKEN(state) {
    state.token = null
    removeToken()
  }
}
const actions = {
  async login(context, data) {
    const result = await login(data)
    context.commit('SET_TOKEN', result)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
