(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll(".promo").forEach(function (card) {
    var btn = card.querySelector(".promo-btn");
    if (!btn) return;

    // pressionado: o botão afunda enquanto o ponteiro estiver baixado
    card.addEventListener("pointerdown", function () { btn.classList.add("is-pressed"); });
    ["pointerup", "pointerleave", "pointercancel"].forEach(function (t) {
      card.addEventListener(t, function () { btn.classList.remove("is-pressed"); });
    });

    card.addEventListener("click", function (ev) {
      var href = card.getAttribute("href");
      var b = btn.getBoundingClientRect();
      var inside = ev.clientX >= b.left && ev.clientX <= b.right && ev.clientY >= b.top && ev.clientY <= b.bottom;
      var x = inside ? ev.clientX - b.left : b.width / 2;
      var y = inside ? ev.clientY - b.top : b.height / 2;
      var size = Math.max(b.width, b.height) * 1.9;

      var ripple = document.createElement("span");
      ripple.className = "ripple";
      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = (x - size / 2) + "px";
      ripple.style.top = (y - size / 2) + "px";
      btn.appendChild(ripple);
      setTimeout(function () { ripple.remove(); }, 700);

      var plain = ev.button === 0 && !(ev.ctrlKey || ev.metaKey || ev.shiftKey || ev.altKey);
      if (href === "#") {
        ev.preventDefault();
      } else if (href && plain && !reduce && card.target !== "_blank") {
        // deixa a animação terminar antes de abrir o link
        ev.preventDefault();
        setTimeout(function () { window.location.href = href; }, 300);
      }
    });
  });
})();
