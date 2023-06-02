import { reactive } from "vue";

export const store = reactive({
    headNavbar: {
        home: {
            tab: "Home",
            check: true
        },
        recipies: {
            tab: "Recipies",
            check: true
        },
        places: {
            tab: "Places",
            check: true
        },
        blog: {
            tab: "Blog",
            check: true
        },
        about: {
            tab: "About",
            check: true
        },
        contact: {
            tab: "Contacts",
            check: true
        },
        search: {
            class: "fa-solid fa-magnifying-glass",
            check: false
        }
    },
    followUs: {
        facebook: "fa-brands fa-facebook-f",
        instagram: "fa-brands fa-instagram",
        twitter: "fa-brands fa-twitter",
        youtube: "fa-brands fa-youtube"
    },
    journalCards: {
        choppingBoard: {
            img: '/src/assets/JournalCards/single-post-img3-400x263.jpg',
            title: "Food Corner: Top Japanese Restaurants for Sushi",
            writer: "admin"
        },
        roundUp: {
            img: '/src/assets/JournalCards/fi-roundup-400x263.jpg',
            title: "Food Corner: Top Japanese Restaurants for Sushi",
            writer: "admin"
        },
        toast: {
            img: '/src/assets/JournalCards/fi-toasts-400x263.jpg',
            title: "Food Corner: Top Japanese Restaurants for Sushi",
            writer: "admin"
        }
    },
    recipesDishes: {
        mixedFruits: '/src/assets/RecipesDishes/Mixed-fruits-460x295.jpg',
        breakfast: '/src/assets/RecipesDishes/r-rachel-park-366508-unsplash-min-460x295.jpg',
        icecream: '/src/assets/RecipesDishes/r-michelle-tsang-500721-unsplash-min-460x295.jpg',
        mojito: '/src/assets/RecipesDishes/quick-summer-drink-460x295.jpg',
        cooking: '/src/assets/RecipesDishes/r-maarten-van-den-heuvel-400626-unsplash-min-460x295.jpg',
        cocktail: '/src/assets/RecipesDishes/perfect-cosmopolitan-460x295.jpg',
        fruits: '/src/assets/RecipesDishes/fi2x-6-460x295.jpg',
        pie: '/src/assets/RecipesDishes/r-brooke-lark-96398-unsplash-min-460x295.jpg'
    }
});