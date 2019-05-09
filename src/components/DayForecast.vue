<template>
    <div class="forecast">
        <div class="forecast-header">
            <div class="day">{{forecast.dateTime | formatDate}}</div>
        </div> <!-- .forecast-header -->
        <div class="forecast-content">
            <div class="forecast-icon">
                <img v-bind:src="forecast.weather.id | weatherIcon" alt="" width=48>
            </div>
            <div class="degree">{{forecast.temperature | round}}<sup>o</sup>C</div>
            <div>{{forecast.humidity | round}}%</div>
            <div>{{forecast.windSpeed | round}} km/h</div>
        </div>
    </div>
</template>

<script>
import round from 'vue-round-filter';

export default {
    name: 'DayForecast',
    props: [ 'forecast' ],
    filters: {
        round
    }
}
</script>
