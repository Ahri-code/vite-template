<script>
import { store } from '../data/store'
import '/node_modules/@fortawesome/fontawesome-free/css/all.min.css';

export default {
    name: "HeaderApp",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <!-- TOP -->
    <div class="flex jc-between ai-center w-80per" id="topHeader">
        <div class="flex jc-between ai-center w-20per">
            <a href="#"><small>Download App <span>iOS</span></small></a>
            <a href="#"><small>Advertise with App</small></a>
        </div>

        <div class="flex jc-between ai-center w-10per">
            <div v-for="social in store.followUs" :class="social">
            </div>
        </div>
    </div>
    <!-- LOGO -->
    <div></div>
    <!-- NAVBAR -->
    <nav></nav>
</template>

<style lang="scss" scoped>
@use '../style/specific/utility.scss' as *;
@use '../style/specific/style.scss' as *;
</style>