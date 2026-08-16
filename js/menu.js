/* =========================================================
   CYCLE MART - MOBILE MENU
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle =
        document.getElementById("menuToggle");

    const navbar =
        document.getElementById("navbar");


    /* =====================================================
       CHECK ELEMENTS EXIST
    ===================================================== */

    if (!menuToggle || !navbar) {
        return;
    }


    /* =====================================================
       INITIAL ARIA STATE
    ===================================================== */

    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );


    /* =====================================================
       OPEN / CLOSE MENU
    ===================================================== */

    menuToggle.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            const isOpen =
                navbar.classList.toggle("active");

            menuToggle.classList.toggle(
                "active",
                isOpen
            );

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        }
    );


    /* =====================================================
       CLOSE MENU WHEN NAVIGATION LINK IS CLICKED
    ===================================================== */

    const navLinks =
        navbar.querySelectorAll(
            "a"
        );


    navLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                closeMenu();

            }
        );

    });


    /* =====================================================
       CLOSE MENU WHEN CLICKING OUTSIDE
    ===================================================== */

    document.addEventListener(
        "click",
        function (event) {

            const clickedInsideNavbar =
                navbar.contains(event.target);

            const clickedMenuButton =
                menuToggle.contains(event.target);


            if (
                !clickedInsideNavbar &&
                !clickedMenuButton
            ) {

                closeMenu();

            }

        }
    );


    /* =====================================================
       CLOSE MENU WITH ESCAPE KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                closeMenu();

            }

        }
    );


    /* =====================================================
       CLOSE MENU WHEN WINDOW IS RESIZED
    ===================================================== */

    window.addEventListener(
        "resize",
        function () {

            if (window.innerWidth > 900) {

                closeMenu();

            }

        }
    );


    /* =====================================================
       CLOSE MENU FUNCTION
    ===================================================== */

    function closeMenu() {

        navbar.classList.remove(
            "active"
        );

        menuToggle.classList.remove(
            "active"
        );

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }

});