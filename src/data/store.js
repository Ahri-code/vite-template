import { reactive } from "vue";

export const store = reactive({
    // --- Navbar of the Header ---
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
    // --- Follow us button ---
    followUs: {
        facebook: "fa-brands fa-facebook-f",
        instagram: "fa-brands fa-instagram",
        twitter: "fa-brands fa-twitter",
        youtube: "fa-brands fa-youtube"
    },
    // --- Cardsfor the journal ---
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
    // --- Popular recipes ---
    recipesDishes: {
        mixedFruits: '/src/assets/RecipesDishes/Mixed-fruits-460x295.jpg',
        breakfast: '/src/assets/RecipesDishes/r-rachel-park-366508-unsplash-min-460x295.jpg',
        icecream: '/src/assets/RecipesDishes/r-michelle-tsang-500721-unsplash-min-460x295.jpg',
        mojito: '/src/assets/RecipesDishes/quick-summer-drink-460x295.jpg',
        cooking: '/src/assets/RecipesDishes/r-maarten-van-den-heuvel-400626-unsplash-min-460x295.jpg',
        cocktail: '/src/assets/RecipesDishes/perfect-cosmopolitan-460x295.jpg',
        fruits: '/src/assets/RecipesDishes/fi2x-6-460x295.jpg',
        pie: '/src/assets/RecipesDishes/r-brooke-lark-96398-unsplash-min-460x295.jpg'
    },
    // --- Navbar of Culinary section
    CulinaryNav: {
        drinks: {
            img: '/src/assets/CulinaryNav/drinks-recipes.png',
            text: "drinks"
        },
        soups: {
            img: '/src/assets/CulinaryNav/soups-recipes.png',
            text: "soups"
        },
        bakery: {
            img: '/src/assets/CulinaryNav/baking-recipes.png',
            text: "bakery"
        },
        dinner: {
            img: '/src/assets/CulinaryNav/dinner-recipes.png',
            text: "dinner"
        },
        healthy: {
            img: '/src/assets/CulinaryNav/healthy-recipes.png',
            text: "healthy"
        },
        staffPicks: {
            img: '/src/assets/CulinaryNav/staff-picks.png',
            text: "staff picks"
        },
        appetisers: {
            img: '/src/assets/CulinaryNav/premium-recipes.png',
            text: "appetisers"
        },
        quickEasy: {
            img: '/src/assets/CulinaryNav/quick-easy-recipes.png',
            text: "quick & easy"
        },
    },
    // --- Last articles ---
    otherArticle: {
        choppingBoard: {
            img: '/src/assets/OtherArticle/single-post-img3-800x527.jpg',
            title: "Food Corner: Top Japanese Restaurants for Sushi",
            writer: "admin",
            active: true
        },
        roundUp: {
            img: '/src/assets/OtherArticle/fi-roundup-800x527.jpg',
            title: "Food Corner: Top Japanese Restaurants for Sushi",
            writer: "admin",
            active: false
        },
        koreanFood: {
            img: '/src/assets/OtherArticle/fi-korean-food-800x527.jpg',
            title: "Food Corner: Top Japanese Restaurants for Sushi",
            writer: "admin",
            active: false
        },
        toast: {
            img: '/src/assets/OtherArticle/fi-toasts-800x527.jpg',
            title: "Food Corner: Top Japanese Restaurants for Sushi",
            writer: "admin",
            active: false
        },
        streetFood: {
            img: '/src/assets/OtherArticle/fi-street-food-800x527.jpg',
            title: "Food Corner: Top Japanese Restaurants for Sushi",
            writer: "admin",
            active: false
        },
        salad: {
            img: '/src/assets/OtherArticle/fi-organic-breakfast-800x527.jpg',
            title: "Food Corner: Top Japanese Restaurants for Sushi",
            writer: "admin",
            active: false
        },
        waterRestaurant: {
            img: '/src/assets/OtherArticle/fi-water-side-rest-800x527.jpg',
            title: "Food Corner: Top Japanese Restaurants for Sushi",
            writer: "admin",
            active: false
        }
    }
});