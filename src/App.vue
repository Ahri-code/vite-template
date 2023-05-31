<script>
import HeaderApp from './components/HeaderApp.vue'
import MainApp from './components/MainApp.vue'
import FooterApp from './components/FooterApp.vue'
import { store } from './data/store'
import axios from 'axios'

export default {
    name: "App",
    components: {
        HeaderApp,
        MainApp,
        FooterApp
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div> <!-- Make easier to turn everything in darkmode -->
        <header class="flex jc-center ai-center">
            <HeaderApp />
        </header>
        <main>
            <MainApp />
        </main>
        <footer>
            <FooterApp />
        </footer>
    </div>
</template>

<style lang="scss" scoped>
@use './style/specific/utility.scss' as *;
@use './style/specific/style.scss' as *;
</style>