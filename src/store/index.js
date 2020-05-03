import Vue from 'vue';
import Vuex from 'vuex';
// import authGuard from '@/guards/auth.guard';
import firebase from '@/plugins/firebase';
import router from '@/router';
import auth from './modules/auth';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
  },
});

firebase.auth().onAuthStateChanged((user) => {
  console.log('onAuthStateChanged', user);
  store.dispatch('setIsLoggedInState', Boolean(user));

  if (user) {
    router.push({ name: 'Home' });
  }
});

// authGuard();

export default store;
