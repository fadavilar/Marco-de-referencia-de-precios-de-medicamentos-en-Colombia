// Contenido de la app "Marco de referencia de precios de medicamentos en Colombia"
// Herramienta educativa de divulgación regulatoria.
// Los valores porcentuales de la calculadora de cascada (js/cascade.js) son ILUSTRATIVOS
// (fines pedagógicos), no cifras oficiales vigentes. Todo lo demás está respaldado por las
// fuentes citadas en la sección Referencias — revisadas en julio de 2026.

// Enlaces reutilizables: cada mención de una norma en el texto usa este mismo enlace,
// para que quede hipervinculada en todo el contenido y no solo en Referencias.
function normLink(label, url) {
  return `<a href="${url}" target="_blank" rel="noopener">${label}</a>`;
}
const A = {
  ley100: normLink("Ley 100 de 1993", "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=5248"),
  decreto413: normLink("Decreto 413 de 1994", "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=75974"),
  decreto705: normLink("Decreto 705 de 2016", "https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/decreto-705-de-2016.pdf"),
  circular06: normLink("Circular 06 de 2018", "https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/circular-06-de-2018-cpmdm.pdf"),
  circular17: normLink("Circular 17 de 2023", "https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/circular-0017-2023-cnpmdm.pdf"),
  circular18: normLink("Circular 18 de 2024", "https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/circular-018-de-2024.pdf"),
  circular19: normLink("Circular 19 de 2024", "https://normograma.invima.gov.co/compilacion/docs/circular_cnpmd_0019_2024.htm"),
  circular020_2026: normLink("Circular 020 de 2026", "https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=193012&dt=S"),
  circular22: normLink("Circular 22 de 2026", "https://consultorsalud.com/bajan-los-precios-de-medicamentos-circular-22/"),
  circular021: normLink("Circular 021 de 2026", "https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=193381&dt=S"),
  circular19_2026: normLink("Circular 19 de 2026", "https://consultorsalud.com/medicamentos-upc-circular-19-de-2026/"),
  circular044_2025: normLink("Circular 044 de 2025", "https://www.minsalud.gov.co/Normatividad_Nuevo/Circular%20Externa%20No%20044%20de%202025.pdf"),
  pisis: normLink("PISIS", "https://www.sispro.gov.co/pisis/Pages/pisis-plataforma-de-integraci%C3%B3n-de-SISPRO.aspx"),
  mipres: normLink("MIPRES", "https://www.minsalud.gov.co/Paginas/Que-es-el-aplicativo-Mipres.aspx"),
};

