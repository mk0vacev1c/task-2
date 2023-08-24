// JavaScript for card flip animation
document.addEventListener("DOMContentLoaded", function () {
    const playerCards = document.querySelectorAll(".player-card");

    playerCards.forEach(function (card) {
        card.addEventListener("click", function () {
            card.querySelector(".card").classList.toggle("flip");
        });
    });
});
