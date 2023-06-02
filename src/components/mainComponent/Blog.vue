<script>
import { store } from '../../data/store'
import moment from 'moment'

export default {
    name: "Blog",
    data() {
        return {
            date: moment().format('MMMM Do YYYY'),
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
    <div class="flex jc-center ai-center fd-columns w-100per" id="blog">
        <!-- Title section -->
        <div class="flex jc-between ai-center w-70per p-2-0">
            <!-- Title -->
            <div class="w-40per">
                <h2>farm to table</h2>
                <p class="titleCaption">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate ea
                    eos.
                </p>
            </div>
            <!-- Button -->
            <button class="stdButton">
                <span class="space">read our blog</span><i class="fa-solid fa-book-open-reader"></i>
            </button>
        </div>
        <!-- Other Article and Links -->
        <div class="flex jc-between w-70per p-2-0">
            <!-- Other Article -->
            <div class="flex jc-between fw-wrap gap-15 w-60per">
                <!-- Selected -->
                <div class="w-100per">
                    <hr>
                    <div>
                        <p>

                        </p>
                        <div>
                            <a href="#"></a>
                            <i></i>
                        </div>
                    </div>
                </div>
                <!-- Articles -->
                <div v-for="element in store.otherArticle" class="w-48per card smaller">
                    <img :src="getImg(element)" class="w-100per">
                    <div class="p-1-0">
                        <h3>
                            Food Corner: Top Japanese Restaurant for Sushi
                        </h3>
                        <p class="titleCaption">
                            <span class="space">By {{ element.writer }} |</span>
                            <span>{{ date }}</span>
                        </p>
                    </div>
                </div>
            </div>
            <!-- Links -->
            <div class="w-30per">

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../style/specific/utility.scss' as *;
@use '../../style/specific/style.scss' as *;
</style>