const DATA = {

  meta: {
    titulo: "Marco de Referencia de Precios de Medicamentos en Colombia",
    subtitulo: "Explorador del marco de política de precios: de P1 (manufactura) a P5 (precio al consumidor / al sistema)",
  },

  // ---------------------------------------------------------------------
  // MARCO REGULATORIO
  // ---------------------------------------------------------------------
  marco: {
    intro: `En Colombia, la regulación de precios de medicamentos es responsabilidad de la
      <strong>Comisión Nacional de Precios de Medicamentos y Dispositivos Médicos (CNPMDM)</strong>,
      un organismo mixto conformado por los ministros de Salud y Protección Social y de Comercio,
      Industria y Turismo (más un delegado de Presidencia), con secretaría técnica permanente en el
      Ministerio de Comercio. La Comisión fue creada como CNPM por el <strong>artículo 245 de la
      ${A.ley100}</strong> (reglamentado por el ${A.decreto413}) y ampliada a dispositivos
      médicos mediante el <strong>${A.decreto705}</strong>, quedando como CNPMDM. Fija la
      política de precios mediante <strong>circulares externas</strong> (no existe un único texto
      consolidado permanente: cada circular modifica o deroga a las anteriores) y hace seguimiento
      a través del <strong>Sistema de Información de Precios de Medicamentos (SISMED)</strong>, al
      cual laboratorios, distribuidores, mayoristas, IPS y droguerías están obligados a reportar
      los precios de cada eslabón de la cadena.`,
    pilares: [
      {
        titulo: "SISMED",
        texto: `Sistema obligatorio de reporte periódico de precios (a distintos niveles de la cadena) que alimenta el monitoreo de mercado y la identificación de fallas (precios atípicos, posición dominante, ausencia de competencia). Los reportes viajan técnicamente a través de ${A.pisis}, la plataforma de intercambio de información de SISPRO, con validación de estructura y de calidad del dato. Reformado a fondo por la ${A.circular021} — ver la sección "Reporte y CUFE".`,
      },
      {
        titulo: "Circulares de la CNPMDM",
        texto: `No hay una "circular única" permanente: la política se fija y actualiza mediante circulares externas numeradas que la Comisión expide y modifica con frecuencia (metodología, listados de mercados relevantes bajo control directo, reglas de reporte). El <a href="https://normograma.invima.gov.co/compilacion/cndic_comision_nacional_precios_medicamentos_dispositivos_medicos.html" target="_blank" rel="noopener">normograma de la CNPMDM</a> es la forma más directa de revisar siempre la versión vigente, no una copia archivada.`,
      },
      {
        titulo: "Precio Techo por comparación internacional",
        texto: `Para medicamentos bajo Control Directo, el precio máximo de venta (a nivel de manufactura/PVL) se fija tomando como referencia los precios observados en una canasta de países, ajustados por la metodología vigente (${A.circular18}) y actualizados periódicamente (p. ej. ${A.circular19}, ${A.circular22} — que circuló en consulta pública como "proyecto de Circular 20" antes de expedirse con ese número final).`,
      },
      {
        titulo: "Concentración de mercado",
        texto: `Desde la ${A.circular18}, la clasificación de cada mercado relevante en un régimen de precios usa explícitamente el Índice de Herfindahl-Hirschman (IHH) calculado con datos de SISMED — ver la sección dedicada "Concentración (IHH)".`,
      },
    ],
    regimenes: [
      {
        id: "vigilada",
        nombre: "Libertad Vigilada",
        badge: "good",
        resumen: "Régimen general — aplica a la mayoría de medicamentos.",
        detalle: `El precio lo fija libremente el productor o importador según condiciones de mercado.
          No hay techo ni fórmula oficial: el control es <em>ex post</em>, mediante el reporte
          obligatorio a SISMED y el monitoreo de la Comisión para detectar señales de falla de
          mercado. Un mercado relevante con IHH bajo (baja concentración) entra directamente a este
          régimen, sin importar otros criterios.`,
      },
      {
        id: "regulada",
        nombre: "Libertad Regulada",
        badge: "warning",
        resumen: "Régimen intermedio — metodología de referencia sin precio fijo.",
        detalle: `Aplica a segmentos donde la Comisión identifica riesgo moderado de falla de
          mercado (competencia limitada, pocos oferentes). El productor sigue fijando el precio,
          pero debe ajustarse a una metodología o criterios definidos por la Comisión y sustentar
          desviaciones.`,
      },
      {
        id: "directo",
        nombre: "Control Directo",
        badge: "critical",
        resumen: "Precio techo fijado por el regulador (comparación internacional).",
        detalle: `Aplica a mercados relevantes con alta concentración (IHH alto) y/o participaciones
          de venta elevadas, según la metodología de puntaje de la ${A.circular18}. La Comisión
          fija un <strong>Precio Máximo de Venta (Precio Techo / PMV)</strong> a nivel de
          manufactura por comparación internacional, actualizado periódicamente (la revisión de la
          ${A.circular22} ajustó a la baja 528 mercados regulados e incorporó 33 nuevos).`,
      },
    ],
  },

  // ---------------------------------------------------------------------
  // CASCADA DE PRECIOS — 5 ESLABONES (P1 → P5)
  // ---------------------------------------------------------------------
  // canal: "retail" | "institucional"
  etapas: {
    retail: [
      {
        id: "P1",
        nombre: "Precio de Manufactura",
        alias: "PVL — Precio Venta Laboratorio",
        visible: false,
        texto: `Precio de fábrica del productor o importador. <strong>No es visible</strong> para
          el consumidor ni, en la práctica, para buena parte de la cadena comercial. Es la base
          sobre la que actúa la regulación: bajo Control Directo, este es el punto donde se aplica
          el Precio Techo por comparación internacional.`,
      },
      {
        id: "P2",
        nombre: "Precio al Distribuidor Mayorista",
        alias: "Precio de distribución mayorista",
        visible: false,
        texto: `P1 más el margen del operador logístico/distribuidor mayorista, que asume
          almacenamiento, transporte y financiación de cartera hacia el canal minorista.`,
      },
      {
        id: "P3",
        nombre: "Precio de Adquisición — Droguería",
        alias: "Precio al droguista / farmacia",
        visible: false,
        texto: `Precio al que la droguería o farmacia independiente/cadena compra el medicamento
          al mayorista o distribuidor. Aún no incluye el margen de venta al público.`,
      },
      {
        id: "P4",
        nombre: "Precio de Lista en Punto de Venta",
        alias: "Precio de lista, antes de descuentos comerciales",
        visible: true,
        texto: `Precio de venta al público antes de descuentos, promociones o programas de
          fidelización que aplique el punto de venta. Empieza a ser parcialmente visible en
          vitrina o sistema de precios del establecimiento.`,
      },
      {
        id: "P5",
        nombre: "PVP — Precio de Venta al Público",
        alias: "Precio al consumidor final / gasto de bolsillo",
        visible: true,
        texto: `Precio final que paga el paciente en el mostrador: gasto de bolsillo para
          medicamentos OTC (venta libre) y para la porción no cubierta o excluida del plan de
          beneficios. Es el único punto de la cascada que el ciudadano observa directamente, y el
          que la Comisión vigila mediante reporte de PVP a SISMED.`,
      },
    ],
    institucional: [
      {
        id: "P1",
        nombre: "Precio de Manufactura",
        alias: "PVL — Precio Venta Laboratorio",
        visible: false,
        texto: `Idéntico punto de partida que en el canal comercial: precio de fábrica, invisible,
          base del Precio Techo cuando el principio activo está bajo Control Directo.`,
      },
      {
        id: "P2",
        nombre: "Precio al Distribuidor / Operador Logístico",
        alias: "Precio de distribución institucional",
        visible: false,
        texto: `P1 más el margen del distribuidor u operador logístico institucional que
          administra el inventario y la entrega a hospitales, clínicas e IPS. En medicamentos de
          infusión, el <strong>centro de infusión</strong> suele cumplir este mismo rol de operador
          o centro de distribución — y añade su propio margen — antes de que el medicamento llegue
          al paciente.`,
      },
      {
        id: "P3",
        nombre: "Precio de Facturación a IPS / Operador",
        alias: "Precio de facturación institucional",
        visible: false,
        texto: `Precio al que el distribuidor o el operador de la cadena institucional factura el
          medicamento a la IPS, clínica u hospital. Este es el eslabón donde históricamente se
          concentraron los sobrecostos por múltiples capas de intermediación, lo que motivó topes
          regulados al margen acumulado.`,
      },
      {
        id: "P4",
        nombre: "Precio de Facturación al Sistema",
        alias: "UPC (capitación) o NO-UPC (MIPRES)",
        visible: false,
        texto: `Aquí el eslabón se bifurca según cómo está financiado el medicamento — una
          distinción clave que vale la pena tener siempre presente: <strong>cubierto por UPC</strong>
          (capitación) — está dentro del PBS, la IPS lo dispensa con cargo al valor per cápita que
          la EPS ya recibió, se reporta vía RDA y no requiere ningún trámite adicional; o
          <strong>NO-UPC</strong> — no financiado con la UPC (alto costo, uso no incluido en el
          registro sanitario, etc.), el médico lo prescribe vía ${A.mipres}, y se financia con el
          <strong>Presupuesto Máximo</strong> que la ADRES transfiere mensualmente a la EPS, o,
          residualmente, por <strong>recobro</strong> caso a caso ante la ADRES.`,
      },
      {
        id: "P5",
        nombre: "Precio de Referencia al Sistema",
        alias: "Costo reconocido por el sistema (no hay pago directo del paciente)",
        visible: true,
        texto: `A diferencia del canal comercial, aquí <strong>el paciente casi nunca paga
          directamente este valor</strong> — pero el mecanismo de reconocimiento cambia según el
          eslabón P4: si es UPC, el costo ya estaba cubierto por la capitación de la EPS; si es
          NO-UPC, es la ADRES quien lo reconoce vía Presupuesto Máximo o recobro, con base en lo
          prescrito en MIPRES. En ambos casos P5 es más un precio de referencia/techo que el
          sistema reconoce y audita, que una transacción de bolsillo — su función regulatoria es
          contener el gasto público en salud, no fijar un precio al consumidor.`,
      },
    ],
  },

  // ---------------------------------------------------------------------
  // MÁRGENES ILUSTRATIVOS por régimen × canal (% que se añade sobre el precio del eslabón anterior)
  // ---------------------------------------------------------------------
  margenes: {
    vigilada: {
      retail:        { p1p2: 10, p2p3: 12, p3p4: 25, p4p5: 8  },
      institucional: { p1p2: 8,  p2p3: 10, p3p4: 15, p4p5: 5  },
    },
    regulada: {
      retail:        { p1p2: 9,  p2p3: 11, p3p4: 22, p4p5: 7  },
      institucional: { p1p2: 7,  p2p3: 9,  p3p4: 13, p4p5: 4  },
    },
    directo: {
      retail:        { p1p2: 6,  p2p3: 8,  p3p4: 15, p4p5: 5  },
      institucional: { p1p2: 5,  p2p3: 6,  p3p4: 10, p4p5: 3  },
    },
  },

  margenesNota: `Los porcentajes son <strong>ilustrativos</strong>, construidos con fines
    pedagógicos para mostrar la lógica de la cascada y el efecto esperado de cada régimen
    (a mayor intervención regulatoria, menor dispersión y menor margen acumulado, especialmente
    en el canal institucional). No representan cifras oficiales de la CNPMDM ni de SISMED:
    para valores reales y vigentes, consulte las fuentes citadas en Referencias.`,

  // ---------------------------------------------------------------------
  // CONCENTRACIÓN DE MERCADO — ÍNDICE DE HERFINDAHL-HIRSCHMAN (IHH)
  // ---------------------------------------------------------------------
  concentracion: {
    intro: `El Índice de Herfindahl-Hirschman (IHH) mide qué tan concentrado está un mercado sumando
      el cuadrado de la participación (en %) de cada actor que compite en él. En Colombia no es solo
      un concepto de libro de texto: la <strong>${A.circular18}</strong> de la CNPMDM lo usa de
      forma explícita para decidir si un mercado relevante de medicamentos entra en Libertad
      Vigilada o queda expuesto a Control Directo.`,
    origen: {
      titulo: "Origen del índice",
      texto: `El índice tiene dos autores independientes que llegaron a la misma fórmula por caminos
        distintos: el economista <strong>Albert O. Hirschman</strong> lo propuso en 1945, en su libro
        <em>National Power and the Structure of Foreign Trade</em>, para medir la concentración del
        comercio exterior de un país. Cinco años después, <strong>Orris C. Herfindahl</strong> llegó
        a la misma fórmula de manera independiente en su tesis doctoral de 1950 en Columbia
        University, sobre concentración en la industria siderúrgica de EE. UU. Desde los años 80 es
        el indicador estándar de las guías de fusiones horizontales del Departamento de Justicia y la
        FTC de Estados Unidos, y de ahí se extendió a la práctica de competencia y regulación de
        precios en el resto del mundo, incluida Colombia.`,
    },
    formula: {
      titulo: "Cómo se calcula",
      texto: `Se suma el cuadrado de la participación de mercado (en porcentaje, de 0 a 100) de cada
        actor: <code>IHH = Σ (participación_i)²</code>. Un monopolio puro (un solo actor con 100% del
        mercado) da IHH = 10.000, el valor máximo. Cuantos más competidores con participaciones
        similares haya, más bajo el índice — con n actores idénticos, IHH = 10.000 / n.`,
    },
    umbralesGenericos: {
      titulo: "Umbrales de referencia internacional",
      texto: `Las guías de fusiones de EE. UU. (DOJ/FTC) usan tres bandas orientativas, ampliamente
        adoptadas en la práctica internacional de competencia:`,
      bandas: [
        { rango: "IHH < 1.500", nombre: "Mercado no concentrado", badge: "good" },
        { rango: "1.500 ≤ IHH < 2.500", nombre: "Moderadamente concentrado", badge: "warning" },
        { rango: "IHH ≥ 2.500", nombre: "Altamente concentrado", badge: "critical" },
      ],
    },
    umbralesColombia: {
      titulo: `Los umbrales que usa la CNPMDM (${A.circular18})`,
      texto: `Para cada mercado relevante, la Comisión calcula el IHH a partir de las ventas
        históricas reportadas a SISMED y le asigna un puntaje que alimenta la metodología de
        clasificación en régimen de precios:`,
      bandas: [
        { rango: "IHH < 2.500", nombre: "Puntaje 1 — entra directo a vigilancia (Libertad Vigilada), sin importar el criterio de participación de ventas", badge: "good" },
        { rango: "2.500 ≤ IHH < 10.000", nombre: "Puntaje 2 — se combina con el criterio de participación de ventas para definir el régimen", badge: "warning" },
        { rango: "IHH = 10.000", nombre: "Puntaje 3 — mercado monopólico (un solo actor); mayor probabilidad de terminar en Control Directo", badge: "critical" },
      ],
      nota: `Los umbrales de puntaje están verificados contra el texto de la ${A.circular18}.
        La regla completa combina este puntaje de concentración con un segundo criterio de
        participación de ventas del mercado relevante — consulte el texto vigente de la circular
        para la metodología integral de asignación de régimen.`,
    },
    calculadora: {
      titulo: "Calculadora interactiva de IHH",
      texto: `Ingresa los actores de un mercado relevante ilustrativo (laboratorio/marca) y un valor
        absoluto comparable entre ellos — ventas en pesos, unidades, o cualquier magnitud que tengas
        a mano—. La calculadora totaliza esos valores y calcula la participación (%) de cada actor
        automáticamente sobre ese total, así que siempre suma 100% por construcción: no hay que
        normalizar nada a mano.`,
      ejemplo: [
        { nombre: "Laboratorio A", valor: 420 },
        { nombre: "Laboratorio B", valor: 270 },
        { nombre: "Laboratorio C", valor: 150 },
        { nombre: "Laboratorio D", valor: 100 },
        { nombre: "Otros", valor: 60 },
      ],
    },
  },

  // ---------------------------------------------------------------------
  // GUÍA DE REFERENCIACIÓN INTERNACIONAL DE PRECIOS (IRP)
  // ---------------------------------------------------------------------
  irp: {
    intro: `Para los medicamentos bajo <strong>Control Directo</strong>, la CNPMDM no inventa el
      Precio Techo: lo calcula comparando el precio del medicamento en una <strong>canasta fija de
      19 países de referencia</strong>, definida en el artículo 6 de la ${A.circular18}. Esta guía
      lista esos 19 países y, para cada uno, un puntero a la fuente pública de precios más
      reconocida — para que puedas verificar de dónde sale, en principio, la referencia.`,
    metodologia: [
      {
        titulo: "Canasta de países (Art. 6)",
        texto: `19 países: Alemania, Australia, Brasil, Canadá, Chile, Ecuador, España, Estados
          Unidos, Francia, Grecia, India, Italia, México, Noruega, Panamá, Perú, Portugal, Reino
          Unido y Sudáfrica. Modificar esta lista requiere un proceso normativo aparte — no es algo
          que cambie con cada actualización de precios.`,
      },
      {
        titulo: "Selección de la fuente por país (Art. 7)",
        texto: `La Comisión no usa cualquier precio publicado: prioriza fuentes que reflejen el
          precio de manufactura (el más cercano a un "P1" comparable), y si hay varias fuentes de
          igual jerarquía, toma la de menor precio. La Comisión publica esa lista específica de
          fuentes — la tabla de abajo son las fuentes públicas más reconocidas por país, no
          necesariamente la fuente exacta y vigente que usa la Comisión en cada actualización.`,
      },
      {
        titulo: "PRI y PRI 20 (Art. 19 y ss.)",
        texto: `El Precio de Referencia Internacional (PRI) se construye a partir de los precios
          convertidos a pesos colombianos con la tasa de cambio oficial (Banco de la República). El
          artículo 19 introduce el <strong>PRI 20</strong> — el percentil 20 de los PRI— como base
          para fijar el Precio Techo en ciertos escenarios de la metodología.`,
      },
    ],
    paises: [
      { pais: "Alemania", fuente: "BfArM — Reference Pricing", url: "https://www.bfarm.de/EN/Medicinal-products/Information-on-medicinal-products/Reference-Pricing/_node.html" },
      { pais: "Australia", fuente: "PBS — Pharmaceutical Benefits Scheme", url: "https://www.pbs.gov.au/pbs/home" },
      { pais: "Brasil", fuente: "ANVISA/CMED — Listas de Preços", url: "https://www.gov.br/anvisa/pt-br/assuntos/medicamentos/cmed/precos" },
      { pais: "Canadá", fuente: "PMPRB — Patented Medicine Prices Review Board", url: "http://www.pmprb-cepmb.gc.ca/" },
      { pais: "Chile", fuente: "CENABAST — Observatorio de Precios Internacionales", url: "https://www.cenabast.cl/observatorio-de-precios-internacionales-3/" },
      { pais: "Ecuador", fuente: "MSP — Reporte de Precios de Medicamentos", url: "https://www.salud.gob.ec/reporte-de-precios-medicamentos/" },
      { pais: "España", fuente: "CIMA/AEMPS — Nomenclátor de prescripción", url: "https://cima.aemps.es/cima/publico/nomenclator.html" },
      { pais: "Estados Unidos", fuente: "Sin regulador único de precios (mercado privado / listas ASP)", url: "" },
      { pais: "Francia", fuente: "Base de Données Publique des Médicaments", url: "https://base-donnees-publique.medicaments.gouv.fr/" },
      { pais: "Grecia", fuente: "Fuente no verificada independientemente — consultar lista de la CNPMDM", url: "" },
      { pais: "India", fuente: "NPPA — National Pharmaceutical Pricing Authority", url: "https://nppa.gov.in/en" },
      { pais: "Italia", fuente: "AIFA — Agenzia Italiana del Farmaco", url: "https://www.aifa.gov.it/" },
      { pais: "México", fuente: "Comisión Coordinadora para la Negociación de Precios de Medicamentos", url: "https://www.gob.mx/salud/acciones-y-programas/comision-coordinadora-para-la-negociacion-de-precios-de-medicamentos-e-insumos-para-la-salud-91422" },
      { pais: "Noruega", fuente: "Statens legemiddelverk (Agencia Noruega de Medicamentos)", url: "https://www.legemiddelverket.no/" },
      { pais: "Panamá", fuente: "MINSA — Lista Nacional de Medicamento", url: "https://www.minsa.gob.pa/informacion-salud/lista-nacional-de-medicamento" },
      { pais: "Perú", fuente: "DIGEMID — Observatorio Peruano de Productos Farmacéuticos (vía gob.pe)", url: "https://www.gob.pe/42006-consultar-el-precio-de-los-medicamentos-en-el-observatorio-peruano-de-productos-farmaceuticos-del-digemid" },
      { pais: "Portugal", fuente: "INFARMED", url: "https://www.infarmed.pt/" },
      { pais: "Reino Unido", fuente: "NHS Drug Tariff (NHSBSA)", url: "https://www.nhsbsa.nhs.uk/pharmacies-gp-practices-and-appliance-contractors/drug-tariff" },
      { pais: "Sudáfrica", fuente: "Department of Health — Medicine Price Registry", url: "https://www.health.gov.za/nhi-pee/" },
    ],
    nota: `Tabla construida con fines orientativos a partir de fuentes públicas nacionales
      típicamente citadas en comparaciones internacionales de precios — <strong>no es una copia de
      la lista oficial que publica la CNPMDM</strong> bajo el artículo 7 de la ${A.circular18}, que
      es la única con fuerza normativa. Dos fuentes (Grecia y la de Estados Unidos, que no tiene
      regulador único de precios) no se pudieron verificar de forma independiente al construir esta
      guía; para el detalle exacto y vigente, consulte el texto de la circular o solicítelo
      directamente a la Comisión.`,
  },

  // ---------------------------------------------------------------------
  // REPORTE DE PRECIOS Y FACTURA ELECTRÓNICA (CUFE) — ANTES / DESPUÉS
  // ---------------------------------------------------------------------
  reporteCufe: {
    intro: `El 9 de junio de 2026, el Ministerio de Salud y Protección Social — CNPMDM expidió la
      <strong>${A.circular021}</strong> (Diario Oficial N.º 53.517), que reescribe por
      completo el reporte a SISMED y deroga las ${A.circular06} y ${A.circular17}. Es el cambio más
      relevante de los últimos años en la <em>calidad del dato</em> que sostiene toda la regulación
      de precios: por primera vez, el reporte queda atado a la factura electrónica real validada por
      la DIAN, en vez de depender solo de lo que cada actor declara.`,
    antes: {
      titulo: "Antes (Circulares 06/2018 y 17/2023)",
      badge: "warning",
      puntos: [
        "Mecanismos de reporte separados según el tipo de transacción, sin una única estructura de datos.",
        "Las unidades se reportaban con base en el documento de factura, pero sin cruce sistemático contra el registro fiscal electrónico — abría espacio a inconsistencias.",
        "Cuando una venta incluía descuentos comerciales o bonificaciones en el punto de venta, no había una regla uniforme y verificable para separar el precio de lista del valor efectivamente cobrado.",
        "El precio autorreportado a SISMED podía diferir del precio real de la transacción sin que el regulador tuviera forma directa de contrastarlo factura por factura.",
      ],
    },
    despues: {
      titulo: "Después (Circular 021 de 2026)",
      badge: "good",
      puntos: [
        "Reporte unificado en un solo acto normativo: precios de compra, precios de venta, ventas totales, compras totales, unidades vendidas/compradas y reclamaciones, todo en un mismo esquema.",
        "Cada registro de SISMED debe identificar el <strong>CUFE</strong> (Código Único de Factura Electrónica) de la factura de venta electrónica de la DIAN correspondiente — la factura real, no un resumen agregado.",
        "Cuando hay descuentos o bonificaciones comerciales aplicados en el punto de venta, la circular ordena reportar el <strong>valor bruto de la factura</strong> (el precio de facturación real, antes del descuento), documentando aparte las unidades bonificadas.",
        "Unidades estandarizadas en Unidad Mínima de Dispensación (UMD), para que los volúmenes sean comparables entre actores.",
        "Periodo de transición de 3 meses desde el mes siguiente a la publicación; los datos de 2026 deben re-reportarse bajo el nuevo formato antes del 31 de diciembre de 2026.",
      ],
    },
    porQueImporta: `En la práctica, esto cierra la brecha entre el precio que un actor <em>dice</em>
      vender y el precio que la factura electrónica certifica ante la DIAN. Antes, un descuento o
      bonificación no reportado de forma estandarizada podía hacer que el precio promedio de mercado
      pareciera más bajo de lo que realmente era (o esconder sobrecostos en la cadena institucional).
      Con el CUFE como llave de cruce, el regulador puede validar, factura por factura, que el precio
      declarado a SISMED coincide con el precio bruto real facturado — clave tanto para fijar el
      Precio Techo de los medicamentos en Control Directo como para vigilar los márgenes de
      intermediación del canal institucional.`,
    hitos: [
      { fecha: "1994", numero: A.decreto413, resumen: `Reglamenta las funciones de la entonces Comisión Nacional de Precios de Medicamentos (${A.ley100}, art. 245).` },
      { fecha: "2016", numero: A.decreto705, resumen: "Crea la CNPMDM al ampliar la Comisión a dispositivos médicos." },
      { fecha: "2018", numero: A.circular06, resumen: `Reglas de reporte a SISMED vigentes hasta 2026 (derogada por la ${A.circular021}).` },
      { fecha: "2023", numero: A.circular17, resumen: `Modifica procedimientos de reporte a SISMED (derogada por la ${A.circular021}).` },
      { fecha: "2024", numero: A.circular18, resumen: "Fija la metodología vigente de clasificación de mercados relevantes en régimen de precios, con el IHH como criterio explícito." },
      { fecha: "2024", numero: A.circular19, resumen: "Actualiza el Precio Máximo de Venta (Precio Techo) de los medicamentos ya sujetos a Control Directo." },
      { fecha: "2026", numero: A.circular020_2026, resumen: `Corrige un yerro del Anexo 1 de la ${A.circular06} (estándar de nombre de archivo para el reporte a SISMED) — un ajuste técnico, no una actualización de precios. Expedida el 13 de enero de 2026.` },
      { fecha: "2026", numero: A.circular22, resumen: `Una de las revisiones más amplias de precios techo en años: incorpora 33 mercados relevantes nuevos, modifica 22 ya regulados y ajusta 528 mercados por tasa de cambio (-7,4%). Circuló en consulta pública como "proyecto de Circular 20" desde diciembre de 2025.` },
      { fecha: "2026", numero: A.circular021, resumen: "Reforma integral del reporte SISMED: exige CUFE y valor bruto de factura. Publicada el 9 de junio de 2026 (Diario Oficial 53.517)." },
      { fecha: "2026", numero: A.circular19_2026, resumen: `Traslada el reporte de medicamentos financiados con UPC al RDA (Resumen Digital de Atención) y deja sin efecto la ${A.circular044_2025}; lo NO-UPC sigue por MIPRES.` },
    ],
  },

  // ---------------------------------------------------------------------
  // ESTRATEGIAS DE PRICING FARMACÉUTICO
  // ---------------------------------------------------------------------
  estrategias: {
    intro: `Frente a un precio de lista vigilado, comparado internacionalmente (IRP) y cada vez más
      auditable factura por factura (${A.circular021}), la industria no negocia solo subiendo o
      bajando ese precio: usa estrategias comerciales que logran el descuento efectivo que el
      mercado exige sin necesariamente mover el precio de lista reportado. Estas diez estrategias
      —documentadas internacionalmente o de práctica habitual en el mercado colombiano— se agrupan
      abajo por canal, porque el patrón se repite: en el <strong>Canal Institucional</strong>, el
      descuento casi siempre se queda en el margen del intermediario para influir al decisor de
      compra; en el <strong>Canal Comercial</strong>, en cambio, sí suele trasladarse al paciente,
      porque es él quien decide y paga directamente.`,
    items: [
      {
        nombre: "Apalancamiento de portafolio (bundling entre moléculas)",
        categoria: "Portafolio",
        canal: "institucional",
        resumen: "Se concentra el descuento en una molécula madura del portafolio para proteger el precio de lista de la innovadora.",
        mecanismo: `Un mismo fabricante negocia varios productos —desde una molécula madura o
          genérico propio hasta la innovación más reciente— como un solo paquete o "canasta". El
          comprador (droguista, IPS, operador) obtiene un descuento atractivo sobre el conjunto,
          pero el fabricante concentra la mayor parte de ese descuento en el producto maduro,
          dejando el precio de lista de la molécula innovadora prácticamente intacto. Contratos de
          portafolio de este tipo pasaron de involucrar 2 productos a agrupar rutinariamente entre
          10 y 20 en una sola negociación.`,
        colombia: `El precio de lista de la innovadora es justamente el que la CNPMDM usa como
          insumo para el Precio Techo por comparación internacional (IRP) cuando el mercado está
          bajo Control Directo. Mantenerlo estable, aunque el descuento real ocurra en la molécula
          madura de la misma canasta, reduce el riesgo de que una baja de precio en Colombia se
          use como referencia para bajar el precio en otros países de la canasta IRP. En el Canal
          Institucional colombiano, en particular, ese descuento normalmente <strong>no se traslada
          al paciente ni al asegurador como menor costo</strong>: queda dentro del margen del
          intermediario (operador logístico, IPS) y se usa como palanca comercial para posicionar
          mejor el producto ante el <em>decisor de compra</em> (comité de compras, farmacia
          institucional), no como un ahorro que el sistema perciba directamente. En la práctica
          colombiana, este tipo de acuerdo suele requerir una <strong>negociación tripartita
          (EPS – Operador Logístico – Farmacéutica)</strong> para pactar tanto el precio como cómo
          se reparte el margen transferido entre las tres partes; en otros casos, el fabricante y
          la EPS acuerdan directamente vía <strong>giro directo (EPS–Farma)</strong>, sin que el
          operador logístico intermedie el pago.`,
        fuente: { titulo: "Portfolio Contracting: The Power Move Reshaping Pharma Access (MMIT)", url: "https://www.mmitnetwork.com/thought-leadership/power-move-reshaping-pharma-access/" },
      },
      {
        nombre: "Precio de lista vs. precio neto (descuentos confidenciales)",
        categoria: "Portafolio",
        canal: "institucional",
        resumen: "El precio de lista reportado se mantiene alto mientras el precio neto real, tras descuentos confidenciales, es sustancialmente menor.",
        mecanismo: `El fabricante fija un precio de lista público, pero negocia descuentos y
          bonificaciones confidenciales con cada comprador (plano, por volumen o por patrón de uso).
          El precio neto — lo que realmente se paga — solo lo conocen las partes del contrato. La
          brecha entre ambos se ha ampliado de forma sistemática en mercados con fijación de
          precios por comparación internacional.`,
        colombia: `Es precisamente la brecha que la ${A.circular021} busca cerrar del lado del
          reporte: al exigir el valor bruto de cada factura electrónica identificada por su CUFE,
          SISMED puede, en teoría, distinguir mejor el precio de lista del precio neto real de cada
          transacción — algo que antes dependía del autorreporte.`,
        fuente: { titulo: "Does external reference pricing deliver what it promises? (PMC)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7058621/" },
      },
      {
        nombre: "Notas crédito por cumplimiento de cuota de ventas",
        categoria: "Rebate retroactivo",
        canal: "institucional",
        resumen: "Planes comerciales que devuelven margen vía nota crédito retroactiva al intermediario, sin que ese descuento se traslade al usuario final.",
        mecanismo: `El fabricante factura al precio de lista, pero ofrece un plan comercial donde,
          si el operador logístico, IPS o distribuidor institucional alcanza una cuota de ventas de
          una molécula innovadora (o de una que no ha llegado a su meta), recibe una <strong>nota
          crédito</strong> retroactiva equivalente a un descuento por volumen. La transacción
          original queda al precio pleno; el ajuste llega después, fuera de esa factura — es el
          mecanismo detrás de lo que en la industria se conoce como <em>rebate management</em> y
          <em>chargebacks</em>.`,
        colombia: `En el Canal Institucional colombiano, ese descuento retroactivo <strong>se queda
          en el margen del agente de intermediación</strong> — no se transfiere al paciente ni
          reduce el valor que termina reconociendo el sistema. Su función comercial es otra: mejorar
          el posicionamiento del producto frente al <em>decisor de compra</em> institucional. Además,
          como la nota crédito se emite después de la factura original (la que ya lleva CUFE bajo la
          ${A.circular021}), es un punto que vale la pena vigilar: si el ajuste no se refleja en el
          reporte a SISMED con la misma trazabilidad que la factura inicial, puede reabrir la misma
          brecha entre precio reportado y precio real que la reforma buscaba cerrar.`,
        fuente: { titulo: "What is Pharmaceutical Rebate Management? (Enable)", url: "https://www.enable.com/resources/articles/what-is-pharmaceutical-rebate-management/" },
      },
      {
        nombre: "Descuentos escalonados con llave de cumplimiento por volumen",
        categoria: "Rebate escalonado",
        canal: "institucional",
        resumen: "Varios umbrales de compra sucesivos, cada uno con su propio descuento, negociados molécula por molécula.",
        mecanismo: `A diferencia de la nota crédito de una sola meta, aquí se pactan
          <strong>varios escalones de volumen</strong> para una molécula específica — por ejemplo,
          3%, 6% y 10% de descuento retroactivo al superar el 70%, 90% y 110% de un volumen de
          referencia. Cada escalón funciona como una "llave" que solo se activa si se cumple el
          umbral correspondiente, lo que da al fabricante control fino sobre cuánto margen cede
          según qué tan predecible sea la demanda de esa molécula en particular.`,
        colombia: `Igual que las notas crédito simples, estos descuentos escalonados suelen
          quedarse en el margen del intermediario institucional en vez de trasladarse al sistema o
          al paciente. Su particularidad frente a una nota crédito única es que exige un
          seguimiento más granular del volumen molécula por molécula — y, otra vez, cada ajuste por
          escalón cumplido se emite después de la factura original con CUFE, por lo que aplica la
          misma observación sobre trazabilidad frente a la ${A.circular021}.`,
        fuente: { titulo: "Best Practices for Managing Pharmaceutical Rebates (IncentX)", url: "https://incentx.com/blog/managing-pharmaceutical-rebates/" },
      },
      {
        nombre: "Pague uno, lleve dos / segunda unidad con descuento",
        categoria: "Promoción directa",
        canal: "comercial",
        resumen: "Promociones multi-unidad anunciadas directamente en góndola, que sí trasladan el descuento al consumidor final.",
        mecanismo: `A diferencia de las estrategias institucionales, esta opera directamente sobre
          el paciente: la droguería o cadena anuncia en el punto de venta (góndola, vitrina) una
          promoción tipo "pague 1 y lleve 2" o "segunda unidad al 50%" sobre un medicamento OTC o de
          consumo recurrente. El objetivo es mover volumen físico rápido y ganar preferencia de
          marca frente al consumidor que decide directamente en el mostrador.`,
        colombia: `Es la contracara exacta de las estrategias del Canal Institucional: aquí el
          descuento sí llega al bolsillo del paciente, porque en el Canal Comercial el consumidor es
          quien decide y paga directamente — no hay un asegurador ni un comité de compras de por
          medio. Aplica sobre todo a OTC, donde el precio no está bajo Control Directo y el margen
          de la droguería tiene más espacio de maniobra.`,
        fuente: null,
      },
      {
        nombre: "Recompra con empaque (\"traiga la caja\")",
        categoria: "Fidelización",
        canal: "comercial",
        resumen: "Descuento en la siguiente compra a cambio de devolver el empaque vacío, pensado para fidelizar el patrón de consumo del paciente crónico.",
        mecanismo: `El paciente que trae el empaque vacío de su compra anterior recibe un
          descuento o beneficio en la compra siguiente del mismo producto. Es un mecanismo de
          fidelización y de patrón de consumo recurrente —muy usado en tratamientos crónicos de
          venta libre o de bajo control—, que además le da a la droguería una señal (indirecta) de
          adherencia y recompra real, no solo de rotación de inventario.`,
        colombia: `Funciona en el mismo sentido que el punto anterior: es una estrategia del Canal
          Comercial pensada para influir directamente en el comportamiento de compra del paciente,
          no en el del decisor institucional. Su lógica de negocio es más cercana al marketing de
          fidelización retail que a la negociación de precios regulados.`,
        fuente: null,
      },
      {
        nombre: "Acuerdos de riesgo compartido / acceso administrado",
        categoria: "Riesgo compartido",
        canal: "institucional",
        resumen: "El pago se condiciona a resultados clínicos o a un tope de impacto presupuestal, no a un precio fijo por unidad.",
        mecanismo: `También llamados <em>Managed Entry Agreements</em>: esquemas financieros
          (acuerdos precio-volumen, con techos de gasto) o esquemas de desempeño (pago ligado al
          resultado clínico real del paciente), usados sobre todo para medicamentos de alto costo
          con incertidumbre clínica o de impacto presupuestal al momento del lanzamiento.`,
        colombia: `Colombia tiene un modelo propio: los <strong>Acuerdos de Acceso Administrado
          (AAA)</strong>, publicados por el Ministerio de Salud desde 2021 con fases de nominación,
          negociación, formalización, implementación y evaluación entre el Ministerio, las EAPB y
          los titulares de registro sanitario — pensados para reducir barreras de acceso a
          tecnologías de alto costo o alto impacto presupuestal.`,
        fuente: { titulo: "Modelo operativo de Acuerdos de Acceso Administrado — Minsalud", url: "https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/MET/modelo-operativo-acuerdos-acceso-administrado.pdf" },
      },
      {
        nombre: "Precio diferenciado por indicación",
        categoria: "Segmentación",
        canal: "institucional",
        resumen: "El mismo medicamento tiene un descuento distinto según la indicación clínica en la que se usa, aunque el precio de lista no cambie.",
        mecanismo: `Cuando un medicamento tiene varias indicaciones aprobadas con distinto valor
          terapéutico o distinta población objetivo, el fabricante aplica descuentos diferentes
          (vía rebate) según la indicación en la que efectivamente se use, manteniendo un único
          precio de lista formal. Es más fácil de implementar como descuento diferencial que como
          precio de lista distinto por indicación, por las limitaciones administrativas y de
          trazabilidad de uso real.`,
        colombia: `Exige poder identificar la indicación de uso a nivel de paciente (vía MIPRES u
          otro mecanismo de prescripción), algo que hoy es más viable para tecnologías de alto
          costo gestionadas individualmente que para medicamentos de uso masivo.`,
        fuente: { titulo: "Indication-Based Pricing: The Simplest Explanation (Verpora)", url: "https://www.verpora.com/articles/indication-based-pricing" },
      },
      {
        nombre: "Precio escalonado por capacidad de pago (tiered pricing)",
        categoria: "Segmentación",
        canal: "ambos",
        resumen: "El mismo producto se vende a precios distintos según el poder adquisitivo del mercado, sin que un precio bajo en un país erosione el precio en otro.",
        mecanismo: `El fabricante fija precios más bajos en mercados de menor ingreso per cápita y
          precios más altos en mercados de mayor ingreso, buscando maximizar acceso donde la
          demanda es más sensible al precio sin sacrificar el precio en mercados que sí pueden
          pagarlo más. Es la lógica detrás de los precios diferenciados de antirretrovirales y
          antibióticos entre países de renta alta y baja.`,
        colombia: `Es exactamente el mecanismo que la comparación internacional de precios (IRP)
          pone en tensión: si Colombia está en la canasta de países de referencia de otro país con
          mayor renta, un precio bajo negociado aquí por motivos de acceso puede terminar
          exportándose como referencia a la baja en ese otro mercado — un incentivo más para que
          el fabricante prefiera mover el precio neto (vía descuento) y no el precio de lista.`,
        fuente: { titulo: "Differential Pricing for Pharmaceuticals (Wharton)", url: "https://faculty.wharton.upenn.edu/wp-content/uploads/2014/10/differential-pricing_3.pdf" },
      },
      {
        nombre: "Modelos de suscripción (\"modelo Netflix\")",
        categoria: "Riesgo compartido",
        canal: "institucional",
        resumen: "Pago fijo periódico que desliga el ingreso del fabricante del volumen vendido, para no incentivar la sobreventa.",
        mecanismo: `Usado sobre todo para antibióticos nuevos: el pagador (un sistema de salud o
          asegurador) paga una suscripción fija que garantiza acceso al medicamento
          independientemente de cuánto se use, en vez de pagar por unidad vendida. Busca resolver
          la paradoja de que un buen antibiótico nuevo debe usarse poco (para preservar su eficacia
          y frenar resistencia), lo que bajo un modelo de pago por volumen desincentiva la inversión
          en desarrollarlo.`,
        colombia: `Aún no tiene un desarrollo formal en la regulación colombiana de precios de
          medicamentos, pero es relevante para la discusión de política de acceso a nuevos
          antimicrobianos frente al problema de resistencia bacteriana.`,
        fuente: { titulo: "Optimal subscription models to pay for antibiotics (PMC)", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9005781/" },
      },
    ],
  },

  // ---------------------------------------------------------------------
  // CANAL COMERCIAL
  // ---------------------------------------------------------------------
  retail: {
    intro: `SISMED distingue dos canales de reporte: <strong>Canal Institucional (INS)</strong> y
      <strong>Canal Comercial (COM)</strong> — esta es la nomenclatura oficial, no "mercado retail"
      ni "mercado institucional". El Canal Comercial es la puerta de entrada de los medicamentos de
      venta libre (OTC) y del gasto de bolsillo: la porción que los hogares colombianos pagan
      directamente en droguerías y farmacias, con recursos privados, sin pasar por el aseguramiento.`,
    puntos: [
      {
        titulo: "Droguistas y cadenas",
        texto: `El canal incluye droguerías independientes, cadenas de farmacias y, cada vez más,
          canales digitales. Todos están obligados a reportar precios a SISMED cuando aplica el
          umbral normativo, y son el punto donde se materializa el PVP (P5).`,
      },
      {
        titulo: "Medicamentos OTC (venta libre)",
        texto: `Para los medicamentos de venta libre no existe intermediación de un asegurador: el
          precio se forma con relativa libertad (salvo que el principio activo esté en el listado
          de Control Directo) y compite por decisión directa del consumidor en el punto de venta.`,
      },
      {
        titulo: "Gasto de bolsillo (out-of-pocket)",
        texto: `Incluye tanto los OTC como los medicamentos formulados que no están cubiertos por
          el plan de beneficios (PBS) o cuya cobertura el paciente decide no tramitar. Es el
          segmento más sensible al precio al consumidor final y el que más expone a la población
          a barreras de acceso por costo.`,
      },
      {
        titulo: "IVA y exenciones",
        texto: `La mayoría de los medicamentos incluidos en el plan de beneficios está excluida o
          gravada a tarifas reducidas de IVA; el tratamiento tributario final afecta el último
          tramo de la cascada (P4 → P5) y varía según la clasificación arancelaria/fiscal del
          producto.`,
      },
    ],
  },

  // ---------------------------------------------------------------------
  // CANAL INSTITUCIONAL
  // ---------------------------------------------------------------------
  institucional: {
    intro: `SISMED define el <strong>Canal Institucional (INS)</strong> como aquel en el que las
      transacciones se cubren con recursos públicos: agrupa la venta de medicamentos hacia IPS,
      clínicas, hospitales y, en última instancia, hacia las EPS y demás entidades responsables del
      pago dentro del Sistema General de Seguridad Social en Salud (SGSSS). Aquí el precio no lo
      paga directamente el paciente: lo asume el sistema, vía capitación (UPC) o vía los mecanismos
      de financiación de lo NO-UPC (presupuestos máximos y recobro).`,
    puntos: [
      {
        titulo: "IPS y operadores logísticos",
        texto: `Entre el distribuidor y la EPS suele haber una o más capas de intermediación
          (operadores logísticos, gestores farmacéuticos, la propia IPS). Cada capa añade un
          margen: cuantas más capas, mayor el precio acumulado que termina reconociendo el
          sistema. En medicamentos de infusión, los <strong>centros de infusión</strong> agregan una
          capa adicional propia — funcionan como operadores o centros de distribución del
          medicamento, no solo como el sitio donde se administra, y su margen entra en la misma
          cuenta.`,
      },
      {
        titulo: "Medicamentos bajo Control Directo",
        texto: `Una parte relevante del gasto institucional corresponde a medicamentos de alto
          costo (biotecnológicos, oncológicos, enfermedades huérfanas) que suelen estar sujetos a
          Control Directo precisamente por su bajo nivel de competencia y su impacto fiscal.`,
      },
      {
        titulo: "Márgenes de intermediación regulados",
        texto: `A raíz de escándalos de sobrefacturación en la cadena institucional (compras de
          medicamentos de alto costo a través de múltiples intermediarios), la regulación ha
          avanzado hacia topes al margen de comercialización acumulado en ese canal, buscando
          acercar el precio de facturación a la IPS al precio de manufactura. La reforma del
          reporte vía CUFE (${A.circular021}) refuerza esa vigilancia al hacer visible el precio
          bruto real de cada factura en la cadena. Aun así, el descuento que logra el intermediario
          casi nunca se traslada al paciente o al sistema como menor costo: normalmente se queda en
          su margen, como palanca para posicionar el producto ante el decisor de compra.`,
      },
      {
        titulo: "UPC vs. NO-UPC: dos rutas de financiación distintas",
        texto: `Es un dato altamente relevante para leer bien el eslabón P4/P5 de esta cascada.
          Lo cubierto por el Plan de Beneficios en Salud (PBS) se financia con la Unidad de Pago por
          Capitación (UPC), sin trámite adicional. Lo <strong>NO-UPC</strong> —alto costo, uso no
          incluido en el registro sanitario, enfermedades huérfanas, etc.— se prescribe vía
          ${A.mipres} y se financia por <strong>Presupuesto Máximo</strong> (la ruta prospectiva,
          la más común desde que sustituyó al recobro caso a caso) o, residualmente, por
          <strong>recobro</strong> directo ante la ADRES. Desde la ${A.circular19_2026}, además, el
          reporte de lo financiado con UPC se trasladó al RDA (Resumen Digital de Atención),
          separándose aún más del circuito de MIPRES que sigue usando lo NO-UPC.`,
      },
    ],
  },

  // ---------------------------------------------------------------------
  // MODELOS DE CONTRATACIÓN Y PAGO EN SALUD
  // Adaptado del mapa mental "Sistema de contratación y pago en salud para
  // Colombia" (Fabian Dávila, XMind) — ver Referencias.
  // ---------------------------------------------------------------------
  contratacion: {
    intro: `El precio de un medicamento es solo un insumo dentro de un sistema más amplio: cómo
      la EPS le paga a la IPS, y cómo la ADRES le gira los recursos a la EPS, determina cuánto de
      ese precio termina afectando de verdad el gasto en salud. Esta sección resume el sistema de
      contratación y pago que envuelve al Canal Institucional — modelos de contratación,
      arquitectura de pagos, cómo se financia lo UPC y lo NO-UPC en detalle, y los mecanismos de
      transferencia de recursos entre ADRES, EPS e IPS.`,
    mapaMental: {
      texto: "Esta sección adapta el mapa mental original del autor:",
      titulo: "Sistema de contratación y pago en salud para Colombia (Fabian Dávila, XMind)",
      url: "https://xmind.app/mindmap/sistema-de-contratacion-y-pago-en-salud-para-colombia/cYh46M/?from=gallery",
    },
    modelos: [
      {
        nombre: "Capitación",
        resumen: "Pago fijo por persona afiliada durante un período definido.",
        detalle: `Se usa para servicios primarios, de baja complejidad, y actividades de promoción
          y prevención. Su ventaja es la previsibilidad presupuestal y que incentiva la prevención
          (el prestador gana más si mantiene sano al afiliado, no si lo trata más). Existen
          variantes ajustadas por riesgo y modelos de capitación integral.`,
      },
      {
        nombre: "Fee for Service (pago por servicio)",
        resumen: "Cobro por cada servicio prestado, según tarifas predefinidas.",
        detalle: `Aplica a procedimientos especializados, de alta complejidad, o eventos de bajo
          volumen y alto costo. Las tarifas pueden basarse en manuales de referencia (SOAT, ISS),
          negociarse directamente, o agruparse en paquetes de servicios.`,
      },
      {
        nombre: "Modelos de riesgo compartido (ARC)",
        resumen: "El pago se ajusta según cómo se comporte el costo o el resultado clínico real frente a lo esperado.",
        detalle: `La gestión integral del riesgo es, en la práctica, un instrumento de planeación
          pública para el acceso oportuno, efectivo y equitativo a los servicios del PBS. El riesgo
          puede ser "al alza" (lo asume una sola parte) o "a dos caras" (se comparte). Los Acuerdos
          de Riesgo Compartido (ARC) se dividen en <strong>acuerdos financieros</strong> (control de
          costos por medicamento o tratamiento) y <strong>acuerdos basados en resultados
          clínicos</strong> (el pago depende del desempeño observado) — con variantes como garantía
          de desenlaces, continuidad condicionada al resultado, o cobertura mientras se genera más
          evidencia. Están directamente relacionados con los Acuerdos de Acceso Administrado que se
          describen en "Estrategias de pricing".`,
      },
    ],
    preguntasARC: {
      titulo: "Antes de implementar un ARC, siete preguntas",
      items: [
        "Análisis estratégico: ¿por qué este medicamento/tratamiento necesita un acuerdo de riesgo compartido y no un precio fijo?",
        "Evaluación financiera: ¿cuál es el impacto presupuestal esperado y el rango de variación aceptable?",
        "Aspectos clínicos y evidencia: ¿qué desenlaces se van a medir y con qué nivel de certeza?",
        "Operatividad y cumplimiento: ¿quién registra, verifica y audita el resultado real?",
        "Marco legal y contractual: ¿qué figura contractual sustenta el acuerdo dentro del SGSSS?",
        "Evaluación de stakeholders: ¿qué gana y qué arriesga cada parte (fabricante, EPS, ADRES, paciente)?",
        "Riesgos potenciales: ¿qué pasa si el resultado no se puede medir a tiempo o de forma confiable?",
      ],
    },
    arquitecturaPagos: [
      { nombre: "Pago por Capitación", texto: "Pago fijo por usuario, acordado por adelantado, para cubrir servicios de baja complejidad." },
      { nombre: "Pago Global Prospectivo", texto: "Pago acordado por adelantado para cubrir los servicios de salud de un grupo de personas durante un período determinado, con estimación anticipada de costos, ajustes por complejidad y sistemas de monitoreo." },
      { nombre: "Pago por Evento", texto: "Pago realizado después de la atención, con un monto fijo por cada servicio o tratamiento prestado." },
      { nombre: "Pago por Paquete o Canasta", texto: "Pago acordado por adelantado que cubre un conjunto de servicios asociados a una atención — por ejemplo, un paquete quirúrgico completo." },
      { nombre: "Pago por Desempeño o Resultados", texto: "El monto pagado depende del resultado clínico o del cumplimiento de metas observadas — la misma lógica de los Acuerdos de Riesgo Compartido aplicada a la arquitectura de pago." },
    ],
    financiacion: {
      upc: {
        titulo: "Financiación básica: UPC",
        texto: `La Unidad de Pago por Capitación es la prima anual que financia el Plan de
          Beneficios en Salud, en sus tres regímenes: <strong>Contributivo</strong>,
          <strong>Subsidiado</strong> y regímenes <strong>especiales</strong> (Fuerzas Armadas,
          docentes). Se ajusta por edad, género, ubicación geográfica y riesgo catastrófico. Se
          distribuye por giro directo o indirecto (ver abajo) y está sujeta a la fiscalización de
          la Superintendencia Nacional de Salud.`,
      },
      noUpc: {
        titulo: "Financiación especializada: NO-UPC",
        texto: `Cubre medicamentos no incluidos en el PBS, procedimientos no incluidos y terapias
          innovadoras, gestionados vía ${A.mipres} y financiados por fondos de compensación. El
          <strong>Presupuesto Máximo</strong> es, en términos simples, el tope anual que cada EPS
          puede gastar en estas tecnologías no-PBS. El <strong>Sistema de Recobros</strong> sigue
          siendo el mecanismo para recuperar ante la ADRES lo invertido en tecnologías no
          financiadas con UPC — típicamente medicamentos para enfermedades huérfanas, terapias
          innovadoras bajo protocolos especiales, o dispositivos e insumos de alto costo no-PBS.`,
        proceso: {
          titulo: "Proceso de recobro ante la ADRES",
          pasos: [
            "Prescripción registrada en MIPRES.",
            "Autorización por parte de la EPS o de la ADRES.",
            "Dispensación del medicamento y facturación del prestador o proveedor.",
            "Radicación formal del recobro.",
            "Pago dentro de los plazos legales — 60 días.",
          ],
        },
      },
    },
    transferencias: [
      {
        nombre: "Giro Indirecto",
        destinatario: "EPS",
        texto: `Giros basados en la UPC, con retenciones por incumplimiento de hasta el
          <strong>15%</strong> por criterios de calidad. Opera sobre una plataforma transaccional
          unificada, con validación previa y avances programados — busca más control, trazabilidad
          y priorización según criterios predefinidos que un giro genérico a la EPS.`,
      },
      {
        nombre: "Giro Directo ADRES",
        destinatario: "IPS o proveedor habilitado",
        texto: `Transferencia directa desde la ADRES que omite a la EPS como intermediario. Para
          UPC, aplica cuando la EPS carece de patrimonio técnico adecuado, está bajo vigilancia
          especial, intervención o liquidación, o se acoge voluntariamente. Para presupuestos
          máximos, la ADRES gira como mínimo el <strong>80%</strong> directamente a la IPS o al
          proveedor. El objetivo declarado es reducir la intermediación y dar más trazabilidad al
          giro.`,
      },
    ],
    privados: [
      {
        nombre: "Medicina prepagada",
        texto: `Contratos privados de acceso preferencial a una red de prestadores mediante pago
          anticipado. No reemplaza la afiliación obligatoria al SGSSS: opera excluida de la UPC,
          aunque puede interoperar con el sistema público para copagos o servicios no-PBS.`,
      },
      {
        nombre: "Planes complementarios (EPS privadas)",
        texto: `Pólizas que amplían la cobertura del PBS. Se financian de forma cruzada (UPC más
          primas adicionales) y en algunos casos pueden gestionar tecnologías no-PBS vía MIPRES —
          tampoco reemplazan la afiliación obligatoria al SGSSS.`,
      },
      {
        nombre: "Pólizas de salud (aseguradoras tradicionales)",
        texto: `Seguros privados independientes del SGSSS. Si el asegurado termina usando
          servicios del PBS, pueden dar lugar a recobros al sistema — tampoco sustituyen la
          afiliación obligatoria.`,
      },
    ],
  },

  // ---------------------------------------------------------------------
  // GLOSARIO
  // ---------------------------------------------------------------------
  glosario: [
    { termino: "CNPMDM", definicion: `Comisión Nacional de Precios de Medicamentos y Dispositivos Médicos: organismo regulador mixto (Min. Salud + Min. Comercio) que fija la política de precios de medicamentos en Colombia. Creada como CNPM por la ${A.ley100} y ampliada a dispositivos médicos por el ${A.decreto705}.` },
    { termino: "SISMED", definicion: `Sistema de Información de Precios de Medicamentos: plataforma de reporte obligatorio de precios en distintos eslabones de la cadena, usada para monitoreo y vigilancia de mercado. Reformada a fondo por la ${A.circular021}.` },
    { termino: "CUFE", definicion: `Código Único de Factura Electrónica: identificador que la DIAN asigna a cada factura de venta electrónica. Desde la ${A.circular021}, cada registro de SISMED debe citar el CUFE de la factura real que soporta el precio reportado.` },
    { termino: "Precio bruto de factura", definicion: `Valor de la factura antes de aplicar descuentos comerciales o bonificaciones en el punto de venta. La ${A.circular021} exige reportarlo así (documentando aparte las unidades bonificadas), en vez de un precio neto ya descontado.` },
    { termino: "UMD", definicion: `Unidad Mínima de Dispensación: unidad estándar (p. ej., una tableta, una ampolla) en la que la ${A.circular021} exige reportar los volúmenes a SISMED, para que sean comparables entre actores.` },
    { termino: "PVL", definicion: "Precio Venta Laboratorio: precio de fábrica o de manufactura (P1 en esta cascada)." },
    { termino: "PVP", definicion: "Precio de Venta al Público: precio final al consumidor en el Canal Comercial (P5)." },
    { termino: "Canal Comercial (COM)", definicion: "Denominación oficial de SISMED para el segmento de mercado en el que los medicamentos se pagan con recursos privados de los agentes (droguerías, venta directa al público). Entre 2008 y 2017 representó, en promedio, cerca del 60% de las ventas reportadas." },
    { termino: "Canal Institucional (INS)", definicion: "Denominación oficial de SISMED para el segmento de mercado en el que las transacciones se cubren con recursos públicos: ventas a IPS, ESE, clínicas, hospitales y EPS." },
    { termino: "Precio Techo / PMV", definicion: `Precio Máximo de Venta fijado por la Comisión para medicamentos bajo Control Directo, calculado por comparación internacional y actualizado periódicamente (p. ej., ${A.circular19}, ${A.circular22}).` },
    { termino: "Mercado relevante", definicion: "Unidad de análisis que usa la CNPMDM para regular: un principio activo, forma farmacéutica y concentración específicos, agrupados según criterios de sustituibilidad." },
    { termino: "IHH (Índice de Herfindahl-Hirschman)", definicion: `Suma de los cuadrados de las participaciones de mercado (%) de cada actor de un mercado relevante. La ${A.circular18} lo usa como criterio explícito de clasificación en régimen de precios.` },
    { termino: "Libertad Vigilada", definicion: "Régimen general de precios: el mercado fija el precio, la Comisión vigila ex post vía SISMED." },
    { termino: "Libertad Regulada", definicion: "Régimen intermedio: el precio lo fija el productor dentro de una metodología o criterios definidos por la Comisión." },
    { termino: "Control Directo", definicion: "Régimen de mayor intervención: la Comisión fija directamente el precio techo, típicamente por comparación internacional." },
    { termino: "PBS", definicion: "Plan de Beneficios en Salud: conjunto de tecnologías y servicios que el sistema de salud colombiano cubre a sus afiliados." },
    { termino: "UPC", definicion: `Unidad de Pago por Capitación: valor per cápita que la ADRES reconoce a las EPS para cubrir el PBS de cada afiliado. Desde la ${A.circular19_2026}, lo financiado con UPC se reporta a través del RDA.` },
    { termino: "NO-UPC", definicion: `Tecnologías en salud (incluidos medicamentos) no financiadas con cargo a la UPC — típicamente de alto costo o uso no incluido en el registro sanitario — que se prescriben vía ${A.mipres} y se financian por presupuestos máximos o, residualmente, por recobro.` },
    { termino: "MIPRES", definicion: `Aplicativo del Ministerio de Salud ("Mi Prescripción") donde el profesional de salud registra la prescripción de tecnologías NO-UPC, generando el número de prescripción que sustenta su reconocimiento financiero. Más información: ${A.mipres}.` },
    { termino: "Presupuesto Máximo", definicion: `Monto que la ADRES transfiere mensualmente a cada EPS —junto con la UPC— para cubrir de forma prospectiva la mayoría de las tecnologías NO-UPC prescritas vía MIPRES, sustituyendo el antiguo recobro caso a caso para esa porción del gasto.` },
    { termino: "Recobro", definicion: "Mecanismo residual de reembolso caso a caso que la ADRES sigue reconociendo para tecnologías NO-UPC específicas que no se gestionan por presupuesto máximo (p. ej., enfermedades huérfanas de diagnóstico reciente)." },
    { termino: "RDA (Resumen Digital de Atención)", definicion: `Historia clínica interoperable a la que, desde la ${A.circular19_2026}, se trasladó el reporte de los medicamentos financiados con UPC (antes reportado por otra vía).` },
    { termino: "ADRES", definicion: "Administradora de los Recursos del Sistema General de Seguridad Social en Salud: entidad que administra los recursos del sistema, incluidos la UPC, los presupuestos máximos y los recobros." },
    { termino: "PISIS", definicion: `Plataforma de Intercambio de Información de SISPRO: el canal técnico por el que las entidades reportan sus archivos (incluido SISMED) al Ministerio de Salud, con validación de estructura y de calidad del contenido. Más información: ${A.pisis}.` },
    { termino: "ARC (Acuerdo de Riesgo Compartido)", definicion: "Contrato entre pagador y proveedor donde el pago se ajusta según el costo o el resultado clínico real frente a lo esperado; puede ser financiero (control de costos) o basado en resultados clínicos (pago según desempeño)." },
    { termino: "Giro Directo (ADRES)", definicion: "Transferencia de recursos que la ADRES hace directamente a la IPS o al proveedor, sin pasar por la EPS — obligatorio en ciertos escenarios (EPS sin patrimonio técnico adecuado, en intervención) y, para presupuestos máximos, en al menos el 80% del monto." },
    { termino: "Giro Indirecto", definicion: "Transferencia de recursos de la UPC hacia la EPS, con retenciones de hasta el 15% por incumplimiento de criterios de calidad, sobre una plataforma transaccional unificada." },
    { termino: "Fee for Service", definicion: "Modelo de pago por servicio: se cobra cada procedimiento o evento según una tarifa predefinida (manual de referencia, tarifa negociada o paquete de servicios) — típico de la atención especializada de alta complejidad." },
    { termino: "Margen de intermediación", definicion: "Sobreprecio acumulado por cada capa de la cadena de distribución (distribuidor, operador logístico, IPS) entre el precio de manufactura y el precio final reconocido." },
    { termino: "Gasto de bolsillo (out-of-pocket)", definicion: "Pago que realiza directamente el hogar por medicamentos no cubiertos, excluidos del PBS, o de venta libre (OTC)." },
    { termino: "OTC (venta libre)", definicion: "Medicamentos que no requieren fórmula médica y se comercializan directamente al consumidor en el Canal Comercial." },
    { termino: "IPS", definicion: "Institución Prestadora de Servicios de Salud: hospitales, clínicas y demás prestadores del Canal Institucional." },
    { termino: "EPS", definicion: "Entidad Promotora de Salud: aseguradora responsable de garantizar el PBS a sus afiliados dentro del SGSSS." },
    { termino: "CUM", definicion: "Código Único de Medicamento: identificador oficial (INVIMA) de cada presentación comercial de un medicamento en Colombia." },
    { termino: "Precio de lista vs. precio neto", definicion: "El precio de lista es el precio público formal; el precio neto es lo que realmente se paga tras rebates y descuentos, casi siempre confidenciales. La brecha entre ambos crece donde hay comparación internacional de precios (IRP)." },
    { termino: "Rebate / Nota crédito", definicion: "Descuento retroactivo que un fabricante entrega a un distribuidor o droguista, típicamente por cumplir una meta de ventas, emitido después de la factura original en vez de como una rebaja del precio de lista." },
    { termino: "Portfolio / bundle contracting", definicion: "Negociación de varios productos de un mismo fabricante (moléculas maduras e innovadoras) como un solo paquete, concentrando el descuento en los productos maduros para proteger el precio de lista de las innovadoras." },
    { termino: "Managed Entry Agreement (MEA)", definicion: "Acuerdo entre fabricante y pagador que condiciona el precio o el pago a resultados clínicos (esquema de desempeño) o a un tope de impacto presupuestal (esquema financiero)." },
    { termino: "Acuerdos de Acceso Administrado (AAA)", definicion: "Modelo colombiano de Managed Entry Agreement publicado por el Ministerio de Salud desde 2021, con fases de nominación, negociación, formalización, implementación y evaluación." },
  ],

  // ---------------------------------------------------------------------
  // REFERENCIAS — agrupadas por categoría
  // ---------------------------------------------------------------------
  referencias: [
    {
      categoria: "Normativa vigente y buscadores oficiales",
      items: [
        { titulo: "Normograma CNPMDM (INVIMA)", nota: "Compilado cronológico y actualizado de todas las circulares de la Comisión (2011 en adelante) — el punto de partida más directo para ver qué está vigente.", url: "https://normograma.invima.gov.co/compilacion/cndic_comision_nacional_precios_medicamentos_dispositivos_medicos.html" },
        { titulo: "Minsalud — Normatividad SISMED", nota: "Página institucional con la normativa vigente específica del reporte de precios.", url: "https://www.minsalud.gov.co/salud/Paginas/Normatividad-SISMED.aspx" },
        { titulo: "Minsalud — Índice general de circulares", nota: "Buscador de todas las circulares expedidas por el Ministerio, no solo las de precios.", url: "https://www.minsalud.gov.co/paginas/norm_circulares.aspx" },
        { titulo: "Minsalud — Regulación de precios de medicamentos", nota: "Página institucional de la política de regulación de precios.", url: "https://www.minsalud.gov.co/salud/MT/paginas/medicamentos-regulacion-precios.aspx" },
        { titulo: "SUIN-Juriscol (MinJusticia)", nota: "Sistema Único de Información Normativa del Estado colombiano: leyes, decretos y jurisprudencia desde 1864.", url: "https://www.suin-juriscol.gov.co" },
      ],
    },
    {
      categoria: "Reporte SISMED y reforma CUFE",
      items: [
        { titulo: "Circular Externa 021 de 2026 — texto completo", nota: "Reforma del reporte SISMED (CUFE, valor bruto de factura, UMD). Expedida 9 de junio de 2026, Diario Oficial 53.517.", url: "https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=193381&dt=S" },
        { titulo: "Circular 06 de 2018 (régimen anterior, derogado)", nota: "Reglas de reporte a SISMED vigentes antes de la Circular 021 de 2026 — útil para comparar el \"antes\".", url: "https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/circular-06-de-2018-cpmdm.pdf" },
        { titulo: "Circular 020 de 2026 — texto completo", nota: "Corrección técnica al Anexo 1 de la Circular 06/2018 (nomenclatura de archivos de reporte). No actualiza precios — no confundir con el proyecto de circular que sí lo hizo y terminó expedido como Circular 22 de 2026.", url: "https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=193012&dt=S" },
        { titulo: "SISMED — Sistema de Información de Precios de Medicamentos (SISPRO)", nota: "Portal del sistema de reporte y consulta de precios.", url: "https://www.sispro.gov.co/central-prestadores-de-servicios/Pages/SISMED-Sistema-de-Informacion-de-Precios-de-Medicamentos.aspx" },
        { titulo: "Consulta pública de precios de medicamentos (Datos Abiertos)", nota: "Dataset abierto con los precios reportados a SISMED en la cadena de comercialización.", url: "https://www.datos.gov.co/Salud-y-Protecci-n-Social/Consulta-p-blica-de-Precios-de-Medicamentos/3he6-m866" },
      ],
    },
    {
      categoria: "Metodología de clasificación y concentración de mercado",
      items: [
        { titulo: "Circular 18 de 2024 — Normograma INVIMA", nota: "Metodología vigente de clasificación de mercados relevantes por régimen de precios, con el IHH como criterio explícito.", url: "https://normograma.invima.gov.co/compilacion/docs/circular_cnpmd_0018_2024.htm" },
        { titulo: "Circular 19 de 2024 — Normograma INVIMA", nota: "Actualización del Precio Máximo de Venta (Precio Techo) para medicamentos en Control Directo.", url: "https://normograma.invima.gov.co/compilacion/docs/circular_cnpmd_0019_2024.htm" },
      ],
    },
    {
      categoria: "Sistemas de información y datos abiertos",
      items: [
        { titulo: "INVIMA — Código Único de Medicamentos (CUM)", nota: "Catálogo oficial de medicamentos vigentes en Colombia, disponible también en datos abiertos.", url: "https://www.datos.gov.co" },
        { titulo: "ADRES — Administradora de los Recursos del SGSSS", nota: "Gestión de UPC, recobros y presupuestos máximos.", url: "https://www.adres.gov.co" },
      ],
    },
    {
      categoria: "Estrategias de pricing farmacéutico",
      items: [
        { titulo: "Portfolio Contracting: The Power Move Reshaping Pharma Access (MMIT)", nota: "Apalancamiento de portafolio / bundling entre moléculas maduras e innovadoras.", url: "https://www.mmitnetwork.com/thought-leadership/power-move-reshaping-pharma-access/" },
        { titulo: "Does external reference pricing deliver what it promises? (PMC)", nota: "Brecha entre precio de lista y precio neto, y su efecto sobre la comparación internacional de precios.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7058621/" },
        { titulo: "What is Pharmaceutical Rebate Management? (Enable)", nota: "Rebates y notas crédito por cumplimiento de metas de ventas.", url: "https://www.enable.com/resources/articles/what-is-pharmaceutical-rebate-management/" },
        { titulo: "Modelo operativo de Acuerdos de Acceso Administrado — Minsalud", nota: "Documento técnico oficial del modelo colombiano de Managed Entry Agreements.", url: "https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/MET/modelo-operativo-acuerdos-acceso-administrado.pdf" },
        { titulo: "Indication-Based Pricing: The Simplest Explanation (Verpora)", nota: "Precio diferenciado por indicación clínica.", url: "https://www.verpora.com/articles/indication-based-pricing" },
        { titulo: "Differential Pricing for Pharmaceuticals (Wharton)", nota: "Precio escalonado por capacidad de pago entre países.", url: "https://faculty.wharton.upenn.edu/wp-content/uploads/2014/10/differential-pricing_3.pdf" },
        { titulo: "Optimal subscription models to pay for antibiotics (PMC)", nota: "Modelos de suscripción (\"modelo Netflix\") para nuevos antibióticos.", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9005781/" },
      ],
    },
    {
      categoria: "Videos y recursos audiovisuales",
      items: [
        { titulo: "Canal oficial de YouTube — Ministerio de Salud y Protección Social", nota: "Canal institucional (MinSaludCol); buscar ahí contenidos sobre SISMED, CNPMDM y regulación de precios, que se publican de forma periódica.", url: "https://www.youtube.com/channel/UCnkrxrpSM_pWuKg8rWR_0ug" },
      ],
    },
    {
      categoria: "Análisis y prensa especializada (no oficial)",
      items: [
        { titulo: "CONSULTORSALUD — Circular 021 explicada", nota: "Análisis periodístico en lenguaje claro de la reforma del reporte SISMED. Fuente secundaria: para el texto con fuerza normativa, use la circular oficial.", url: "https://consultorsalud.com/circular-21-sismed-precios-medicamentos/" },
      ],
    },
    {
      categoria: "Recursos del autor",
      items: [
        { titulo: "Sistema de contratación y pago en salud para Colombia (mapa mental — Fabian Dávila, XMind)", nota: "Mapa mental original del autor: modelos de contratación, arquitectura de pagos, financiación UPC/NO-UPC y mecanismos de giro. Base de la sección \"Contratación y pago\" de esta app. Elaboración propia, no es una fuente oficial.", url: "https://xmind.app/mindmap/sistema-de-contratacion-y-pago-en-salud-para-colombia/cYh46M/?from=gallery" },
      ],
    },
  ],
};
