<template>
    <div class="forecast">
        <div class="forecast-header">
            <div class="day">{{forecast.dateTime | formatDate}} {{forecast.dateTime | formatTime}}</div>
        </div> <!-- .forecast-header -->
        <div class="forecast-content">
            <div class="forecast-icon">
                <img v-bind:src="forecast.weather[0].id | weatherIcon" alt="" width=48>
            </div>
            <div class="degree">{{forecast.temperature | round}}<sup>o</sup>C</div>
            <small>18<sup>o</sup></small>
        </div>
    </div>
</template>

<script>
import round from 'vue-round-filter';

export default {
    name: 'TimeForecast',
    props: [ 'forecast' ],
    filters: {
        round
    }
}
</script>
