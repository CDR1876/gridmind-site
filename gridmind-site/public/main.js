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
