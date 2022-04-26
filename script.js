"use strict";

let selectedRating  = 0;

const ratingButtons = document.querySelectorAll(".rating-button");
const submitButton = document.querySelector(".submit-button");
const thankSection = document.querySelector(".thanking-section");
const selectionText = document.querySelector(".selection-text");
const chosenSelection = document.querySelector(".selected-rating");
const ratingContainer = document.querySelector(".rating-container");


ratingButtons.forEach((button) => {
    button.addEventListener("click", () => {
        selectedRating = button.innerHTML;
    })
});

submitButton.addEventListener("click", () => {
    selectionText.innerHTML = `You Selected ${selectedRating} out of 5`;
    thankSection.classList.remove("hidden");
    ratingContainer.classList.add("hidden");
})