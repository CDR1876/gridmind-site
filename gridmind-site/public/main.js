document.addEventListener("DOMContentLoaded", () => {
  // Year
  const y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();

  // Smooth scroll
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

  // Hamburger menu
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");
  if (!toggle || !nav) return;

  const isOpen = () => toggle.getAttribute("aria-expanded") === "true";
  const setOpen = (open) => toggle.setAttribute("aria-expanded", open ? "true" : "false");

  setOpen(false);

  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(!isOpen());
  });

  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => setOpen(false));
  });

  document.addEventListener("click", (e) => {
    const t = e.target;
    if (!nav.contains(t) && !toggle.contains(t)) setOpen(false);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 700) setOpen(false);
  });
});
