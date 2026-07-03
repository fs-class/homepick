/* ==========================================
   Homepick Header JS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const header = document.querySelector(".homepick-header");
    const megaMenu = document.querySelector(".mega-menu");
    const gnbItems = document.querySelectorAll(".gnb-item");

    let hideTimer = null;

    /* ======================================
       Mega Menu Open
    ====================================== */

    function openMenu() {

        clearTimeout(hideTimer);

        megaMenu.classList.add("show");

    }

    /* ======================================
       Mega Menu Close
    ====================================== */

    function closeMenu() {

        hideTimer = setTimeout(() => {

            megaMenu.classList.remove("show");

        }, 150);

    }

    /* ======================================
       Header Hover
    ====================================== */

    header.addEventListener("mouseenter", openMenu);

    header.addEventListener("mouseleave", closeMenu);

    /* ======================================
       Active Menu
    ====================================== */

    gnbItems.forEach(item => {

        item.addEventListener("mouseenter", function () {

            gnbItems.forEach(li => li.classList.remove("active"));

            this.classList.add("active");

        });

    });

    header.addEventListener("mouseleave", () => {

        gnbItems.forEach(li => li.classList.remove("active"));

    });

    /* ======================================
       Sticky Header
    ====================================== */

    let lastScroll = 0;

    window.addEventListener("scroll", () => {

        const current = window.pageYOffset;

        if(current > 50){

            header.classList.add("fixed");

        }else{

            header.classList.remove("fixed");

        }

        lastScroll = current;

    });

});