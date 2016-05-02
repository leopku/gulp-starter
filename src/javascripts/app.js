import Vue from 'vue';
import Vuex from 'vuex';
import Main from './components/Main';

Vue.config.debug = true;

new Vue({
  el: 'body',
  components: {Main}
});

const state = {
	count: 0
}

const mutations = {
	INCREMENT (state) {
		state.count++
	}
}

const store = new Vuex.Store({
	state,
	mutations
})