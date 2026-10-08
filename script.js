document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = mobileMenu.querySelectorAll("a");
  const yearElement = document.getElementById("year");

  // Current year
  yearElement.textContent = new Date().getFullYear();

  // Mobile navigation
  function toggleMenu() {
    const isOpen = mobileMenu.classList.toggle("open");

    menuButton.classList.toggle("active", isOpen);
    menuButton.setAttribute("aria-expanded", isOpen.toString());

    document.body.classList.toggle("menu-open", isOpen);
  }

  function closeMenu() {
    mobileMenu.classList.remove("open");
    menuButton.classList.remove("active");
    menuButton.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  }

  menuButton.addEventListener("click", toggleMenu);

  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close menu when Escape is pressed
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  // Close mobile menu if user resizes back to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1000) {
      closeMenu();
    }
  });

  // Highlight current navigation section
  const sections = document.querySelectorAll("main section[id]");
  const desktopLinks = document.querySelectorAll(".nav-links a");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        desktopLinks.forEach((link) => {
          link.classList.remove("active");

          if (link.getAttribute("href") === `#${entry.target.id}`) {
            link.classList.add("active");
          }
        });
      });
    },
    {
      rootMargin: "-35% 0px -55% 0px",
    }
  );

  sections.forEach((section) => observer.observe(section));
});