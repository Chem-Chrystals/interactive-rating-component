const reviews = document.querySelectorAll(".reviews span");
const detail = document.querySelector(".details-number");
const button = document.querySelector("button");
const checkout = document.querySelector(".checkout");
let stats = false;
reviews.forEach((review) => {
    review.addEventListener("click", () => {
        reviews.forEach((r) => r.classList.remove("active"));
        review.classList.add("active");
        detail.innerHTML = review.innerHTML;
        stats = true;
    });
});
button.addEventListener("click", () => {
    if (stats) {
        checkout.style.transform = "scale(1)";
    }
})