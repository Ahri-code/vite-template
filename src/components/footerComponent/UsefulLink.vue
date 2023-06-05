<script>
import { store } from '../../data/store'
import Logo from '../../assets/Logo/avada-food-logo-mob-2x-200x87.png'

export default {
    name: "UsefulLink",
    data() {
        return {
            store
        }
    },
    methods: {
        printLogo() {
            return Logo;
        },
        getImg(index) {
            return index;
        }
    }
}
</script>

<template>
    <div class="flex jc-center ai-center w-100per" id="usefulLink">
        <div class="flex w-70per">
            <!-- Logo -->
            <div class="quarter r-border">
                <img :src="printLogo()">
                <div class="flex gap-1 p-2-0">
                    <div v-for="social in store.followUs" :class="social" class="socials">
                    </div>
                </div>
            </div>
            <!-- Links -->
            <div class="quarter r-border">
                <ul class="flex fd-columns gap-2">
                    <li v-for="link in store.links">
                        <a href="#">{{ link }}</a>
                    </li>
                </ul>
            </div>
            <!-- Contact -->
            <div class="quarter r-border contact">
                <h4>contact</h4>
                <ul>
                    <li v-for="contact in store.contactUs" class="flex">
                        <i :class="contact.class" class="space"></i>
                        <p>{{ contact.text }}</p>
                    </li>
                </ul>
            </div>
            <!-- App -->
            <div class="quarter apps">
                <h4>get our app!</h4>
                <div v-for="img in store.app">
                    <img :src="getImg(img)">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../style/specific/utility.scss' as *;
@use '../../style/specific/style.scss' as *;
</style>