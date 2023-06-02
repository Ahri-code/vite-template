<script>
import { store } from '../../data/store'

export default {
    name: "CulinaryCollection",
    data() {
        return {
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
    <div class="flex jc-center ai-center fd-columns w-100per" id="culinaryNav">
        <!-- Title -->
        <div class="flex jc-center ai-center fd-columns w-40per p-2">
            <h2>culinary collection</h2>
            <p class="ta-center titleCaption">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate repudiandae iure perspiciatis. Ea eos
                saepe suscipit.
            </p>
        </div>
        <!-- Cards -->
        <nav class="flex jc-between fw-wrap gap-15 w-70per">
            <div v-for="card in store.CulinaryNav" class="flex jc-center ai-center fd-columns">
                <img :src="getImg(card)" class="w-30per">
                <p class="upperCase">{{ card.text }}</p>
            </div>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
@use '../../style/specific/utility.scss' as *;
@use '../../style/specific/style.scss' as *;
</style>