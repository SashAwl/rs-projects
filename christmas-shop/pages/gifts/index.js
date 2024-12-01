/* Gift box */
const giftBox = document.querySelector(".gift__box");
const giftItemList = document.querySelectorAll(".gift-item");
completeGiftBox(giftBox, 12, "../../assets/");

/* Category switching */
const giftsTags = document.querySelector(".gift__tags");
const tagSelectionCollection = document.querySelectorAll(".tag-selection");


giftsTags.addEventListener("click", (e) => {
    if (e.target.closest(".tag-selection")) {
        tagSelectionCollection.forEach((item) => item.classList.remove("selected-tag"));
        e.target.classList.add("selected-tag");

        giftItemList.forEach(item => item.classList.add("gift-item-hidden"));
        setTimeout(() => {
            giftBox.innerHTML = "";
            const currentTag = e.target.textContent;
            completeGiftBox(giftBox, 12, "../../assets/", currentTag);
        }, 600);
    }
})