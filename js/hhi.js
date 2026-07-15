// Calculadora interactiva del Índice de Herfindahl-Hirschman (HHI)
// Se ingresan valores absolutos (ventas, unidades, cualquier magnitud comparable);
// la participación (%) de cada actor se calcula automáticamente como su proporción
// del total, así que siempre suma 100% por construcción — sin normalización manual.

const HHI_CAT_VARS = ["--cat-1", "--cat-2", "--cat-3", "--cat-4", "--cat-5", "--cat-6", "--cat-7", "--cat-8"];
const HHI_MAX_ROWS = 8;

let hhiRows = [];

function hhiInitRows() {
  hhiRows = DATA.concentracion.calculadora.ejemplo.map((r) => ({ ...r }));
}

function hhiCompute() {
  const total = hhiRows.reduce((acc, r) => acc + (Number(r.valor) || 0), 0);
  if (total <= 0) return { total: 0, hhi: 0, shares: hhiRows.map(() => 0) };
  const shares = hhiRows.map((r) => ((Number(r.valor) || 0) / total) * 100);
  const hhi = shares.reduce((acc, s) => acc + s * s, 0);
  return { total, hhi: Math.round(hhi), shares };
}

function hhiClassifyGeneric(hhi) {
  if (hhi < 1500) return { badge: "good", label: "No concentrado (HHI < 1.500)" };
  if (hhi < 2500) return { badge: "warning", label: "Moderadamente concentrado (1.500–2.499)" };
  return { badge: "critical", label: "Altamente concentrado (HHI ≥ 2.500)" };
}

function hhiClassifyColombia(hhi) {
  if (hhi < 2500) return { badge: "good", label: "Puntaje 1 — entra directo a Libertad Vigilada" };
  if (hhi < 10000) return { badge: "warning", label: "Puntaje 2 — se combina con participación de ventas" };
  return { badge: "critical", label: "Puntaje 3 — mercado monopólico (HHI = 10.000)" };
}

function hhiRenderTable() {
  const tbody = document.getElementById("hhi-table-body");
  tbody.innerHTML = "";
  const { shares } = hhiCompute();

  hhiRows.forEach((row, i) => {
    const tr = document.createElement("tr");

    const tdName = document.createElement("td");
    const inputName = document.createElement("input");
    inputName.type = "text";
    inputName.value = row.nombre;
    inputName.className = "hhi-input-name";
    inputName.addEventListener("input", (e) => {
      hhiRows[i].nombre = e.target.value;
      hhiRenderResult();
    });
    tdName.appendChild(inputName);

    const tdValor = document.createElement("td");
    const inputValor = document.createElement("input");
    inputValor.type = "number";
    inputValor.min = "0";
    inputValor.value = row.valor;
    inputValor.className = "hhi-input-valor";
    inputValor.addEventListener("input", (e) => {
      hhiRows[i].valor = parseFloat(e.target.value) || 0;
      hhiRenderTable();
      hhiRenderResult();
    });
    tdValor.appendChild(inputValor);

    const tdShare = document.createElement("td");
    tdShare.className = "hhi-share-cell";
    tdShare.textContent = shares[i] ? shares[i].toFixed(1) + "%" : "—";

    const tdRemove = document.createElement("td");
    const btnRemove = document.createElement("button");
    btnRemove.className = "hhi-remove-btn";
    btnRemove.textContent = "×";
    btnRemove.setAttribute("aria-label", "Quitar actor");
    btnRemove.addEventListener("click", () => {
      hhiRows.splice(i, 1);
      hhiRenderAll();
    });
    tdRemove.appendChild(btnRemove);

    tr.appendChild(tdName);
    tr.appendChild(tdValor);
    tr.appendChild(tdShare);
    tr.appendChild(tdRemove);
    tbody.appendChild(tr);
  });

  const addBtn = document.getElementById("hhi-add-row");
  addBtn.disabled = hhiRows.length >= HHI_MAX_ROWS;
  addBtn.textContent = hhiRows.length >= HHI_MAX_ROWS ? "Máximo 8 actores" : "+ Agregar actor";
}

function hhiRenderResult() {
  const { total, hhi, shares } = hhiCompute();

  const stack = document.getElementById("hhi-stack");
  stack.innerHTML = "";
  hhiRows.forEach((row, i) => {
    const share = shares[i] || 0;
    if (share <= 0) return;
    const seg = document.createElement("div");
    seg.className = "hhi-segment";
    seg.style.width = share + "%";
    seg.style.background = `var(${HHI_CAT_VARS[i % HHI_CAT_VARS.length]})`;
    seg.title = `${row.nombre}: ${share.toFixed(1)}%`;
    stack.appendChild(seg);
  });

  const sumNote = document.getElementById("hhi-sum-note");
  const resultWrap = document.getElementById("hhi-result-wrap");
  const hhiValueEl = document.getElementById("hhi-value");
  const genericBadge = document.getElementById("hhi-badge-generico");
  const colombiaBadge = document.getElementById("hhi-badge-colombia");

  const totalLabel = Number.isInteger(total) ? total.toLocaleString("es-CO") : total.toLocaleString("es-CO", { maximumFractionDigits: 1 });

  if (total <= 0) {
    resultWrap.classList.add("invalid");
    sumNote.innerHTML = `Ingresa al menos un valor mayor que cero para calcular el HHI.`;
    hhiValueEl.textContent = "—";
    genericBadge.className = "badge";
    genericBadge.querySelector("span:last-child").textContent = "Sin datos";
    colombiaBadge.className = "badge";
    colombiaBadge.querySelector("span:last-child").textContent = "Sin datos";
    return;
  }

  resultWrap.classList.remove("invalid");
  sumNote.innerHTML = `Total del mercado: <strong>${totalLabel}</strong> — cada participación (%) se calcula automáticamente sobre este total.`;
  hhiValueEl.textContent = hhi.toLocaleString("es-CO");

  const generic = hhiClassifyGeneric(hhi);
  genericBadge.className = "badge " + generic.badge;
  genericBadge.querySelector("span:last-child").textContent = generic.label;

  const colombia = hhiClassifyColombia(hhi);
  colombiaBadge.className = "badge " + colombia.badge;
  colombiaBadge.querySelector("span:last-child").textContent = colombia.label;
}

function hhiRenderAll() {
  hhiRenderTable();
  hhiRenderResult();
}

function initHHI() {
  hhiInitRows();
  document.getElementById("hhi-add-row").addEventListener("click", () => {
    if (hhiRows.length >= HHI_MAX_ROWS) return;
    hhiRows.push({ nombre: `Actor ${hhiRows.length + 1}`, valor: 0 });
    hhiRenderAll();
  });
  hhiRenderAll();
}
