/* slider */
const sliderBox = document.querySelector(".slider__box");
const sliderWrapper = document.querySelector('.slider__wrapper');
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

const sliderBoxWidth = sliderBox.scrollWidth;
const sliderWrapperWidth = sliderWrapper.offsetWidth;
const clickCount = (window.innerWidth >= 768) ? 3 : 6;
console.log(sliderBoxWidth, sliderWrapperWidth, clickCount)

const firstSliderElem = document.querySelector(".slider__text:first-child");
const distanseFromEdge = +window.getComputedStyle(firstSliderElem).marginLeft.slice(0, -2);
console.log(distanseFromEdge)

const offsetLength = Math.ceil((sliderBoxWidth + distanseFromEdge - sliderWrapperWidth) / clickCount);

let currentPosition = 0;
let rightClickCount = 0;
let leftClickCount = 0;

arrowLeft.addEventListener("click", () => {
    if (leftClickCount < clickCount) {
        currentPosition -= offsetLength;
        sliderBox.style.transform = `translate(${-Math.min(currentPosition, sliderWrapperWidth)}px)`;
        leftClickCount++;
        rightClickCount = clickCount - leftClickCount;
    }
    if (leftClickCount === clickCount) {
        arrowLeft.classList.add("arrow-disabled");
    }
    if (leftClickCount > 0) {
        arrowRight.classList.remove("arrow-disabled");
    }
    console.log(currentPosition)
})

arrowRight.addEventListener("click", () => {
    if (rightClickCount < clickCount) {
        currentPosition += offsetLength;
        sliderBox.style.transform = `translate(${-Math.max(currentPosition, 0)}px)`;
        rightClickCount++;
        leftClickCount = clickCount - rightClickCount;
    }
    if (rightClickCount === clickCount) {
        arrowRight.classList.add("arrow-disabled");
    }
    if (rightClickCount > 0) {
        arrowLeft.classList.remove("arrow-disabled");
    }
    console.log(currentPosition)
})

