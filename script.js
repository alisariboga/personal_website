// Highlight active menu link
const links = document.querySelectorAll("nav a");
const currentPage = window.location.pathname;

links.forEach(link => {
    if (link.getAttribute("href") === currentPage.split("/").pop()) {
        link.style.borderBottom = "2px solid #0077cc";
    }
});
