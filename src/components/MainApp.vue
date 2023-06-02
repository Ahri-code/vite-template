<script>
import Jumbotron from './mainComponent/Jumbotron.vue'
import PopularRecipes from './mainComponent/PopularRecipes.vue'
import CulinaryCollection from './mainComponent/CulinaryCollection.vue'
import Blog from './mainComponent/Blog.vue'

export default {
    name: "MainApp",
    components: {
        Jumbotron,
        PopularRecipes,
        CulinaryCollection,
        Blog
    }
}
</script>

<template>
    <Jumbotron />
    <PopularRecipes />
    <CulinaryCollection />
    <Blog />
</template>

<style lang="scss" scoped>
@use '../style/specific/utility.scss' as *;
@use '../style/specific/style.scss' as *;
</style>