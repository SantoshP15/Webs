const hero = document.querySelector(".hero");
const loginContainer = document.querySelector(".login-container");
const loginBox = document.querySelector(".login-box");

const enterBtn = document.getElementById("enterBtn");
const backBtn = document.getElementById("backBtn");

// --------------------
// Open Login
// --------------------

enterBtn.addEventListener("click", () => {

    hero.style.transform = "translateX(-35%) scale(.9)";
    hero.style.opacity = "0";

    loginContainer.style.top = "50%";
    loginContainer.style.transform = "translate(-50%,-50%)";

    loginBox.style.opacity = "1";
    loginBox.style.transform = "translateY(0) scale(1)";

});

// --------------------
// Back to Hero
// --------------------

backBtn.addEventListener("click", () => {

    hero.style.transform = "translateX(0) scale(1)";
    hero.style.opacity = "1";

    loginContainer.style.top = "120%";
    loginContainer.style.transform = "translate(-50%,0)";

    loginBox.style.opacity = "0";
    loginBox.style.transform = "translateY(60px) scale(.9)";

});