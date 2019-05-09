<template>
  <div id="app">
    <city-picker v-on:city-selected="changeCity" />
    <template v-if="forecast !== null">
      <forecast-table v-bind:forecast="forecast" />
    </template>
  </div>
</template>

<script>
/* eslint-disable */
import CityPicker from './components/CityPicker.vue';
import ForecastTable from './components/ForecastTable.vue'
import axios from 'axios';

export default {
  name: 'app',
  components: {
    CityPicker,
    ForecastTable
  },
  data() {
    return {
      currentCity: null,
      forecast: null
    };
  },
  created() {
  },
  methods: {
    changeCity(cityName) {
      axios.get(`http://localhost:5000/api/Weather/city?cityName=${cityName}&countryCode=DE`)
        .then(response => this.forecast = response.data)
        .catch(response => console.error(response.data));
    }
  }
}
</script>
