<template>
    <div class="forecast-table">
        <div class="container">
            <h2 v-if="historyItems.length > 0" class="section-title">History</h2>
            <div class="forecast-container history">
                <template v-for="(historyItem, index) in historyItems">
                    <current-forecast v-bind:key="index" v-bind:currentWeather="historyItem.currentWeather" v-bind:city="historyItem.city"/>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import CurrentForecast from './CurrentForecast.vue'

export default {
    name: 'History',
    components: {
        CurrentForecast
    },
    props: [ 'historyItems' ]
}
</script>
