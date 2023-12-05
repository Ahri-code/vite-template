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
    followUsPinterest: {
        facebook: "fa-brands fa-facebook-f",
        instagram: "fa-brands fa-instagram",
        twitter: "fa-brands fa-twitter",
        youtube: "fa-brands fa-youtube",
        pinterest: "fa-brands fa-pinterest-p"
    },
    // --- Cardsfor the journal ---
    journalCards: {
        choppingBoard: {
            img: '../assets/JournalCards/single-post-img3-400x263.jpg',
            title: "Food Corner: Top Japanese Restaurants for Sushi",
            writer: "admin"
        },
        roundUp: {
            img: '../assets/JournalCards/fi-roundup-400x263.jpg',
            title: "Food Corner: Top Japanese Restaurants for Sushi",
            writer: "admin"
        },
        toast: {
            img: '../assets/JournalCards/fi-toasts-400x263.jpg',
            title: "Food Corner: Top Japanese Restaurants for Sushi",
            writer: "admin"
        }
    },
    // --- Popular recipes ---
    recipesDishes: {
        mixedFruits: '../assets/RecipesDishes/Mixed-fruits-460x295.jpg',
        breakfast: '../assets/RecipesDishes/r-rachel-park-366508-unsplash-min-460x295.jpg',
        icecream: '../assets/RecipesDishes/r-michelle-tsang-500721-unsplash-min-460x295.jpg',
        mojito: '../assets/RecipesDishes/quick-summer-drink-460x295.jpg',
        cooking: '../assets/RecipesDishes/r-maarten-van-den-heuvel-400626-unsplash-min-460x295.jpg',
        cocktail: '../assets/RecipesDishes/perfect-cosmopolitan-460x295.jpg',
        fruits: '../assets/RecipesDishes/fi2x-6-460x295.jpg',
        pie: '../assets/RecipesDishes/r-brooke-lark-96398-unsplash-min-460x295.jpg'
    },
    // --- Navbar of Culinary section
    CulinaryNav: {
        drinks: {
            img: '../assets/CulinaryNav/drinks-recipes.png',
            text: "drinks"
        },
        soups: {
            img: '../assets/CulinaryNav/soups-recipes.png',
            text: "soups"
        },
        bakery: {
            img: '../assets/CulinaryNav/baking-recipes.png',
            text: "bakery"
        },
        dinner: {
            img: '../assets/CulinaryNav/dinner-recipes.png',
            text: "dinner"
        },
        healthy: {
            img: '../assets/CulinaryNav/healthy-recipes.png',
            text: "healthy"
        },
        staffPicks: {
            img: '../assets/CulinaryNav/staff-picks.png',
            text: "staff picks"
        },
        appetisers: {
            img: '../assets/CulinaryNav/premium-recipes.png',
            text: "appetisers"
        },
        quickEasy: {
            img: '../assets/CulinaryNav/quick-easy-recipes.png',
            text: "quick & easy"
        },
    },
    // --- Last articles ---
    otherArticle: [
        {
            img: '../assets/OtherArticle/single-post-img3-800x527.jpg',
            title: "Food Corner: Top Japanese Restaurants for Sushi",
            writer: "admin",
            active: true
        },
        {
            img: '../assets/OtherArticle/fi-roundup-800x527.jpg',
            title: "Food Corner: Top Japanese Restaurants for Sushi",
            writer: "admin",
            active: false
        },
        {
            img: '../assets/OtherArticle/fi-korean-food-800x527.jpg',
            title: "Food Corner: Top Japanese Restaurants for Sushi",
            writer: "admin",
            active: false
        },
        {
            img: '../assets/OtherArticle/fi-toasts-800x527.jpg',
            title: "Food Corner: Top Japanese Restaurants for Sushi",
            writer: "admin",
            active: false
        },
        {
            img: '../assets/OtherArticle/fi-street-food-800x527.jpg',
            title: "Food Corner: Top Japanese Restaurants for Sushi",
            writer: "admin",
            active: false
        },
        {
            img: '../assets/OtherArticle/fi-organic-breakfast-800x527.jpg',
            title: "Food Corner: Top Japanese Restaurants for Sushi",
            writer: "admin",
            active: false
        },
        {
            img: '../assets/OtherArticle/fi-water-side-rest-800x527.jpg',
            title: "Food Corner: Top Japanese Restaurants for Sushi",
            writer: "admin",
            active: false
        }
    ],
    otherArticleSel: {
        japaneseRestaurant: {
            img: '../assets/RoundImg/single-post-img3-66x66.jpg',
            title: "Food Corner: Top Japanese Restaurants for Sushi"
        },
        singapore: {
            img: '../assets/RoundImg/singapore-featured-image-66x66.jpg',
            title: "Food Corner: Top Japanese Restaurants for Sushi"
        },
        nutritionalTips: {
            img: '../assets/RoundImg/slide1-bg-66x66.jpg',
            title: "Food Corner: Top Japanese Restaurants for Sushi"
        }
    },
    footerImg: {
        Nan: "../assets/Footer/Yogurt-Nan-600x395.jpg",
        fruit: "../assets/Footer/Mixed-fruits-600x395.jpg",
        breakfast: "../assets/Footer/r-rachel-park-366508-unsplash-min-600x395.jpg",
        icecream: "../assets/Footer/r-michelle-tsang-500721-unsplash-min-600x395.jpg"
    },
    links: ["Recipes", "Places", "Blog", "About", "Contact"],
    contactUs: {
        address: {
            class: "fa-solid fa-location-dot",
            text: "775 New York Ave, Brooklyn, Kings, New York 11203"
        },
        phoneNumber: {
            class: "fa-solid fa-phone-flip",
            text: "+ 0100-505-0000"
        },
        mail: {
            class: "fa-solid fa-envelope",
            text: "info@your-domain.com"
        }
    },
    app: ["../assets/Apps/download-android-200x66.png", "../assets/Apps/download-app-store-200x66.png"]
});