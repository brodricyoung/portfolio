async function loadComponent(id, file) {
    const res = await fetch(file);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
}

document.addEventListener("DOMContentLoaded", async () => {
    await loadComponent("header", "/portfolio/html-components/header.html");
    await loadComponent("footer", "/portfolio/html-components/footer.html");
});