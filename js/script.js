document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const nav = document.getElementById("nav");
    const overlay = document.getElementById("overlay");

    if (!menuIcon || !nav || !overlay) return;

    menuIcon.addEventListener("click", () => {
        nav.classList.toggle("active");
        overlay.classList.toggle("active");
    });

    overlay.addEventListener("click", () => {
        nav.classList.remove("active");
        overlay.classList.remove("active");
    });
});