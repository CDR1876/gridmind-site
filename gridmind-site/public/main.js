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

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");
  if (!toggle || !nav) return;

  const isOpen = () => toggle.getAttribute("aria-expanded") === "true";
  const setOpen = (open) => toggle.setAttribute("aria-expanded", open ? "true" : "false");

  // Always start closed
  setOpen(false);

  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(!isOpen());
  });

  // Close when clicking a link
  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => setOpen(false));
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    const t = e.target;
    if (!nav.contains(t) && !toggle.contains(t)) setOpen(false);
  });

  // Optional: close on scroll so it never overlays while you browse
  window.addEventListener("scroll", () => {
    if (isOpen()) setOpen(false);
  }, { passive: true });

  // Close on resize back to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 700) setOpen(false);
  });
});
