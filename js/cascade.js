// Calculadora / render de la cascada de precios P1 -> P5

const CASCADE_STAGE_KEYS = ["P1", "P2", "P3", "P4", "P5"];
const CASCADE_VARS = ["--p1", "--p2", "--p3", "--p4", "--p5"];
const MARGIN_KEYS = ["p1p2", "p2p3", "p3p4", "p4p5"];

const cascadeState = {
  canal: "retail",        // "retail" | "institucional"
  regimen: "vigilada",    // "vigilada" | "regulada" | "directo"
  p1: 12000,               // COP, valor de ejemplo
};

function formatCOP(value) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
}

function computeCascadeValues() {
  const margenes = DATA.margenes[cascadeState.regimen][cascadeState.canal];
  const p1 = Math.max(0, Number(cascadeState.p1) || 0);
  const p2 = p1 * (1 + margenes.p1p2 / 100);
  const p3 = p2 * (1 + margenes.p2p3 / 100);
  const p4 = p3 * (1 + margenes.p3p4 / 100);
  const p5 = p4 * (1 + margenes.p4p5 / 100);
  return {
    values: [p1, p2, p3, p4, p5],
    deltas: [margenes.p1p2, margenes.p2p3, margenes.p3p4, margenes.p4p5],
  };
}

function renderCascadeControls() {
  const canalWrap = document.getElementById("canal-toggle");
  canalWrap.innerHTML = "";
  [
    { id: "retail", label: "Canal Comercial" },
    { id: "institucional", label: "Canal Institucional" },
  ].forEach(({ id, label }) => {
    const btn = document.createElement("button");
    btn.textContent = label;
    btn.className = `canal-${id}` + (cascadeState.canal === id ? " active" : "");
    btn.addEventListener("click", () => {
      cascadeState.canal = id;
      renderAll();
    });
    canalWrap.appendChild(btn);
  });

  const regimenWrap = document.getElementById("regimen-toggle");
  regimenWrap.innerHTML = "";
  DATA.marco.regimenes.forEach((r) => {
    const btn = document.createElement("button");
    btn.textContent = r.nombre;
    btn.className = `regimen-${r.id}` + (cascadeState.regimen === r.id ? " active" : "");
    btn.addEventListener("click", () => {
      cascadeState.regimen = r.id;
      renderAll();
    });
    regimenWrap.appendChild(btn);
  });

  const p1Input = document.getElementById("p1-value");
  if (document.activeElement !== p1Input) {
    p1Input.value = cascadeState.p1;
  }
}

function renderCascadeChart() {
  const { values, deltas } = computeCascadeValues();
  const etapas = DATA.etapas[cascadeState.canal];
  const max = Math.max(...values, 1);

  const chart = document.getElementById("cascade-chart");
  chart.innerHTML = "";

  etapas.forEach((etapa, i) => {
    const col = document.createElement("div");
    col.className = "cascade-col";

    if (i > 0) {
      const chip = document.createElement("div");
      chip.className = "cascade-margin-chip";
      chip.textContent = `+${deltas[i - 1]}%`;
      col.appendChild(chip);
    } else {
      const spacer = document.createElement("div");
      spacer.className = "cascade-margin-chip";
      spacer.style.visibility = "hidden";
      spacer.textContent = "+0%";
      col.appendChild(spacer);
    }

    const val = document.createElement("div");
    val.className = "cascade-value";
    val.textContent = formatCOP(values[i]);
    col.appendChild(val);

    const bar = document.createElement("div");
    bar.className = "cascade-bar";
    const heightPct = Math.max(6, (values[i] / max) * 100);
    bar.style.height = heightPct + "%";
    bar.style.background = `var(${CASCADE_VARS[i]})`;
    col.appendChild(bar);

    const flag = document.createElement("div");
    flag.className = "cascade-visible-flag " + (etapa.visible ? "visible" : "oculto");
    flag.textContent = etapa.visible ? "Visible" : "Invisible";
    col.appendChild(flag);

    chart.appendChild(col);
  });

  const labels = document.getElementById("cascade-labels");
  labels.innerHTML = "";
  etapas.forEach((etapa) => {
    const col = document.createElement("div");
    col.className = "cascade-label-col";
    col.innerHTML = `
      <div class="id">${etapa.id}</div>
      <div class="nombre">${etapa.nombre}</div>
      <div class="alias">${etapa.alias}</div>
    `;
    labels.appendChild(col);
  });
}

function renderCascadeDetail() {
  const wrap = document.getElementById("stage-detail");
  wrap.innerHTML = "";
  const etapas = DATA.etapas[cascadeState.canal];
  etapas.forEach((etapa, i) => {
    const card = document.createElement("div");
    card.className = "stage-detail-card";
    card.innerHTML = `
      <div class="swatch" style="background:var(${CASCADE_VARS[i]})">${etapa.id}</div>
      <div>
        <h4>${etapa.nombre} <span style="color:var(--text-muted); font-weight:400;">— ${etapa.alias}</span></h4>
        <p>${etapa.texto}</p>
      </div>
    `;
    wrap.appendChild(card);
  });
}

function renderAll() {
  renderCascadeControls();
  renderCascadeChart();
  renderCascadeDetail();
}

function initCascade() {
  const p1Input = document.getElementById("p1-value");
  p1Input.addEventListener("input", (e) => {
    const v = parseInt(e.target.value.replace(/[^\d]/g, ""), 10);
    cascadeState.p1 = isNaN(v) ? 0 : v;
    renderCascadeChart();
    renderCascadeDetail();
  });
  renderAll();
}
