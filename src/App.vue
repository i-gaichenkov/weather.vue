<template>
  <div id="app">
    <city-picker />
    <forecast-table v-bind:forecast="forecast" />
  </div>
</template>

<script>
import CityPicker from './components/CityPicker.vue';
import ForecastTable from './components/ForecastTable.vue'

export default {
  name: 'app',
  components: {
    CityPicker,
    ForecastTable
  },
  data() {
    return {
      forecast: {
  "city": {
    "id": 2867714,
    "name": "Munich",
    "countryCode": {
      "value": "DE"
    }
  },
  "dailyForecasts": [
    {
      "dateTime": "2019-05-08T00:00:00Z",
      "temperature": 4.49,
      "humidity": 81,
      "weather": [
        {
          "id": 802,
          "weatherCondition": "Clouds",
          "weatherDescription": "scattered clouds"
        }
      ]
    },
    {
      "dateTime": "2019-05-08T03:00:00Z",
      "temperature": 3.54,
      "humidity": 83,
      "weather": [
        {
          "id": 804,
          "weatherCondition": "Clouds",
          "weatherDescription": "overcast clouds"
        }
      ]
    },
    {
      "dateTime": "2019-05-08T06:00:00Z",
      "temperature": 7.04,
      "humidity": 73,
      "weather": [
        {
          "id": 804,
          "weatherCondition": "Clouds",
          "weatherDescription": "overcast clouds"
        }
      ]
    },
    {
      "dateTime": "2019-05-08T09:00:00Z",
      "temperature": 10.59,
      "humidity": 66,
      "weather": [
        {
          "id": 804,
          "weatherCondition": "Clouds",
          "weatherDescription": "overcast clouds"
        }
      ]
    },
    {
      "dateTime": "2019-05-08T12:00:00Z",
      "temperature": 14.52,
      "humidity": 59,
      "weather": [
        {
          "id": 804,
          "weatherCondition": "Clouds",
          "weatherDescription": "overcast clouds"
        }
      ]
    },
    {
      "dateTime": "2019-05-08T15:00:00Z",
      "temperature": 13.99,
      "humidity": 74,
      "weather": [
        {
          "id": 500,
          "weatherCondition": "Rain",
          "weatherDescription": "light rain"
        }
      ]
    },
    {
      "dateTime": "2019-05-08T18:00:00Z",
      "temperature": 9.59,
      "humidity": 90,
      "weather": [
        {
          "id": 500,
          "weatherCondition": "Rain",
          "weatherDescription": "light rain"
        }
      ]
    },
    {
      "dateTime": "2019-05-08T21:00:00Z",
      "temperature": 7.95,
      "humidity": 93,
      "weather": [
        {
          "id": 501,
          "weatherCondition": "Rain",
          "weatherDescription": "moderate rain"
        }
      ]
    },
    {
      "dateTime": "2019-05-09T00:00:00Z",
      "temperature": 7.15,
      "humidity": 94,
      "weather": [
        {
          "id": 500,
          "weatherCondition": "Rain",
          "weatherDescription": "light rain"
        }
      ]
    },
    {
      "dateTime": "2019-05-09T03:00:00Z",
      "temperature": 6.66,
      "humidity": 92,
      "weather": [
        {
          "id": 500,
          "weatherCondition": "Rain",
          "weatherDescription": "light rain"
        }
      ]
    },
    {
      "dateTime": "2019-05-09T06:00:00Z",
      "temperature": 7.65,
      "humidity": 89,
      "weather": [
        {
          "id": 804,
          "weatherCondition": "Clouds",
          "weatherDescription": "overcast clouds"
        }
      ]
    },
    {
      "dateTime": "2019-05-09T09:00:00Z",
      "temperature": 11.38,
      "humidity": 71,
      "weather": [
        {
          "id": 500,
          "weatherCondition": "Rain",
          "weatherDescription": "light rain"
        }
      ]
    },
    {
      "dateTime": "2019-05-09T12:00:00Z",
      "temperature": 13.91,
      "humidity": 63,
      "weather": [
        {
          "id": 500,
          "weatherCondition": "Rain",
          "weatherDescription": "light rain"
        }
      ]
    },
    {
      "dateTime": "2019-05-09T15:00:00Z",
      "temperature": 11.35,
      "humidity": 84,
      "weather": [
        {
          "id": 500,
          "weatherCondition": "Rain",
          "weatherDescription": "light rain"
        }
      ]
    },
    {
      "dateTime": "2019-05-09T18:00:00Z",
      "temperature": 10.45,
      "humidity": 83,
      "weather": [
        {
          "id": 500,
          "weatherCondition": "Rain",
          "weatherDescription": "light rain"
        }
      ]
    },
    {
      "dateTime": "2019-05-09T21:00:00Z",
      "temperature": 7.75,
      "humidity": 90,
      "weather": [
        {
          "id": 500,
          "weatherCondition": "Rain",
          "weatherDescription": "light rain"
        }
      ]
    },
    {
      "dateTime": "2019-05-10T00:00:00Z",
      "temperature": 6.95,
      "humidity": 93,
      "weather": [
        {
          "id": 500,
          "weatherCondition": "Rain",
          "weatherDescription": "light rain"
        }
      ]
    },
    {
      "dateTime": "2019-05-10T03:00:00Z",
      "temperature": 6.51,
      "humidity": 94,
      "weather": [
        {
          "id": 801,
          "weatherCondition": "Clouds",
          "weatherDescription": "few clouds"
        }
      ]
    },
    {
      "dateTime": "2019-05-10T06:00:00Z",
      "temperature": 9.45,
      "humidity": 89,
      "weather": [
        {
          "id": 803,
          "weatherCondition": "Clouds",
          "weatherDescription": "broken clouds"
        }
      ]
    },
    {
      "dateTime": "2019-05-10T09:00:00Z",
      "temperature": 13.55,
      "humidity": 74,
      "weather": [
        {
          "id": 500,
          "weatherCondition": "Rain",
          "weatherDescription": "light rain"
        }
      ]
    },
    {
      "dateTime": "2019-05-10T12:00:00Z",
      "temperature": 15.45,
      "humidity": 63,
      "weather": [
        {
          "id": 500,
          "weatherCondition": "Rain",
          "weatherDescription": "light rain"
        }
      ]
    },
    {
      "dateTime": "2019-05-10T15:00:00Z",
      "temperature": 15.78,
      "humidity": 60,
      "weather": [
        {
          "id": 500,
          "weatherCondition": "Rain",
          "weatherDescription": "light rain"
        }
      ]
    },
    {
      "dateTime": "2019-05-10T18:00:00Z",
      "temperature": 11.75,
      "humidity": 80,
      "weather": [
        {
          "id": 802,
          "weatherCondition": "Clouds",
          "weatherDescription": "scattered clouds"
        }
      ]
    },
    {
      "dateTime": "2019-05-10T21:00:00Z",
      "temperature": 7.85,
      "humidity": 86,
      "weather": [
        {
          "id": 803,
          "weatherCondition": "Clouds",
          "weatherDescription": "broken clouds"
        }
      ]
    },
    {
      "dateTime": "2019-05-11T00:00:00Z",
      "temperature": 8.76,
      "humidity": 84,
      "weather": [
        {
          "id": 803,
          "weatherCondition": "Clouds",
          "weatherDescription": "broken clouds"
        }
      ]
    },
    {
      "dateTime": "2019-05-11T03:00:00Z",
      "temperature": 8.42,
      "humidity": 92,
      "weather": [
        {
          "id": 500,
          "weatherCondition": "Rain",
          "weatherDescription": "light rain"
        }
      ]
    },
    {
      "dateTime": "2019-05-11T06:00:00Z",
      "temperature": 9.3,
      "humidity": 95,
      "weather": [
        {
          "id": 501,
          "weatherCondition": "Rain",
          "weatherDescription": "moderate rain"
        }
      ]
    },
    {
      "dateTime": "2019-05-11T09:00:00Z",
      "temperature": 15.09,
      "humidity": 73,
      "weather": [
        {
          "id": 500,
          "weatherCondition": "Rain",
          "weatherDescription": "light rain"
        }
      ]
    },
    {
      "dateTime": "2019-05-11T12:00:00Z",
      "temperature": 16.74,
      "humidity": 67,
      "weather": [
        {
          "id": 500,
          "weatherCondition": "Rain",
          "weatherDescription": "light rain"
        }
      ]
    },
    {
      "dateTime": "2019-05-11T15:00:00Z",
      "temperature": 14.25,
      "humidity": 78,
      "weather": [
        {
          "id": 500,
          "weatherCondition": "Rain",
          "weatherDescription": "light rain"
        }
      ]
    },
    {
      "dateTime": "2019-05-11T18:00:00Z",
      "temperature": 10.98,
      "humidity": 83,
      "weather": [
        {
          "id": 500,
          "weatherCondition": "Rain",
          "weatherDescription": "light rain"
        }
      ]
    },
    {
      "dateTime": "2019-05-11T21:00:00Z",
      "temperature": 8.75,
      "humidity": 89,
      "weather": [
        {
          "id": 804,
          "weatherCondition": "Clouds",
          "weatherDescription": "overcast clouds"
        }
      ]
    },
    {
      "dateTime": "2019-05-12T00:00:00Z",
      "temperature": 7.15,
      "humidity": 91,
      "weather": [
        {
          "id": 804,
          "weatherCondition": "Clouds",
          "weatherDescription": "overcast clouds"
        }
      ]
    },
    {
      "dateTime": "2019-05-12T03:00:00Z",
      "temperature": 4.97,
      "humidity": 91,
      "weather": [
        {
          "id": 500,
          "weatherCondition": "Rain",
          "weatherDescription": "light rain"
        }
      ]
    },
    {
      "dateTime": "2019-05-12T06:00:00Z",
      "temperature": 5.18,
      "humidity": 92,
      "weather": [
        {
          "id": 500,
          "weatherCondition": "Rain",
          "weatherDescription": "light rain"
        }
      ]
    },
    {
      "dateTime": "2019-05-12T09:00:00Z",
      "temperature": 8.85,
      "humidity": 68,
      "weather": [
        {
          "id": 500,
          "weatherCondition": "Rain",
          "weatherDescription": "light rain"
        }
      ]
    },
    {
      "dateTime": "2019-05-12T12:00:00Z",
      "temperature": 11.65,
      "humidity": 46,
      "weather": [
        {
          "id": 804,
          "weatherCondition": "Clouds",
          "weatherDescription": "overcast clouds"
        }
      ]
    },
    {
      "dateTime": "2019-05-12T15:00:00Z",
      "temperature": 11.55,
      "humidity": 53,
      "weather": [
        {
          "id": 500,
          "weatherCondition": "Rain",
          "weatherDescription": "light rain"
        }
      ]
    },
    {
      "dateTime": "2019-05-12T18:00:00Z",
      "temperature": 7.96,
      "humidity": 72,
      "weather": [
        {
          "id": 500,
          "weatherCondition": "Rain",
          "weatherDescription": "light rain"
        }
      ]
    },
    {
      "dateTime": "2019-05-12T21:00:00Z",
      "temperature": 3.77,
      "humidity": 75,
      "weather": [
        {
          "id": 804,
          "weatherCondition": "Clouds",
          "weatherDescription": "overcast clouds"
        }
      ]
    }
  ]
}
    };
  }
}
</script>
