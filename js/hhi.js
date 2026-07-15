// Calculadora interactiva del Índice de Herfindahl-Hirschman (HHI)

const HHI_CAT_VARS = ["--cat-1", "--cat-2", "--cat-3", "--cat-4", "--cat-5", "--cat-6", "--cat-7", "--cat-8"];
const HHI_MAX_ROWS = 8;
const HHI_SUM_TOLERANCE = 0.05;

let hhiRows = [];

function hhiInitRows() {
  hhiRows = DATA.concentracion.calculadora.ejemplo.map((r) => ({ ...r }));
}

function hhiCompute() {
  const sum = hhiRows.reduce((acc, r) => acc + (Number(r.share) || 0), 0);
  const hhi = hhiRows.reduce((acc, r) => {
    const s = Number(r.share) || 0;
    return acc + s * s;
  }, 0);
  return { sum, hhi: Math.round(hhi) };
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

    const tdShare = document.createElement("td");
    const inputShare = document.createElement("input");
    inputShare.type = "number";
    inputShare.min = "0";
    inputShare.max = "100";
    inputShare.value = row.share;
    inputShare.className = "hhi-input-share";
    inputShare.addEventListener("input", (e) => {
      hhiRows[i].share = parseFloat(e.target.value) || 0;
      hhiRenderResult();
    });
    tdShare.appendChild(inputShare);

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
    tr.appendChild(tdShare);
    tr.appendChild(tdRemove);
    tbody.appendChild(tr);
  });

  const addBtn = document.getElementById("hhi-add-row");
  addBtn.disabled = hhiRows.length >= HHI_MAX_ROWS;
  addBtn.textContent = hhiRows.length >= HHI_MAX_ROWS ? "Máximo 8 actores" : "+ Agregar actor";
}

function hhiRenderResult() {
  const { sum, hhi } = hhiCompute();
  const rounded = Math.round(sum * 10) / 10;
  const isValid = Math.abs(sum - 100) <= HHI_SUM_TOLERANCE;

  const stack = document.getElementById("hhi-stack");
  stack.innerHTML = "";
  const total = sum > 0 ? sum : 1;
  hhiRows.forEach((row, i) => {
    const share = Number(row.share) || 0;
    if (share <= 0) return;
    const seg = document.createElement("div");
    seg.className = "hhi-segment";
    seg.style.width = (share / total) * 100 + "%";
    seg.style.background = `var(${HHI_CAT_VARS[i % HHI_CAT_VARS.length]})`;
    seg.title = `${row.nombre}: ${share}%`;
    stack.appendChild(seg);
  });

  const sumNote = document.getElementById("hhi-sum-note");
  const resultWrap = document.getElementById("hhi-result-wrap");
  const normalizeBtn = document.getElementById("hhi-normalize");
  const hhiValueEl = document.getElementById("hhi-value");
  const genericBadge = document.getElementById("hhi-badge-generico");
  const colombiaBadge = document.getElementById("hhi-badge-colombia");

  resultWrap.classList.toggle("invalid", !isValid);
  normalizeBtn.style.display = isValid ? "none" : "inline-block";

  if (!isValid) {
    sumNote.innerHTML = `<strong>Las participaciones deben sumar 100%</strong> para calcular el HHI — suma actual: ${rounded}%.`;
    hhiValueEl.textContent = "—";
    genericBadge.className = "badge";
    genericBadge.querySelector("span:last-child").textContent = "Ajusta las participaciones a 100%";
    colombiaBadge.className = "badge";
    colombiaBadge.querySelector("span:last-child").textContent = "Ajusta las participaciones a 100%";
    return;
  }

  sumNote.textContent = `Suma actual de participaciones: ${rounded}%.`;
  hhiValueEl.textContent = hhi.toLocaleString("es-CO");

  const generic = hhiClassifyGeneric(hhi);
  genericBadge.className = "badge " + generic.badge;
  genericBadge.querySelector("span:last-child").textContent = generic.label;

  const colombia = hhiClassifyColombia(hhi);
  colombiaBadge.className = "badge " + colombia.badge;
  colombiaBadge.querySelector("span:last-child").textContent = colombia.label;
}

function hhiNormalize() {
  const sum = hhiRows.reduce((acc, r) => acc + (Number(r.share) || 0), 0);
  if (sum <= 0) return;
  let running = 0;
  hhiRows.forEach((row, i) => {
    if (i === hhiRows.length - 1) {
      row.share = Math.round((100 - running) * 10) / 10;
    } else {
      const scaled = Math.round(((Number(row.share) || 0) / sum) * 1000) / 10;
      row.share = scaled;
      running += scaled;
    }
  });
  hhiRenderAll();
}

function hhiRenderAll() {
  hhiRenderTable();
  hhiRenderResult();
}

function initHHI() {
  hhiInitRows();
  document.getElementById("hhi-add-row").addEventListener("click", () => {
    if (hhiRows.length >= HHI_MAX_ROWS) return;
    hhiRows.push({ nombre: `Actor ${hhiRows.length + 1}`, share: 0 });
    hhiRenderAll();
  });
  document.getElementById("hhi-normalize").addEventListener("click", hhiNormalize);
  hhiRenderAll();
}
