import Vue from 'vue'
import App from './App.vue'
import VueBarcode from '@chenfengyuan/vue-barcode';
import vuetify from './plugins/vuetify';

Vue.component(VueBarcode.name, VueBarcode);
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
