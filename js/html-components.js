async function loadComponent(id, file) {
    const res = await fetch(file);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
}

document.addEventListener("DOMContentLoaded", async () => {
    const isHome = window.location.pathname.endsWith("index.html") ||
                   window.location.pathname === "/";

    const base = isHome ? "./" : "../";

    await loadComponent("header", `${base}html-components/header.html`);
    await loadComponent("footer", `${base}html-components/footer.html`);
});