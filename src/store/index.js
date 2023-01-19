import { createStore } from 'vuex'

export default createStore({
  state: {
    contacts: [
      {
        name: 'Ryoma',
        number: '0618731535'
      },
      {
        name: 'MC Lambo',
        number: '0785426956'
      },
      {
        name: 'Charlie Chaplin',
        number: '0696853214'
      },
      {
        name: 'KokoKeno',
        number: '0687977348'
      },
      {
        name: 'Nicolas de Garrigues',
        number: '0677046340'
      },
    ],

    recents: []
  },
  getters: {
  },
  mutations: {
    // numberTyping(state, num) {
    //   this.state.numberTyped = state.numberTyped + num;
    //   alert(state.numberTyped + num);
    // },
    call(state, recent) {
      state.recents.push(recent)
    }
  },
  actions: {
  },
  modules: {
  }
})
