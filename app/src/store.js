import Vue from 'vue';
import Vuex from 'vuex';
import vuexI18n from 'vuex-i18n';
import translationsEn from './lang/en.json';
import translationsVn from './lang/vn.json';
import translationsJa from './lang/ja.json';

Vue.use(Vuex);

export const store = new Vuex.Store({
     state: {
          fallback:'en',
          locale:''
     },
     mutations: {
          setCulture(state, payload){
               state.locale = payload
               Vue.i18n.set(state.locale);
          }
     },
     actions: {
          setLang ({commit}, payload, adad) {
               commit('setCulture',payload)
          }
     },
     getters: {
          language (state) {
               return state.locale
          }
     }
})
Vue.use(vuexI18n.plugin, store);
Vue.use(vuexI18n.plugin, store);

Vue.i18n.add('en', translationsEn);
Vue.i18n.add('vn', translationsVn);
Vue.i18n.add('ja', translationsJa);

Vue.i18n.set('ja')