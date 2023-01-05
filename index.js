function openCloseMenu() {
    for (menu of nav) {
        if (!menu.classList.contains("menuBox__menu--active")) {
            menu.classList.add("menuBox__menu--active");
        } else {
            menu.classList.remove("menuBox__menu--active");
        }
    }
}

const nav = document.getElementsByClassName("menuBox__menu");
const openMenuButton = document.getElementById("openMenuButton");
const closeMenuButton = document.getElementById("closeMenuButton");

openMenuButton.addEventListener("click", openCloseMenu);
closeMenuButton.addEventListener("click", openCloseMenu);
