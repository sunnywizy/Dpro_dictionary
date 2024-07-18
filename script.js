const nav = document.querySelector(".nav-item");
const toggleButton = document.querySelector(".toggle-btn");

toggleButton.addEventListener("click", () => {
    nav.classList.toggle("active");
});