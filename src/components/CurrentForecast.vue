<template>
    <div class="today forecast">
        <div class="forecast-header">
            <div class="day">{{currentWeather.dateTime | formatTime}}</div>
            <div class="date">{{currentWeather.dateTime | formatDate}}</div>
        </div> <!-- .forecast-header -->
        <div class="forecast-content">
            <div class="location">{{city.name}}, {{city.countryCode.value}}</div>
            <div class="degree">
                <div class="num">{{currentWeather.temperature | round}}<sup>o</sup>C</div>
                <div class="forecast-icon">
                    <img v-bind:src="currentWeather.weather.id | weatherIcon" alt="" width=90>
                </div>	
            </div>
            <span><img src="images/icon-umberella.png" alt="">{{currentWeather.humidity | round}}%</span>
            <span><img src="images/icon-wind.png" alt="">{{currentWeather.windSpeed | round}} km/h</span>
        </div>
    </div>
</template>

<script>
import round from 'vue-round-filter';

export default {
    name: 'CurrentForecast',
    props: [ "currentWeather", "city" ],
    filters: {
        round
    }
}
</script>
