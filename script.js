document.addEventListener("DOMContentLoaded", () => {
    const exploreBtn = document.querySelector(".btn-warning");
    exploreBtn.addEventListener("click", () => {
        window.scrollTo({
            top: document.querySelector("gallery").offsetTop,
            behavior: "smooth",
        });
    });
});