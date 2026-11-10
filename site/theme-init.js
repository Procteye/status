// Applies the visitor's theme before first paint. As on the landing site
// (DESIGN.md), Light is the default: localStorage "procteye.theme" is "dark"
// or "system"; anything else, or storage that throws, means Light.
/* global localStorage, document */
(function () {
  var value = null;
  try {
    value = localStorage.getItem("procteye.theme");
  } catch {
    // Blocked storage means Light.
  }
  if (value !== "system") {
    document.documentElement.setAttribute("data-theme", value === "dark" ? "dark" : "light");
  }
})();
