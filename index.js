const mainDiv = document.querySelector(".rating-div")
const thankYouStateDiv = document.querySelector(".thank-you-state")
const submitButton = document.querySelector(".submit-btn")
const rateButton = document.querySelector(".rating-button")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".rating-button")

submitButton.addEventListener("click", () => {
    thankYouStateDiv.classList.remove('hidden')
    mainDiv.style.display = "none"
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})