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
    <div class="flex jc-center w-100per" id="copyright">
        <div class="flex jc-center ai-center w-50per">
            <i class="fa-regular fa-copyright space"></i>
            <p> Copyright 2012 - 2020 1 Avada Theme by ThemeFusion I All Rights Reserved I Powered by WordPress</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/specific/utility.scss' as *;
@use '../style/specific/style.scss' as *;
</style>