const navigation = document.querySelector(".navigation.header-navigation");
const openMenuButton = document.getElementById("open-menu-button");
const closeMenuButton = document.getElementById("close-menu-button");
const mediaQuery = window.matchMedia("(max-width: 976px)");

function openMenu () {
    navigation.classList.add("is-open");
    openMenuButton.style.display = "none";
    openMenuButton.setAttribute("aria-expanded", "true");
};

function closeMenu () {
    navigation.classList.remove("is-open");
    openMenuButton.style.display = "block";
    openMenuButton.setAttribute("aria-expanded", "false");
};

openMenuButton.addEventListener("click", openMenu);
closeMenuButton.addEventListener("click", closeMenu);

navigation.addEventListener("click", e => {
    if (e.target !== navigation) {
        closeMenu();
    };
});

function handleBreakpointChange () {
    if (mediaQuery.matches) {
        navigation.classList.add("is-mobile");
    } else {
        navigation.classList.remove("is-mobile");
    };
};

mediaQuery.addEventListener("change", handleBreakpointChange);

handleBreakpointChange();