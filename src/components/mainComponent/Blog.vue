<script>
import { store } from '../../data/store'
import moment from 'moment'
import MoreRecipes from '../../assets/Background/ad-bg.jpg'
import Singapore from '../../assets/Background/singapore-featured-image-600x395.jpg'
import Logo from '../../assets/Logo/3a74ce3d0532b7773b174c45ca3bd05a_normal.png'
import TwitterImg from '../../assets/twitter/En2TRxLW4AEiWUN.jpeg'

export default {
    name: "Blog",
    data() {
        return {
            date: moment().format('MMMM Do, YYYY'),
            store
        }
    },
    methods: {
        getImg(index) {
            return index.img;
        },
        filteredImg() {
            for (let key in this.store.otherArticle.filter(check => check.active == true)) {
                return this.store.otherArticle[key].img;
            }
        },
        filteredTitle() {
            for (let key in this.store.otherArticle.filter(check => check.active == true)) {
                return this.store.otherArticle[key].title;
            }
        },
        filteredWriter() {
            for (let key in this.store.otherArticle.filter(check => check.active == true)) {
                return this.store.otherArticle[key].writer;
            }
        },
        printMoreRecipes() {
            return MoreRecipes;
        },
        printSingapore() {
            return Singapore;
        },
        printLogo() {
            return Logo;
        },
        printTwitterImg() {
            return TwitterImg;
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
            <div class="flex jc-between fw-wrap gap-15 otherArticle">
                <!-- Selected -->
                <div class="w-100per card">
                    <img :src="filteredImg()" class="w-100per">
                    <div class="p-2">
                        <div>
                            <h3>
                                {{ filteredTitle() }}
                            </h3>
                            <p class="titleCaption">
                                <span class="space">By {{ filteredWriter() }} |</span>
                                <span>{{ date }}</span>
                            </p>
                        </div>
                        <hr>
                        <div class="info">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non temporibus quis eaque eius id
                                repudiandae cupiditate mollitia quasi saepe sapiente a quod beatae fuga, ratione similique.
                                Suscipit natus minus voluptas.
                            </p>
                            <div class="general flex jc-between">
                                <a href="#">Read More</a>
                                <p>
                                    <i class="fa-regular fa-comments space"></i>
                                    <span>0</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Articles -->
                <div v-for="element in store.otherArticle.filter(x => x.active != true)" class="w-48per card smaller">
                    <img :src="getImg(element)" class="w-100per">
                    <div class="p-1-0">
                        <h3>
                            {{ element.title }}
                        </h3>
                        <p class="titleCaption">
                            <span class="space">By {{ element.writer }} |</span>
                            <span>{{ date }}</span>
                        </p>
                    </div>
                </div>
                <!-- Load More -->
                <div class="w-100per">
                    <button>load more posts</button>
                </div>
            </div>
            <!-- Links -->
            <div class="flex fd-columns gap-2 links">
                <!-- More Recipes -->
                <div class="relative moreRecipes">
                    <img :src="printMoreRecipes()" class="w-100per">
                    <h4 class="absolute">view our latest recipes</h4>
                </div>
                <!-- Guide -->
                <div class="guides">
                    <div class="relative">
                        <img :src="printSingapore()" class="w-100per">
                        <h4 class="absolute">City Guide: Singapore</h4>
                    </div>
                    <div class="flex jc-center ai-center">
                        <i class="fa-solid fa-earth-americas space"></i>
                        <p>view all city guides</p>
                    </div>
                </div>

                <hr>

                <!-- Search -->
                <div class="flex search">
                    <button class="fa-solid fa-magnifying-glass"></button>
                    <input type="text" placeholder="Search..." class="w-100per">
                </div>
                <!-- Follow-us -->
                <div class="followUs">
                    <h4>Follow Us</h4>
                    <div class="flex">
                        <div v-for="social in store.followUsPinterest" :class="social">
                        </div>
                    </div>
                </div>
                <!-- Other Article Selection -->
                <div class="otherArticleSel">
                    <div class="flex selection">
                        <div class="clicked">Popular</div>
                        <div>Recent</div>
                    </div>
                    <div>
                        <div v-for="element in store.otherArticleSel" class="pt-2">
                            <div class="flex jc-between">
                                <img :src="getImg(element)">
                                <div class="w-80per title">
                                    <p>{{ element.title }}</p>
                                    <p><small>{{ date }}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Tweet -->
                <div class="twitter">
                    <div class="flex jc-between ai-center tweetTitle">
                        <div class="flex ai-baseline">
                            <h4 class="space">Tweets</h4>
                            <p class="space">by</p>
                            <a href="#">@Theme_Fusion</a>
                        </div>
                        <div class="w-1rem">
                            <i class="fa-solid fa-info"></i>
                        </div>
                    </div>
                    <div class="flex mainTweet">
                        <div class="w-20per logo">
                            <img :src="printLogo()" class="w-100per">
                        </div>
                        <div class="infoTweet">
                            <!-- Account -->
                            <div class="flex jc-between account">
                                <div>
                                    <h5>
                                        ThemeFusion
                                    </h5>
                                    <p>
                                        @Theme_Fusion
                                    </p>
                                </div>
                                <i class="fa-brands fa-twitter"></i>
                            </div>
                            <!-- Description -->
                            <div class="description">
                                <p>Do you need sublime WordPress hosting for
                                    your next website? Take advantage of
                                    exclusive partner offers that we have
                                    secured just for you, & launch your site in
                                    seconds with <span>#avada</span> on WP Engine hosting
                                    & aet 30% Off this Black Friday<br><span>bit-IV3kjLLE2 #81ackFnday2020</span>
                                </p>
                            </div>
                            <div>
                                <img :src="printTwitterImg()" class="w-100per">
                            </div>
                            <div class="flex jc-between info">
                                <div class="flex jc-between w-20per">
                                    <i class="fa-regular fa-heart"></i>
                                    <i class="fa-solid fa-right-from-bracket"></i>
                                </div>

                                <div class="10per">
                                    <p>21h</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../style/specific/utility.scss' as *;
@use '../../style/specific/style.scss' as *;
</style>