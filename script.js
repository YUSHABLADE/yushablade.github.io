const menuButton = document.getElementById("menuButton");
const sideMenu = document.getElementById("sideMenu");
const menuOverlay = document.getElementById("menuOverlay");


// ==========================================
// MENÜYÜ AÇ
// ==========================================

function openMenu() {

    sideMenu.classList.add("active");
    menuOverlay.classList.add("active");
    menuButton.classList.add("active");

    menuButton.setAttribute(
        "aria-expanded",
        "true"
    );

    menuButton.setAttribute(
        "aria-label",
        "Menüyü kapat"
    );

}


// ==========================================
// MENÜYÜ KAPAT
// ==========================================

function closeMenu() {

    sideMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
    menuButton.classList.remove("active");

    menuButton.setAttribute(
        "aria-expanded",
        "false"
    );

    menuButton.setAttribute(
        "aria-label",
        "Menüyü aç"
    );

}


// ==========================================
// ☰ → X / X → ☰
// ==========================================

menuButton.addEventListener(
    "click",
    () => {

        if (
            sideMenu.classList.contains("active")
        ) {

            closeMenu();

        } else {

            openMenu();

        }

    }
);


// ==========================================
// ARKA PLANA TIKLAYINCA KAPAT
// ==========================================

menuOverlay.addEventListener(
    "click",
    () => {

        closeMenu();

    }
);


// ==========================================
// MENÜDEN SAYFAYA GİDİNCE KAPAT
// ==========================================

const menuLinks =
    document.querySelectorAll(
        ".menu-links a"
    );

menuLinks.forEach(
    (link) => {

        link.addEventListener(
            "click",
            () => {

                closeMenu();

            }
        );

    }
);


// ==========================================
// ESC İLE KAPAT
// ==========================================

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            sideMenu.classList.contains("active")
        ) {

            closeMenu();

        }

    }
);