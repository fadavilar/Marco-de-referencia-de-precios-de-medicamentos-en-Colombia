// Navegación por pestañas + render de contenido estático desde DATA

function renderMarco() {
  const pilaresWrap = document.getElementById("marco-pilares");
  pilaresWrap.innerHTML = DATA.marco.pilares
    .map(
      (p) => `
      <div class="card">
        <h3>${p.titulo}</h3>
        <p>${p.texto}</p>
      </div>`
    )
    .join("");

  const regimenesWrap = document.getElementById("marco-regimenes");
  regimenesWrap.innerHTML = DATA.marco.regimenes
    .map(
      (r) => `
      <div class="card regime-card ${r.badge}">
        <h3>${r.nombre}
          <span class="badge ${r.badge}"><span class="dot"></span>${
            r.badge === "good" ? "Menor intervención" : r.badge === "warning" ? "Intervención media" : "Mayor intervención"
          }</span>
        </h3>
        <div class="resumen">${r.resumen}</div>
        <div class="detalle">${r.detalle}</div>
      </div>`
    )
    .join("");
}

function renderMercado(kind, introId, puntosId) {
  const d = DATA[kind];
  document.getElementById(introId).innerHTML = d.intro;
  document.getElementById(puntosId).innerHTML = d.puntos
    .map(
      (p) => `
      <div class="card">
        <h3>${p.titulo}</h3>
        <p>${p.texto}</p>
      </div>`
    )
    .join("");
}

function renderGlosario(filter = "") {
  const wrap = document.getElementById("glosario-list");
  const f = filter.trim().toLowerCase();
  const items = DATA.glosario.filter(
    (g) => !f || g.termino.toLowerCase().includes(f) || g.definicion.toLowerCase().includes(f)
  );
  wrap.innerHTML = items
    .map(
      (g) => `
      <div class="entry">
        <dt>${g.termino}</dt>
        <dd>${g.definicion}</dd>
      </div>`
    )
    .join("") || `<p style="color:var(--text-muted); font-size:13.5px;">Sin resultados para "${filter}".</p>`;
}

function renderReferencias() {
  const wrap = document.getElementById("referencias-list");
  wrap.innerHTML = DATA.referencias
    .map((r) => {
      const linkOpen = r.url ? `<a href="${r.url}" target="_blank" rel="noopener">` : `<span>`;
      const linkClose = r.url ? `</a>` : `</span>`;
      return `<li>${linkOpen}${r.titulo}${linkClose}<p>${r.nota}</p></li>`;
    })
    .join("");
}

function initNav() {
  const buttons = document.querySelectorAll("nav.tabs button");
  const views = document.querySelectorAll("section.view");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.view;
      buttons.forEach((b) => b.classList.toggle("active", b === btn));
      views.forEach((v) => v.classList.toggle("active", v.id === "view-" + target));
      window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    });
  });
}

function initTheme() {
  const btn = document.getElementById("theme-toggle");
  const stored = localStorage.getItem("precios-theme");
  if (stored) document.documentElement.setAttribute("data-theme", stored);
  const applyIcon = () => {
    const isDark =
      document.documentElement.getAttribute("data-theme") === "dark" ||
      (!document.documentElement.getAttribute("data-theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    btn.textContent = isDark ? "☀︎" : "☾";
  };
  applyIcon();
  btn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const isDarkNow =
      current === "dark" || (!current && window.matchMedia("(prefers-color-scheme: dark)").matches);
    const next = isDarkNow ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("precios-theme", next);
    applyIcon();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.title = DATA.meta.titulo;
  document.getElementById("brand-title").textContent = DATA.meta.titulo;
  document.getElementById("hero-title").textContent = DATA.meta.titulo;
  document.getElementById("hero-lead").textContent = DATA.meta.subtitulo;
  document.getElementById("marco-intro").innerHTML = DATA.marco.intro;
  document.getElementById("margenes-nota").innerHTML = DATA.margenesNota;

  renderMarco();
  renderMercado("retail", "retail-intro", "retail-puntos");
  renderMercado("institucional", "institucional-intro", "institucional-puntos");
  renderGlosario();
  renderReferencias();

  document.getElementById("glosario-search").addEventListener("input", (e) => {
    renderGlosario(e.target.value);
  });

  initNav();
  initTheme();
  initCascade();
});
