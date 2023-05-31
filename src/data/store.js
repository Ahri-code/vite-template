import { reactive } from "vue";

export const store = reactive({
    headNavbar: {
        home: "Home",
        recipies: "Recipies",
        places: "Places",
        blog: "Blog",
        about: "About",
        contact: "Contacts",
        search: "fa-solid fa-magnifying-glass"
    },
    followUs: {
        facebook: "fa-brands fa-facebook-f",
        instagram: "fa-brands fa-instagram",
        twitter: "fa-brands fa-twitter",
        youtube: "fa-brands fa-youtube"
    }
});