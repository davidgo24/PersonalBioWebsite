const links = document.querySelectorAll(".navbar > nav > ul > li");
const cards = document.querySelectorAll(".card");


[...links].map((link, index) => {
    link.addEventListener("click", () => onLinkClick(link, index), false);
});

const onLinkClick = (link, currentIndex) => {
    const selectedItem = link.getAttribute("name");

    cards.forEach(card => {
        card.classList.remove("active");

    })

    const currentCard = [...cards].find((card) =>
        card.classList.contains(selectedItem)
    );

    currentCard.classList.add("active");

};

