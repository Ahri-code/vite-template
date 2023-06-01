<script>
import { store } from '../data/store'
import Logo from '../assets/avada-food-logo.png'
import '/node_modules/@fortawesome/fontawesome-free/css/all.min.css';

export default {
    name: "HeaderApp",
    data() {
        return {
            store,
            itemChecker: "",
            isHover: false
        }
    },
    methods: {
        logoPrint() {
            return Logo;
        },
        enterDetect(index) {
            this.isHover = true;
            this.itemChecker = index;
        }
    }
}
</script>

<template>
    <!-- TOP -->
    <div class="flex jc-between ai-center w-70per" id="topHeader">
        <div class="flex jc-between ai-center w-20per">
            <div>
                <a href="#" class="space"><small>Download App</small></a>
                <small><span>iOS</span></small>
            </div>
            <a href="#"><small>Advertise with App</small></a>
        </div>

        <div class="flex jc-between ai-center w-10per">
            <div v-for="social in store.followUs" :class="social">
            </div>
        </div>
    </div>
    <!-- LOGO -->
    <div>
        <img :src="logoPrint()" alt="Logo">
    </div>
    <!-- NAVBAR -->
    <nav class="flex jc-between ai-center w-40per p-025-0">
        <div v-for="item in store.headNavbar" class="relative">
            <div class="flex jc-center ai-center fd-columns" @mouseenter="enterDetect(item)" @mouseleave="isHover = false">
                <a href="#" :class="(item.check == false) ? `${item.class}` : ''" class="p-1-0">{{ item.tab }}</a>
                <div v-if="isHover == true && item == itemChecker" class="bg-green absolute"></div>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
@use '../style/specific/utility.scss' as *;
@use '../style/specific/style.scss' as *;
</style>