function openCloseMenu() {
    for (menu of nav) {
        if (!menu.classList.contains("menuBox__menu--active")) {
            menu.classList.add("menuBox__menu--active");
            if (menu.classList.contains("menuBox__menu--color")) {
                body.style.overflow = "hidden";
            }
        } else {
            menu.classList.remove("menuBox__menu--active");
            if (menu.classList.contains("menuBox__menu--color")) {
                body.style.overflow = "scroll";
            }
        }
    }
}

const body = document.querySelector("body");
const nav = document.getElementsByClassName("menuBox__menu");
const openMenuButton = document.getElementById("openMenuButton");
const closeMenuButton = document.getElementById("closeMenuButton");

openMenuButton.addEventListener("click", openCloseMenu);
closeMenuButton.addEventListener("click", openCloseMenu);

function showMessage() {
    document.getElementById("message").innerHTML = "We don't often study trees, but I thought it time we branched out."
}