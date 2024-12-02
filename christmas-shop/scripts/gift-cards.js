function getData(pageLocation) {
    return fetch(`${pageLocation}giftData.json`)
        .then(data => data.json())
        .then(dataList => dataList);
}

function getColorCategory(category) {
    if (category === "For Work") return "heading-work";
    if (category === "For Health") return "heading-health";
    if (category === "For Harmony") return "heading-harmony";
}

function createCard({ name, category, image }, relativeLocalImg) {
    const giftItem = document.createElement("div");
    giftItem.classList.add("gift-item");

    const giftPhoto = document.createElement("img");
    giftPhoto.classList.add("gift-item__img");
    giftPhoto.alt = "gift-photo";
    giftPhoto.src = `${relativeLocalImg + 'images/' + image}`;

    const giftItemText = document.createElement("div");
    giftItemText.classList.add("gift-item__text");

    const giftCategory = document.createElement("h6");
    giftCategory.classList.add("tag", "heading", "heading-small", getColorCategory(category));
    giftCategory.textContent = category;

    const giftName = document.createElement("h4");
    giftName.classList.add("heading", "heading-gift-item");
    giftName.textContent = "OUR" + name;

    giftItemText.append(giftCategory, giftName);
    giftItem.append(giftPhoto, giftItemText);

    return giftItem;
}

function createDetailsItem(name, value, relativeLocalImg) {
    const powerItem = document.createElement("div");
    powerItem.classList.add("power__item");

    const powerName = document.createElement("p");
    powerName.classList.add("power__name", "text");
    powerName.textContent = name;

    const powerValue = document.createElement("div");
    powerValue.classList.add("power__value");

    const powerValueNumber = document.createElement("p");
    powerValueNumber.textContent = value[name];

    const snowflakeBox = document.createElement("div");
    snowflakeBox.classList.add("snowflake");

    const snowflakeCount = Math.floor(+value[name] / 100);
    for (let i = 0; i < 5; i++) {
        const snowflakeItem = document.createElement("img");
        snowflakeItem.src = relativeLocalImg + 'icons/' + "snowflake.svg";
        snowflakeItem.alt = "snowflake";
        snowflakeItem.classList.add("snowflake__item");

        if (i >= snowflakeCount) {
            snowflakeItem.style.opacity = "0.2";
        }
        snowflakeBox.append(snowflakeItem);
    };

    powerValue.append(powerValueNumber, snowflakeBox);
    powerItem.append(powerName, powerValue);
    return powerItem;
}

function closeModal(modalItem) {
    const modal = modalItem.closest(".modal-block");
    const backModal = document.querySelector(".modal__background");
    document.body.style.overflow = "auto";
    backModal.style.display = "none";
    modal.remove();
}

function createModalCard(giftItemData, relativeLocalImg) {
    const modalBlock = document.createElement("div");
    modalBlock.classList.add("modal-block");

    const baseCard = createCard(giftItemData, relativeLocalImg);

    const describeText = document.createElement("p");
    describeText.textContent = giftItemData.description;
    describeText.classList.add("text", "modal__text", "modal__describe");

    const superPowerBlock = document.createElement("div");
    superPowerBlock.classList.add("power", "modal__text");

    const powerHead = document.createElement("h3");
    powerHead.classList.add("heading", "heading-small");
    powerHead.textContent = "Adds superpowers to:";

    const powerDetails = document.createElement("div");
    powerDetails.classList.add("power__details");

    const powerData = giftItemData.superpowers;
    for (powerItem in powerData) {
        const detailsLine = createDetailsItem(powerItem, powerData, relativeLocalImg);
        powerDetails.append(detailsLine);
    };

    const closeIcon = document.createElement("img");
    closeIcon.classList.add("close-icon");
    closeIcon.alt = "close-icon";
    closeIcon.src = relativeLocalImg + "icons/close.png";
    closeIcon.addEventListener("click", (e) => closeModal(e.target));

    superPowerBlock.append(powerHead, powerDetails);
    modalBlock.append(baseCard, describeText, superPowerBlock, closeIcon);
    return modalBlock;
}

async function completeGiftBox(parentBox, countCard, pageLocation, filterCategory = "all") {
    let data = await getData(pageLocation);
    if (filterCategory.toLowerCase() != "all") {
        data = data.filter(item => item.category.toLowerCase() === filterCategory.toLowerCase());
    }

    const backgroundModal = document.createElement("div");
    backgroundModal.classList.add("modal__background");
    parentBox.append(backgroundModal);

    for (let i = 0; i < countCard; i++) {
        const giftItemData = data[Math.floor(Math.random() * data.length)];
        const cardItem = createCard(giftItemData, pageLocation);

        cardItem.addEventListener("click", () => {
            document.body.style.overflow = "hidden";
            backgroundModal.style.display = "block";
            const giftModal = createModalCard(giftItemData, pageLocation);
            parentBox.append(giftModal);
        })
        parentBox.append(cardItem);
    }
}

window.addEventListener("click", (e) => {
    if (e.target.matches(".modal__background")) {
        const modal = document.querySelector(".modal-block");
        closeModal(modal);
    }
})
