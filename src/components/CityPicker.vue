<template>
    <div class="hero">
        <div class="container">
            <form @submit="selectCity" class="find-location">
                <input type="text" v-model="cityName" placeholder="Find your location..." />
                <input type="submit" value="Find" />
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CityPicker',
    data() {
        return {
            cityName: ''
        }
    },
    methods: {
        selectCity(e) {
            e.preventDefault();
            this.$emit('city-selected', this.cityName);
            this.cityName = '';
        }
    }
}
</script>
