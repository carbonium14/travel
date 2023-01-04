import Vuex from 'vuex'
import state from './state.js'
import mutations from './mutations.js'
export default Vuex.createStore({
  state,
  mutations
})
