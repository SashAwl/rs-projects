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
    giftPhoto.src = `${relativeLocalImg + image}`;

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

async function completeGiftBox(parantBox, countCard, pageLocation) {
    const data = await getData(pageLocation);
    for (let i = 0; i < countCard; i++) {
        const giftItemData = data[Math.floor(Math.random() * data.length)];
        const cardItem = createCard(giftItemData, pageLocation + 'images/');
        parantBox.appendChild(cardItem);
    }
}
