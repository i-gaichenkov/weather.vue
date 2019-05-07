<template>
    <div class="today forecast">
        <div class="forecast-header">
            <div class="day">{{dayForecast.dateTime | formatTime}}</div>
            <div class="date">{{dayForecast.dateTime | formatDate}}</div>
        </div> <!-- .forecast-header -->
        <div class="forecast-content">
            <div class="location">{{city.name}}</div>
            <div class="degree">
                <div class="num">{{dayForecast.temperature | round}}<sup>o</sup>C</div>
                <div class="forecast-icon">
                    <img v-bind:src="dayForecast.weather[0].id | weatherIcon" alt="" width=90>
                </div>	
            </div>
            <span><img src="images/icon-umberella.png" alt="">{{dayForecast.humidity}}%</span>
            <span><img src="images/icon-wind.png" alt="">18km/h</span>
            <span><img src="images/icon-compass.png" alt="">East</span>
        </div>
    </div>
</template>

<script>
import round from 'vue-round-filter';

export default {
    name: 'CurrentTimeForecast',
    props: [ "dayForecast", "city" ],
    filters: {
        round
    }
}
</script>
