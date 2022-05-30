const header_nav = document.querySelector(".header-nav");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
// alert("Plz Like");
nav_header.classList.toggle("active");
};


header_nav.addEventListener("click", () => toggleNavbar());
