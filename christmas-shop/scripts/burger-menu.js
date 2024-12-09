const burger = document.querySelector(".burger");
const burgerLineTop = document.querySelector(".line-top");
const burgerLineBottom = document.querySelector(".line-bottom");
const menuList = document.querySelector(".menu__list");

burger.addEventListener("click", () => {
    controlMenu();
})

function controlMenu() {
    menuList.classList.toggle("menu__list-open");
    burgerLineTop.classList.toggle("line-top-close");
    burgerLineBottom.classList.toggle("line-bottom-close");
    document.body.classList.toggle("no-scroll");
}

menuList.addEventListener("click", (e) => {
    if (e.target.closest(".menu-item")) {
        controlMenu();
    }
});

window.addEventListener("resize", () => {
    const width = window.innerWidth;
    if (width > 768) {
        controlMenu();
    }
})