async function loadComponent(id, file) {
    const res = await fetch(file);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
}

document.addEventListener("DOMContentLoaded", async () => {
    await loadComponent("header", "../html-components/header.html");
    await loadComponent("footer", "../html-components/footer.html");
});

// document.addEventListener("DOMContentLoaded", async () => {
//     // Check if the current path is the root index page
//     const isIndex = window.location.pathname === "/" || window.location.pathname.endsWith("/index.html");
//     const pathPrefix = isIndex ? "./html-components/" : "../html-components/";

//     await loadComponent("header", `${pathPrefix}header.html`);
//     await loadComponent("footer", `${pathPrefix}footer.html`);
// });