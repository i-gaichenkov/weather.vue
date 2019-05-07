import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.filter('weatherIcon', function(weatherId) {
  var hundreds = Math.floor(weatherId / 100);

  var iconIndex = hundreds == 8
    ? weatherId
    : hundreds;

  return `/images/icons/icon-${iconIndex}.svg`;
});

Vue.filter('formatTime', function(dateString) {
    var date = new Date(dateString);

    var hours = date.getHours().toString().padStart(2, '0');
    var minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  });

Vue.filter('formatDate', function(dateString) {
  var monthNamesShort = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  var date = new Date(dateString);
  return date.getDate() + " " + (monthNamesShort[date.getMonth()]);
});

new Vue({
  render: h => h(App),
}).$mount('#app')
