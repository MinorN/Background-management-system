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
  async LOGIN(context, data) {
    const result = await login(data)
    context.commit('SET_TOKEN', result)
  }
}

export default {
  namespace: true,
  state,
  mutations,
  actions
}
