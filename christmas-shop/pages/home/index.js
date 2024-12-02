/* slider */
const sliderBox = document.querySelector(".slider__box");
const sliderWrapper = document.querySelector('.slider__wrapper');
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

function getClickCount() {
    return (window.innerWidth > 768) ? 3 : 6;
}

function getOffsetWidth() {
    const sliderBoxWidth = sliderBox.scrollWidth;
    const sliderWrapperWidth = sliderWrapper.offsetWidth;

    const firstSliderElem = document.querySelector(".slider__text:first-child");
    const distanseFromEdge = +window.getComputedStyle(firstSliderElem).marginLeft.slice(0, -2);

    return Math.ceil((sliderBoxWidth + distanseFromEdge - sliderWrapperWidth) / getClickCount());
}

let currentPosition = 0;
let rightClickCount = 0;
let leftClickCount = 0;

arrowLeft.addEventListener("click", () => {
    if (leftClickCount < getClickCount()) {
        currentPosition -= getOffsetWidth();
        sliderBox.style.transform = `translate(${-currentPosition}px)`;
        leftClickCount++;
        rightClickCount = getClickCount() - leftClickCount;
    }
    if (leftClickCount === getClickCount()) {
        arrowLeft.classList.add("arrow-disabled");
    }
    if (leftClickCount > 0) {
        arrowRight.classList.remove("arrow-disabled");
    }
})

arrowRight.addEventListener("click", () => {
    if (rightClickCount < getClickCount()) {
        currentPosition += getOffsetWidth();
        sliderBox.style.transform = `translate(${-currentPosition}px)`;
        rightClickCount++;
        leftClickCount = getClickCount() - rightClickCount;
    }
    if (rightClickCount === getClickCount()) {
        arrowRight.classList.add("arrow-disabled");
    }
    if (rightClickCount > 0) {
        arrowLeft.classList.remove("arrow-disabled");
    }
})

window.addEventListener("resize", () => {
    sliderBox.style.transform = `translate(${0}px)`;
    arrowRight.classList.remove("arrow-disabled");
    arrowLeft.classList.add("arrow-disabled");
    currentPosition = 0;
    rightClickCount = 0;
    leftClickCount = 0;
})


/* Gift box*/

const bestGiftBox = document.querySelector(".best-gifts__box");
completeGiftBox(bestGiftBox, 4, "./assets/");


/* Timer */

function updateTimer() {
    const now = new Date();
    const nextYear = now.getUTCFullYear() + 1;
    const newYear = new Date(Date.UTC(nextYear, 0, 1, 0, 0, 0));

    const waitTime = newYear - now;

    if (waitTime <= 0) {
        clearInterval(timerInterval);
        return;
    }

    const days = Math.floor(waitTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((waitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((waitTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((waitTime % (1000 * 60)) / 1000);

    document.querySelector(".cta-days").textContent = days;
    document.querySelector(".cta-hours").textContent = hours;
    document.querySelector(".cta-minutes").textContent = minutes;
    document.querySelector(".cta-seconds").textContent = seconds;
}

const timerInterval = setInterval(updateTimer, 1000);
updateTimer();

