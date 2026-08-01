const title = document.querySelector(".title");
const tagline = document.querySelector(".tagline");
const login = document.querySelector(".login-box");

window.addEventListener("scroll", () => {

    const scroll = window.scrollY;

    // Move title upward
    title.style.transform =
        `translateY(-${scroll * 0.8}px)
         scale(${1 - scroll / 1800})`;
    tagline.style.transform =
        `translateY(-${scroll * 0.2}px)
         scale(${1 - scroll / 1800})`;

    // Fade title
    title.style.opacity = 1 - scroll / 450;
    tagline.style.opacity = 1 - scroll / 450;

    // Show login
    if(scroll > 350){

        login.style.opacity = "1";
        login.style.transform = "translateY(0)";

    }else{

        login.style.opacity = "0";
        login.style.transform = "translateY(120px)";
    }

});