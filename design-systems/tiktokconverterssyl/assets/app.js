(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- cards de canais: botão afunda + ripple (mantido da v1) ---------- */
  document.querySelectorAll(".promo").forEach(function (card) {
    var btn = card.querySelector(".promo-btn");
    if (!btn) return;

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
        ev.preventDefault();
        setTimeout(function () { window.location.href = href; }, 300);
      }
    });
  });

  /* ---------- galeria: cross-fade a cada 6 s, barras clicáveis ---------- */
  var galeria = document.querySelector("[data-galeria]");
  if (galeria) {
    var cenas = Array.prototype.slice.call(galeria.querySelectorAll(".cena"));
    var barras = Array.prototype.slice.call(galeria.querySelectorAll(".barra"));
    var TEMPO = 6000;
    var atual = 0, timer = 0, visivel = true, pausado = false;

    var reiniciarBarra = function () {
      barras.forEach(function (b, k) {
        var fill = b.querySelector("span");
        fill.style.animation = "none";
        void fill.offsetWidth;
        fill.style.animation = k === atual ? "" : "none";
      });
    };

    var agendar = function () {
      clearTimeout(timer);
      var parado = pausado || !visivel;
      galeria.classList.toggle("is-pausado", parado);
      if (reduce || parado || cenas.length < 2) return;
      timer = setTimeout(function () { ir(atual + 1); }, TEMPO);
    };

    var ir = function (i) {
      atual = (i + cenas.length) % cenas.length;
      cenas.forEach(function (c, k) {
        var on = k === atual;
        c.classList.toggle("is-ativa", on);
        if (on) c.removeAttribute("aria-hidden"); else c.setAttribute("aria-hidden", "true");
        var cta = c.querySelector(".cena-cta");
        if (on) cta.removeAttribute("tabindex"); else cta.setAttribute("tabindex", "-1");
      });
      barras.forEach(function (b, k) {
        b.classList.toggle("is-ativa", k === atual);
        b.setAttribute("aria-selected", String(k === atual));
      });
      reiniciarBarra();
      agendar();
    };

    barras.forEach(function (b) { b.addEventListener("click", function () { ir(Number(b.dataset.i)); }); });
    galeria.addEventListener("pointerenter", function (e) { if (e.pointerType === "mouse") { pausado = true; agendar(); } });
    galeria.addEventListener("pointerleave", function (e) { if (e.pointerType === "mouse") { pausado = false; agendar(); } });
    galeria.addEventListener("focusin", function () { pausado = true; agendar(); });
    galeria.addEventListener("focusout", function () { pausado = false; agendar(); });
    document.addEventListener("visibilitychange", function () { pausado = document.hidden; agendar(); });
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (e) { visivel = e[0].isIntersecting; agendar(); }).observe(galeria);
    }
    if (reduce) galeria.classList.add("is-estatico");
    agendar();
  }

  /* ---------- reveal ao rolar: cada bloco entra uma vez ---------- */
  var alvos = document.querySelectorAll(".rv");
  if (!("IntersectionObserver" in window) || reduce) {
    alvos.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -6% 0px" });
    alvos.forEach(function (el) { io.observe(el); });
  }
})();
