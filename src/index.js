import Vue from 'vue';
import Main from './app/Main.vue';

import './index.scss';
import vueSmoothScroll from 'vue-smooth-scroll';
Vue.use(vueSmoothScroll);

export default new Vue({
  el: '#root',
  render: h => h(Main)
});
