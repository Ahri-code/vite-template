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
    }
});