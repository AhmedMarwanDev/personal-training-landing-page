const navigation = document.querySelector(".section.header").querySelector(".navigation");
const aside = document.querySelector(".section.aside");
const openMenuButton = document.getElementById("open-menu-button");
const closeMenuButton = document.getElementById("close-menu-button");

toggleMenuVisiblity();

function openMenu () {
    aside.style.display = "block";
    openMenuButton.style.display = "none";
};

function closeMenu () {
    aside.style.display = "none";
    openMenuButton.style.display = "block";
};

openMenuButton.addEventListener("click", openMenu);
closeMenuButton.addEventListener("click", closeMenu);

function toggleMenuVisiblity () {
    if (window.innerWidth >= 780) {
        navigation.style.display = "block";
        aside.style.display = "none";
        openMenuButton.style.display = "none";
    } else if (window.innerWidth < 780) {
        navigation.style.display = "none";
        aside.style.display = "none";
        openMenuButton.style.display = "flex";    
    }
};

window.addEventListener("resize", toggleMenuVisiblity);

aside.addEventListener("click", e => {
    if (e.target.matches("a")) {
        closeMenu();
    };
});