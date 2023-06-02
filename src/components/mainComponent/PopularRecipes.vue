<script>
import { store } from '../../data/store'
import BigImage from '../../assets/Other/Yogurt-Nan-600x395.jpg'

export default {
    name: "PopularRecipes",
    data() {
        return {
            store
        }
    },
    methods: {
        getImg(index) {
            return index;
        },
        printBigImg() {
            return BigImage;
        }
    }
}
</script>

<template>
    <div class="flex jc-center ai-center fd-columns w-100per" id="popularRecipes">
        <!-- Title -->
        <div class="flex jc-center ai-center fd-columns w-40per p-2">
            <h2>popular recipes</h2>
            <p class="ta-center titleCaption">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate repudiandae iure perspiciatis. Ea eos
                saepe suscipit.
            </p>
        </div>
        <div class="flex jc-between w-70per">
            <!-- Big Card -->
            <div class="flex ai-center fd-columns w-47per" id="showRecepie">
                <img :src="printBigImg()" class="w-100per">
                <div class="w-90per">
                    <div class="p-1-0">
                        <h3>Lunch Favourite with Salad, Naan And Beans</h3>
                        <p>Bakery, Featured, Healty, Latest Recipes, Staff Picks</p>
                    </div>
                    <hr>
                    <div class="p-1-0">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, beatae earum tempore pariatur
                            eligendi asperiores aliquid a expedita voluptatum blanditiis sint voluptate veritatis, ipsam
                            nobis in esse doloremque? At, praesentium!
                        </p>
                    </div>
                    <button class="stdButton">
                        learn more
                    </button>
                </div>
            </div>
            <!-- Other Cards -->
            <div class="flex jc-between fw-wrap gap-1 w-47per">
                <div v-for="card in store.recipesDishes" class="w-47per">
                    <img :src="getImg(card)" class="w-100per">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../style/specific/utility.scss' as *;
@use '../../style/specific/style.scss' as *;
</style>