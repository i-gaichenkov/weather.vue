<template>
    <div class="forecast-table">
        <div class="container">
            <div class="forecast-container">
                <current-time-forecast v-bind:dayForecast="forecast.dailyForecasts[0]" v-bind:city="forecast.city"/>
                <template v-for="time in forecast.dailyForecasts.slice(1, 7)">
                    <time-forecast v-bind:key="time.dateTime" v-bind:forecast="time"/> 
                </template>
            </div>

            <div class="forecast-container" v-for="(chunk, index) in splitArray(forecast.dailyForecasts.slice(7), 6)" :key="`chunk-${index}`">
                <template v-for="time in chunk">
                    <time-forecast v-bind:key="time.dateTime" v-bind:forecast="time"/> 
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import CurrentTimeForecast from './CurrentTimeForecast.vue'
import TimeForecast from './TimeForecast.vue'

export default {
    name: 'ForecastTable',
    components: {
        CurrentTimeForecast,
        TimeForecast
    },
    props: [ "forecast" ],
    methods: {
        splitArray(data, chunkSize) {
            var result = [];
            var chunksNumber = Math.ceil(data.length / 6);

            for (var i = 0; i < chunksNumber; i++) {
                result[i] = data.slice(i * chunkSize, (i + 1) * chunkSize);
            }
// eslint-disable-next-line 
            console.log(result);
            
            return result;
        }
    }
}
</script>
