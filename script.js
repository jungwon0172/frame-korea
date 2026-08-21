(function () {
  var KEY = "frame-korea-cookie-consent";
  var banner = document.getElementById("cookie-banner");
  var btn = document.getElementById("cookie-accept");
  if (!banner) return;
  try {
    if (!localStorage.getItem(KEY)) {
      banner.classList.add("show");
    }
  } catch (e) {}
  if (btn) {
    btn.addEventListener("click", function () {
      try { localStorage.setItem(KEY, "1"); } catch (e) {}
      banner.classList.remove("show");
    });
  }
})();
