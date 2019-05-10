<template>
  <div id="app">
    <city-picker v-on:city-selected="changeCity" />
    <template v-if="forecast !== null">
      <forecast-table v-bind:forecast="forecast" />
    </template>

    <history v-bind:historyItems="history"/>
  </div>
</template>

<script>
/* eslint-disable */
import CityPicker from './components/CityPicker.vue';
import ForecastTable from './components/ForecastTable.vue'
import History from './components/History.vue'
import axios from 'axios';

export default {
  name: 'app',
  components: {
    CityPicker,
    ForecastTable,
    History
  },
  data() {
    return {
      forecast: null,
      history: [ ]
    };
  },
  mounted() {
    var cityToLoad = '';

    if (localStorage.history) {
      try {
        this.history = JSON.parse(localStorage.history);
        if (this.history.length > 0) {
          cityToLoad = this.history[this.history.length - 1].city.name;
        }
      }
      catch (error) {
        cityToLoad = '';
      }
    }

    if (cityToLoad == '') {
        cityToLoad = 'Berlin';
      }

      this.loadCity(cityToLoad);
  },
  methods: {
    loadCity(cityName) {
      return axios.get(`http://localhost:5000/api/Weather/city?cityName=${cityName}&countryCode=DE`)
        .then(response => {
          this.forecast = response.data;
          return response;
        }).catch(response => console.error(response.data));
    },

    changeCity(cityName) {
      this.loadCity(cityName)
        .then(response => { 
          this.addToHistory(response.data)});
    },
    
    addToHistory(forecastResponse) {
      const historyItem = {
        city: forecastResponse.city,
        currentWeather: forecastResponse.currentWeather
      };

      this.history.push(historyItem);
      if (this.history.length > 3) {
        this.history.shift();
      }

      const historyJson = JSON.stringify(this.history);
      localStorage.setItem('history', historyJson);
    }
  }
}
</script>
