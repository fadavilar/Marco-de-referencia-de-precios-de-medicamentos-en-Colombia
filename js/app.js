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
  const wrap = document.getElementById("referencias-groups");
  wrap.innerHTML = DATA.referencias
    .map(
      (group) => `
      <h3 class="ref-group-title">${group.categoria}</h3>
      <ul class="ref-list">
        ${group.items
          .map((r) => {
            const linkOpen = r.url ? `<a href="${r.url}" target="_blank" rel="noopener">` : `<span>`;
            const linkClose = r.url ? `</a>` : `</span>`;
            return `<li>${linkOpen}${r.titulo}${linkClose}<p>${r.nota}</p></li>`;
          })
          .join("")}
      </ul>`
    )
    .join("");
}

function renderHHIStatic() {
  const c = DATA.concentracion;
  document.getElementById("hhi-intro").innerHTML = c.intro;

  document.getElementById("hhi-academico").innerHTML = `
    <div class="card">
      <h3>${c.origen.titulo}</h3>
      <p>${c.origen.texto}</p>
    </div>
    <div class="card">
      <h3>${c.formula.titulo}</h3>
      <p>${c.formula.texto}</p>
    </div>
  `;

  document.getElementById("hhi-umbrales-generico-texto").innerHTML = c.umbralesGenericos.texto;
  document.getElementById("hhi-umbrales-generico").innerHTML = c.umbralesGenericos.bandas
    .map(
      (b) => `
      <div class="threshold-card ${b.badge}">
        <span class="badge ${b.badge}"><span class="dot"></span>${b.rango}</span>
        <p>${b.nombre}</p>
      </div>`
    )
    .join("");

  document.getElementById("hhi-umbrales-colombia-texto").innerHTML = c.umbralesColombia.texto;
  document.getElementById("hhi-umbrales-colombia").innerHTML = c.umbralesColombia.bandas
    .map(
      (b) => `
      <div class="threshold-card ${b.badge}">
        <span class="badge ${b.badge}"><span class="dot"></span>${b.rango}</span>
        <p>${b.nombre}</p>
      </div>`
    )
    .join("");
  document.getElementById("hhi-umbrales-nota").innerHTML = c.umbralesColombia.nota;

  document.getElementById("hhi-calc-texto").innerHTML = c.calculadora.texto;
}

function renderIRP() {
  const g = DATA.irp;
  document.getElementById("irp-intro").innerHTML = g.intro;

  document.getElementById("irp-metodologia").innerHTML = g.metodologia
    .map(
      (m) => `
      <div class="info-chip-wrap">
        <button class="info-chip" type="button">${m.titulo} <span class="info-chip-icon">ⓘ</span></button>
        <div class="info-tooltip">${m.texto}</div>
      </div>`
    )
    .join("");

  document.getElementById("irp-table-body").innerHTML = g.paises
    .map((p) => {
      const fuenteCell = p.url
        ? `<a href="${p.url}" target="_blank" rel="noopener">${p.fuente}</a>`
        : `<span class="irp-unverified">${p.fuente}</span>`;
      return `<tr><td>${p.pais}</td><td>${fuenteCell}</td></tr>`;
    })
    .join("");

  document.getElementById("irp-nota").innerHTML = g.nota;
}

function renderContratacion() {
  const c = DATA.contratacion;
  document.getElementById("contratacion-intro").innerHTML = c.intro;
  document.getElementById("contratacion-mapa-mental").innerHTML = `${c.mapaMental.texto} <a href="${c.mapaMental.url}" target="_blank" rel="noopener">${c.mapaMental.titulo} ↗</a>`;

  document.getElementById("contratacion-actores").innerHTML = c.actores
    .map(
      (a) => `
      <div class="card">
        <h3>${a.nombre}</h3>
        <p><strong>${a.rol}</strong></p>
        <p>${a.participacion}</p>
      </div>`
    )
    .join("");

  document.getElementById("contratacion-modelos").innerHTML = c.modelos
    .map(
      (m) => `
      <div class="card">
        <h3>${m.nombre}</h3>
        <p><strong>${m.resumen}</strong></p>
        <p>${m.detalle}</p>
      </div>`
    )
    .join("");

  document.getElementById("arc-titulo").textContent = c.preguntasARC.titulo;
  document.getElementById("arc-preguntas").innerHTML = c.preguntasARC.items
    .map((q) => `<li>${q}</li>`)
    .join("");

  document.getElementById("contratacion-arquitectura").innerHTML = c.arquitecturaPagos
    .map(
      (a) => `
      <div class="card">
        <h3>${a.nombre}</h3>
        <p>${a.texto}</p>
      </div>`
    )
    .join("");

  document.getElementById("contratacion-financiacion").innerHTML = `
    <div class="card">
      <h3>${c.financiacion.upc.titulo}</h3>
      <p>${c.financiacion.upc.texto}</p>
    </div>
    <div class="card">
      <h3>${c.financiacion.noUpc.titulo}</h3>
      <p>${c.financiacion.noUpc.texto}</p>
    </div>
  `;

  document.getElementById("recobro-titulo").textContent = c.financiacion.noUpc.proceso.titulo;
  document.getElementById("recobro-pasos").innerHTML = c.financiacion.noUpc.proceso.pasos
    .map((p) => `<li>${p}</li>`)
    .join("");

  document.getElementById("contratacion-transferencias").innerHTML = c.transferencias
    .map(
      (t) => `
      <div class="card">
        <span class="strategy-tag">Destinatario: ${t.destinatario}</span>
        <h3>${t.nombre}</h3>
        <p>${t.texto}</p>
      </div>`
    )
    .join("");

  document.getElementById("contratacion-privados").innerHTML = c.privados
    .map(
      (p) => `
      <div class="card">
        <h3>${p.nombre}</h3>
        <p>${p.texto}</p>
      </div>`
    )
    .join("");
}

