<script>
import moment from 'moment'
import { store } from '../../data/store'

export default {
    name: "Jumbotron",
    data() {
        return {
            date: moment().format('MMMM Do, YYYY'),
            store
        }
    },
    methods: {
        getImg(index) {
            return index.img;
        }
    }
}
</script>

<template>
    <div id="jumbotron" class="flex jc-center ai-center fd-columns">
        <!-- Today's pick -->
        <div id="todaysPick" class="relative">
            <div class="absolute">
                today's pick
            </div>
            <h1>Food Corner: Top Japanese Restaurants for Sushi</h1>
            <p>
                {{ date }}
            </p>
        </div>
        <!-- Journal -->
        <div id="journal" class="w-70per">
            <!-- Title -->
            <div class="flex jc-evenly ai-center p-1">
                <hr>
                <h2>foodie journal</h2>
                <hr>
            </div>
            <!-- Cards -->
            <div class="flex jc-evenly ai-center p-1-0" id="cards">
                <div v-for="card in store.journalCards" class="w-30per flex jc-center ai-center fd-columns ta-center">
                    <img :src="getImg(card)">
                    <h3>{{ card.title }}</h3>
                    <p>
                        <span class="space">By {{ card.writer }}</span>
                        <span>{{ date }}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../style/specific/utility.scss' as *;
@use '../../style/specific/style.scss' as *;
</style>