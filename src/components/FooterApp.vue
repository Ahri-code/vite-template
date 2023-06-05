<script>
import Subscribe from './footerComponent/Subscribe.vue'
import ImageFooter from './footerComponent/ImageFooter.vue'
import UsefulLink from './footerComponent/UsefulLink.vue'

export default {
    name: "FooterApp",
    components: {
        Subscribe,
        ImageFooter,
        UsefulLink
    }
}
</script>

<template>
    <Subscribe />
    <ImageFooter />
    <UsefulLink />
</template>

<style lang="scss" scoped>
@use '../style/specific/utility.scss' as *;
@use '../style/specific/style.scss' as *;
</style>