function renderCufeStatic() {
  const d = DATA.reporteCufe;
  document.getElementById("cufe-intro").innerHTML = d.intro;

  document.getElementById("cufe-antes").innerHTML = `
    <span class="badge ${d.antes.badge}"><span class="dot"></span>${d.antes.titulo}</span>
    <ul class="ba-list">${d.antes.puntos.map((p) => `<li>${p}</li>`).join("")}</ul>
  `;
  document.getElementById("cufe-despues").innerHTML = `
    <span class="badge ${d.despues.badge}"><span class="dot"></span>${d.despues.titulo}</span>
    <ul class="ba-list">${d.despues.puntos.map((p) => `<li>${p}</li>`).join("")}</ul>
  `;

  document.getElementById("cufe-porque").innerHTML = d.porQueImporta;

  document.getElementById("cufe-timeline").innerHTML = d.hitos
    .map(
      (h) => `
      <div class="timeline-item">
        <div class="timeline-year">${h.fecha}</div>
        <div class="timeline-body">
          <div class="timeline-title">${h.numero}</div>
          <p>${h.resumen}</p>
        </div>
      </div>`
    )
    .join("");

  document.getElementById("cufe-videos-titulo").textContent = d.videos.titulo;
  document.getElementById("cufe-videos-texto").innerHTML = d.videos.texto;
  document.getElementById("cufe-videos-list").innerHTML = d.videos.items
    .map(
      (v) => `
      <a class="video-card" href="${v.url}" target="_blank" rel="noopener">
        <img class="video-thumb" src="https://i.ytimg.com/vi/${v.videoId}/hqdefault.jpg" alt="" loading="lazy" />
        <div class="video-info">
          <div class="video-title">${v.titulo}</div>
          <div class="video-channel">${v.canal}</div>
        </div>
      </a>`
    )
    .join("");
}

function renderStrategyCard(item, showAmbosTag) {
  return `
    <div class="strategy-card">
      <div class="strategy-head">
        <span class="strategy-tag">${item.categoria}</span>
        ${showAmbosTag ? `<span class="strategy-tag strategy-tag-ambos">Aplica a ambos canales</span>` : ""}
        <h3>${item.nombre}</h3>
        <p class="strategy-resumen">${item.resumen}</p>
      </div>
      <div class="strategy-body">
        <div>
          <div class="strategy-label">Cómo funciona</div>
          <p>${item.mecanismo}</p>
        </div>
        <div>
          <div class="strategy-label">En el contexto colombiano</div>
          <p>${item.colombia}</p>
        </div>
      </div>
      ${
        item.fuente
          ? `<a class="strategy-source" href="${item.fuente.url}" target="_blank" rel="noopener">Fuente: ${item.fuente.titulo} ↗</a>`
          : `<span class="strategy-source strategy-source-observed">Práctica comercial observada en el mercado colombiano — sin cita externa.</span>`
      }
    </div>`;
}

const estrategiasState = { canal: "institucional" };

function renderEstrategiasList() {
  const e = DATA.estrategias;
  const items = e.items.filter((item) => item.canal === estrategiasState.canal || item.canal === "ambos");
  document.getElementById("estrategias-list").innerHTML = items
    .map((item) => renderStrategyCard(item, item.canal === "ambos"))
    .join("");
}

function renderEstrategiasControls() {
  const wrap = document.getElementById("estrategias-canal-toggle");
  wrap.innerHTML = "";
  [
    { id: "institucional", label: "Canal Institucional" },
    { id: "comercial", label: "Canal Comercial" },
  ].forEach(({ id, label }) => {
    const btn = document.createElement("button");
    btn.textContent = label;
    btn.className = `canal-${id === "comercial" ? "retail" : id}` + (estrategiasState.canal === id ? " active" : "");
    btn.addEventListener("click", () => {
      estrategiasState.canal = id;
      renderEstrategiasControls();
      renderEstrategiasList();
    });
    wrap.appendChild(btn);
  });
}

function renderEstrategias() {
  const e = DATA.estrategias;
  document.getElementById("estrategias-intro").innerHTML = e.intro;
  renderEstrategiasControls();
  renderEstrategiasList();
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
  document.getElementById("hero-title").textContent = DATA.meta.titulo;
  document.getElementById("hero-lead").textContent = DATA.meta.subtitulo;
  document.getElementById("marco-intro").innerHTML = DATA.marco.intro;
  document.getElementById("margenes-nota").innerHTML = DATA.margenesNota;
  document.getElementById("cascada-fuente").innerHTML = DATA.cascadaFuente;

  renderMarco();
  renderHHIStatic();
  renderIRP();
  renderCufeStatic();
  renderContratacion();
  renderEstrategias();
  renderGlosario();
  renderReferencias();

  document.getElementById("glosario-search").addEventListener("input", (e) => {
    renderGlosario(e.target.value);
  });

  initNav();
  initTheme();
  initCascade();
  initHHI();
});
