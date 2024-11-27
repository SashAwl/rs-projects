const burger = document.querySelector(".burger");
const burgerClose = document.querySelector(".burger__close");
const menuList = document.querySelector(".menu__list");

burger.addEventListener("click", () => {
    menuList.classList.add("menu__list-open");
    burger.classList.add("burger-hidden");
    burgerClose.classList.remove("burger__close-hidden");
})

burgerClose.addEventListener("click", () => {
    menuList.classList.remove("menu__list-open");
    burger.classList.remove("burger-hidden");
    burgerClose.classList.add("burger__close-hidden");
})