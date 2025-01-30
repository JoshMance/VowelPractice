const brand = document.querySelector("#brand");
const startButton = document.querySelector("#landingPage button[target='menuPage']");
const landingPage = document.querySelector("#landingPage");
const menuPage = document.querySelector("#menuPage");

startButton.addEventListener("mousedown", (event) => {
    landingPage.style.display = "none";
    menuPage.style.display = "block";
});

brand.addEventListener("mousedown", (event) => {
    landingPage.style.display = "block";
    menuPage.style.display = "none";
});