<template>
    <div class="forecast-table">
        <div class="container">
            <div class="forecast-container">
                <current-forecast v-bind:currentWeather="forecast.currentWeather" v-bind:city="forecast.city"/>
                <template v-for="day in forecast.dailyForecasts">
                    <day-forecast v-bind:key="day.dateTime" v-bind:forecast="day"/> 
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import CurrentForecast from './CurrentForecast.vue'
import DayForecast from './DayForecast.vue'

export default {
    name: 'ForecastTable',
    components: {
        CurrentForecast,
        DayForecast
    },
    props: [ "forecast" ],
    methods: {
        splitArray(data, chunkSize) {
            var result = [];
            var chunksNumber = Math.ceil(data.length / 6);

            for (var i = 0; i < chunksNumber; i++) {
                result[i] = data.slice(i * chunkSize, (i + 1) * chunkSize);
            }
            
            return result;
        }
    }
}
</script>
