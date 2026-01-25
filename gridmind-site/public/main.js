(function () {
  const y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();

  // Smooth scroll for anchors
  document.querySelectorAll("a[data-scroll]").forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href") || "";
      if (href.startsWith("#")) {
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });
})();

// Mobile nav toggle (hamburger)
(() => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");

  if (!toggle || !nav) return;

  const openMenu = () =>


document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");
  if (!toggle || !nav) return;

  const isOpen = () => nav.classList.contains("is-open");

  const openMenu = () => {
    nav.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
  };

  const closeMenu = () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  const toggleMenu = () => {
    isOpen() ? closeMenu() : openMenu();
  };

  // Use pointerup so it works reliably across mouse + touch
  toggle.addEventListener("pointerup", (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleMenu();
  });

  // Close when tapping a link
  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => closeMenu());
    a.addEventListener("pointerup", () => closeMenu());
  });

  // Close when clicking outside
  document.addEventListener("pointerup", (e) => {
    const t = e.target;
    if (!nav.contains(t) && !toggle.contains(t)) closeMenu();
  });

  // Close on scroll so it doesn't ride over the page
  window.addEventListener("scroll", () => {
    if (isOpen()) closeMenu();
  }, { passive: true });

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // Close if resized back to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 700) closeMenu();
  });
});
