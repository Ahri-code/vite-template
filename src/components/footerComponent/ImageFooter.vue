<script>
import { store } from '../../data/store'

export default {
    name: "ImageFooter",
    data() {
        return {
            store
        }
    },
    methods: {
        getImg(index) {
            return index;
        }
    }
}
</script>

<template>
    <div id="footerImg" class="flex">
        <div v-for="image in store.footerImg">
            <img :src="getImg(image)" class="w-100per">
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../style/specific/utility.scss' as *;
@use '../../style/specific/style.scss' as *;
</style>