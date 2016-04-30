import Vue from 'vue';
import Main from './components/Main';

Vue.config.debug = true;

new Vue({
  el: 'body',
  components: {Main}
});
