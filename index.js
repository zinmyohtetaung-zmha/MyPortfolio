document.addEventListener("DOMContentLoaded", () => {

    // AOS animation
    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 800,
            once: true,
            offset: 70
        });
    }

    // Navbar style on scroll
    const navbar = document.getElementById("mainNav");

    const handleNavbar = () => {
        if (window.scrollY > 30) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    };

    handleNavbar();
    window.addEventListener("scroll", handleNavbar, { passive: true });

    // Close mobile navbar after clicking a link
    const navLinks = document.querySelectorAll(".navbar .nav-link");
    const navbarCollapse = document.getElementById("navbarNav");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth < 992 && navbarCollapse.classList.contains("show")) {
                bootstrap.Collapse.getOrCreateInstance(navbarCollapse).hide();
            }
        });
    });

    // Active navigation item
    const sections = document.querySelectorAll("section[id]");
    const navItems = document.querySelectorAll(".nav-link");

    const updateActiveNav = () => {
        const scrollPosition = window.scrollY + 140;

        sections.forEach(section => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            const id = section.getAttribute("id");

            if (scrollPosition >= top && scrollPosition < bottom) {
                navItems.forEach(item => item.classList.remove("active"));

                const activeLink = document.querySelector(
                    `.nav-link[href="#${id}"]`
                );

                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }
        });
    };

    updateActiveNav();
    window.addEventListener("scroll", updateActiveNav, { passive: true });

    // Current year
    const yearElement = document.getElementById("currentYear");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});
