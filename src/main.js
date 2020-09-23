import Vue from 'vue'
import App from './App.vue'

// require('./stack/index')
// require('./queue/index')
// require('./linked_list/index')
// require('./hash_table/index')
require('./tree/index')



Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
