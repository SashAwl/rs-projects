/* Gift box */
const giftBox = document.querySelector(".gift__box");
const giftItemList = document.querySelectorAll(".gift-item");
completeGiftBox(giftBox, null, "../../assets/");

/* Category switching */
const giftsTags = document.querySelector(".gift__tags");
const tagSelectionCollection = document.querySelectorAll(".tag-selection");


giftsTags.addEventListener("click", (e) => {
    if (e.target.closest(".tag-selection")) {
        tagSelectionCollection.forEach((item) => item.classList.remove("selected-tag"));
        e.target.classList.add("selected-tag");

        giftBox.classList.add("gift-hidden");
        setTimeout(() => {
            giftBox.innerHTML = "";
            const currentTag = e.target.textContent;
            completeGiftBox(giftBox, null, "../../assets/", currentTag);
            giftBox.classList.remove("gift-hidden");
        }, 50);
    }
});


/* Scroll to top */
const scrollTop = document.querySelector(".scroll-to-top");
window.addEventListener("scroll", () => {
    const windowWidth = document.body.offsetWidth;
    scrollTop.style.display = (window.scrollY > 300 && windowWidth < 769) ? "block" : "none";
});

window.addEventListener("resize", () => {
    const windowWidth = document.body.offsetWidth;
    scrollTop.style.display = (windowWidth < 769) ? "block" : "none";
});

scrollTop.addEventListener("click", () => {
    window.scrollTo(0, 0);
});