// The footer theme control. As on the landing site (DESIGN.md), Light is the
// default; only System follows the OS. Only this browser keeps the choice;
// Light removes the key.
(function () {
  "use strict";
  var KEY = "procteye.theme";
  var root = document.documentElement;
  var inputs = document.querySelectorAll('.theme-control input[name="theme"]');

  function parse(value) {
    return value === "dark" || value === "system" ? value : "light";
  }

  function load() {
    try {
      return parse(localStorage.getItem(KEY));
    } catch (e) {
      return "light";
    }
  }

  function apply(choice) {
    if (choice === "system") root.removeAttribute("data-theme");
    else root.setAttribute("data-theme", choice);
    for (var i = 0; i < inputs.length; i++) inputs[i].checked = inputs[i].value === choice;
  }

  function save(choice) {
    try {
      if (choice === "light") localStorage.removeItem(KEY);
      else localStorage.setItem(KEY, choice);
    } catch (e) {
      // Blocked storage: the choice lasts for this page only.
    }
  }

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("change", function (event) {
      var choice = parse(event.target.value);
      save(choice);
      apply(choice);
    });
  }

  // Another tab changed the choice.
  window.addEventListener("storage", function (event) {
    if (event.key === KEY || event.key === null) apply(parse(event.newValue));
  });

  apply(load());
})();
