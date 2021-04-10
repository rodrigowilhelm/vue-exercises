import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Calculadora from './components/Calculadora.vue';
import Home from './components/Home.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: Calculadora
    },
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
