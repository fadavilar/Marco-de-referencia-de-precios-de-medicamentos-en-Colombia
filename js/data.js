// Contenido de la app "Política de Precios de Medicamentos — Colombia"
// Fines educativos y de divulgación académica (Congreso Internacional de Investigaciones — UniNavarra).
// Los valores porcentuales de márgenes son ILUSTRATIVOS (fines pedagógicos), no cifras oficiales vigentes.

const DATA = {

  meta: {
    titulo: "Cascada de Precios de Medicamentos en Colombia",
    subtitulo: "Explorador del marco de política de precios: de P1 (manufactura) a P5 (precio al consumidor / al sistema)",
  },

  // ---------------------------------------------------------------------
  // MARCO REGULATORIO
  // ---------------------------------------------------------------------
  marco: {
    intro: `En Colombia, la regulación de precios de medicamentos es responsabilidad de la
      <strong>Comisión Nacional de Precios de Medicamentos y Dispositivos Médicos (CNPMDM)</strong>,
      un organismo mixto adscrito al Ministerio de Salud y Protección Social y al Ministerio de
      Comercio, Industria y Turismo (creado por el Decreto 1782 de 2014, con fundamento en la
      Ley 100 de 1993 y la Ley 1438 de 2011). La Comisión fija la política de precios mediante la
      <strong>Circular Única de Precios de Medicamentos</strong>, actualizada periódicamente, y
      hace seguimiento a través del <strong>Sistema de Información de Precios de Medicamentos
      (SISMED)</strong>, al cual laboratorios, distribuidores, mayoristas, IPS y droguerías están
      obligados a reportar los precios de cada eslabón de la cadena.`,
    pilares: [
      {
        titulo: "SISMED",
        texto: "Sistema obligatorio de reporte periódico de precios (a distintos niveles de la cadena) que alimenta el monitoreo de mercado y la identificación de fallas (precios atípicos, posición dominante, ausencia de competencia).",
      },
      {
        titulo: "Circular Única de Precios",
        texto: "Instrumento normativo de la CNPMDM que consolida metodologías, listados de principios activos bajo control directo y reglas de reporte. Se actualiza mediante circulares modificatorias.",
      },
      {
        titulo: "Precio Techo por comparación internacional",
        texto: "Para medicamentos bajo Control Directo, el precio máximo de venta (a nivel de manufactura/PVL) se fija tomando el menor precio observado en una canasta de países de referencia (International Reference Pricing / IRP), ajustado por metodología oficial.",
      },
      {
        titulo: "Márgenes de intermediación",
        texto: "A raíz de escándalos de sobrecostos en el canal institucional (compras vía operadores logísticos e intermediarios hacia IPS/EPS), la regulación ha introducido topes a los márgenes de comercialización en ese canal, buscando limitar el número de intermediarios y su rentabilidad acumulada.",
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
          mercado (precios atípicos, incrementos injustificados, ausencia de sustitutos).`,
      },
      {
        id: "regulada",
        nombre: "Libertad Regulada",
        badge: "warning",
        resumen: "Régimen intermedio — metodología de referencia sin precio fijo.",
        detalle: `Aplica a segmentos donde la Comisión identifica riesgo moderado de falla de
          mercado (competencia limitada, pocos oferentes). El productor sigue fijando el precio,
          pero debe ajustarse a una metodología o criterios definidos por la Comisión (p. ej.
          topes de variación, referencias de mercados comparables) y sustentar desviaciones.`,
      },
      {
        id: "directo",
        nombre: "Control Directo",
        badge: "critical",
        resumen: "Precio techo fijado por el regulador (comparación internacional).",
        detalle: `Aplica a principios activos/formas farmacéuticas incluidos explícitamente en el
          listado de la Circular Única (monopolios, biotecnológicos sin competencia, medicamentos
          con evidencia de precios excesivos, etc.). La Comisión fija un <strong>Precio Máximo de
          Venta (Precio Techo)</strong> a nivel de manufactura mediante comparación internacional
          (IRP) y, para el canal institucional, puede regular también los márgenes de
          intermediación aguas abajo.`,
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
          administra el inventario y la entrega a hospitales, clínicas e IPS.`,
      },
      {
        id: "P3",
        nombre: "Precio de Facturación a IPS / Operador",
        alias: "Precio de facturación institucional",
        visible: false,
        texto: `Precio al que el distribuidor o el operador de la cadena institucional factura el
          medicamento a la IPS, clínica u hospital. Este es el eslabón donde históricamente se
          concentraron los sobrecostos por múltiples capas de intermediación (casos como el
          llamado "cartel de la hemofilia"), lo que motivó topes regulados al margen acumulado.`,
      },
      {
        id: "P4",
        nombre: "Precio de Facturación a la EPS",
        alias: "Valor cargado al asegurador / recobro",
        visible: false,
        texto: `Valor con el que la IPS o el prestador carga el medicamento a la EPS o entidad
          responsable del pago, ya sea dentro del valor per cápita (UPC) para lo incluido en el
          plan de beneficios, o vía recobro/presupuesto máximo para lo no incluido.`,
      },
      {
        id: "P5",
        nombre: "Precio de Referencia al Sistema",
        alias: "Costo reconocido por el sistema (no hay pago directo del paciente)",
        visible: true,
        texto: `A diferencia del canal comercial, aquí <strong>el paciente casi nunca paga
          directamente este valor</strong>: está cubierto por el aseguramiento (UPC) o por el
          mecanismo de recobro. P5 institucional es más un precio de referencia/techo que el
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
  // MERCADO RETAIL
  // ---------------------------------------------------------------------
  retail: {
    intro: `El canal comercial o "retail" es la puerta de entrada de los medicamentos de venta
      libre (OTC) y del gasto de bolsillo: la porción que los hogares colombianos pagan
      directamente en droguerías y farmacias, sin pasar por el aseguramiento.`,
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
  // MERCADO INSTITUCIONAL
  // ---------------------------------------------------------------------
  institucional: {
    intro: `El canal institucional agrupa la venta de medicamentos hacia IPS, clínicas,
      hospitales y, en última instancia, hacia las EPS y demás entidades responsables del pago
      dentro del Sistema General de Seguridad Social en Salud (SGSSS). Aquí el precio no lo paga
      directamente el paciente: lo asume el sistema, vía UPC o recobro.`,
    puntos: [
      {
        titulo: "IPS y operadores logísticos",
        texto: `Entre el distribuidor y la EPS suele haber una o más capas de intermediación
          (operadores logísticos, gestores farmacéuticos, la propia IPS). Cada capa añade un
          margen: cuantas más capas, mayor el precio acumulado que termina reconociendo el
          sistema.`,
      },
      {
        titulo: "Medicamentos bajo Control Directo",
        texto: `Una parte relevante del gasto institucional corresponde a medicamentos de alto
          costo (biotecnológicos, oncológicos, enfermedades huérfanas) que suelen estar sujetos a
          Control Directo precisamente por su bajo nivel de competencia y su impacto fiscal.`,
      },
      {
        titulo: "Márgenes de intermediación regulados",
        texto: `A partir de los escándalos de sobrefacturación en la cadena institucional (compras
          de medicamentos de alto costo a través de múltiples intermediarios), la regulación
          introdujo topes al margen de comercialización acumulado en ese canal, buscando acercar
          el precio de facturación a la IPS al precio de manufactura.`,
      },
      {
        titulo: "UPC y recobros",
        texto: `Lo cubierto por el Plan de Beneficios en Salud (PBS) se financia con la Unidad de
          Pago por Capitación (UPC); lo no incluido se gestiona mediante mecanismos de
          presupuestos máximos o recobro. Ambos mecanismos son sensibles al precio reconocido en
          el eslabón P4/P5 institucional y son objeto de auditoría por parte de la
          Administradora de los Recursos del SGSSS (ADRES).`,
      },
    ],
  },

  // ---------------------------------------------------------------------
  // GLOSARIO
  // ---------------------------------------------------------------------
  glosario: [
    { termino: "CNPMDM", definicion: "Comisión Nacional de Precios de Medicamentos y Dispositivos Médicos: organismo regulador mixto (Min. Salud + Min. Comercio) que fija la política de precios de medicamentos en Colombia." },
    { termino: "SISMED", definicion: "Sistema de Información de Precios de Medicamentos: plataforma de reporte obligatorio de precios en distintos eslabones de la cadena, usada para monitoreo y vigilancia de mercado." },
    { termino: "Circular Única de Precios", definicion: "Instrumento normativo de la CNPMDM que consolida la metodología de regulación de precios y los listados de medicamentos bajo control directo, actualizado mediante circulares modificatorias." },
    { termino: "PVL", definicion: "Precio Venta Laboratorio: precio de fábrica o de manufactura (P1 en esta cascada)." },
    { termino: "PVP", definicion: "Precio de Venta al Público: precio final al consumidor en el canal comercial (P5 retail)." },
    { termino: "Precio Techo", definicion: "Precio máximo de venta fijado por la Comisión para medicamentos bajo Control Directo, calculado por comparación internacional (IRP) contra una canasta de países de referencia." },
    { termino: "IRP (International Reference Pricing)", definicion: "Metodología de fijación de precio techo basada en comparar el precio del medicamento en un grupo de países de referencia y tomar un estadístico (p. ej., el menor o un percentil) como techo local." },
    { termino: "Libertad Vigilada", definicion: "Régimen general de precios: el mercado fija el precio, la Comisión vigila ex post vía SISMED." },
    { termino: "Libertad Regulada", definicion: "Régimen intermedio: el precio lo fija el productor dentro de una metodología o criterios definidos por la Comisión." },
    { termino: "Control Directo", definicion: "Régimen de mayor intervención: la Comisión fija directamente el precio techo, típicamente por IRP." },
    { termino: "PBS", definicion: "Plan de Beneficios en Salud: conjunto de tecnologías y servicios que el sistema de salud colombiano cubre a sus afiliados." },
    { termino: "UPC", definicion: "Unidad de Pago por Capitación: valor per cápita que la ADRES reconoce a las EPS para cubrir el PBS de cada afiliado." },
    { termino: "Recobro / Presupuesto Máximo", definicion: "Mecanismos de financiación de tecnologías no incluidas explícitamente en el PBS, gestionados y auditados por la ADRES." },
    { termino: "ADRES", definicion: "Administradora de los Recursos del Sistema General de Seguridad Social en Salud: entidad que administra los recursos del sistema, incluida la UPC y los recobros." },
    { termino: "Margen de intermediación", definicion: "Sobreprecio acumulado por cada capa de la cadena de distribución (distribuidor, operador logístico, IPS) entre el precio de manufactura y el precio final reconocido." },
    { termino: "Gasto de bolsillo (out-of-pocket)", definicion: "Pago que realiza directamente el hogar por medicamentos no cubiertos, excluidos del PBS, o de venta libre (OTC)." },
    { termino: "OTC (venta libre)", definicion: "Medicamentos que no requieren fórmula médica y se comercializan directamente al consumidor en el canal retail." },
    { termino: "IPS", definicion: "Institución Prestadora de Servicios de Salud: hospitales, clínicas y demás prestadores del canal institucional." },
    { termino: "EPS", definicion: "Entidad Promotora de Salud: aseguradora responsable de garantizar el PBS a sus afiliados dentro del SGSSS." },
    { termino: "CUM", definicion: "Código Único de Medicamento: identificador oficial (INVIMA) de cada presentación comercial de un medicamento en Colombia." },
  ],

  // ---------------------------------------------------------------------
  // REFERENCIAS
  // ---------------------------------------------------------------------
  referencias: [
    { titulo: "Ministerio de Salud y Protección Social — Precios de Medicamentos", nota: "Portal institucional con la Circular Única de Precios, circulares modificatorias y normativa vigente.", url: "https://www.minsalud.gov.co" },
    { titulo: "CNPMDM — Comisión Nacional de Precios de Medicamentos y Dispositivos Médicos", nota: "Actas, circulares y metodología de la Comisión.", url: "https://www.minsalud.gov.co/salud/MT/Paginas/comision-nacional-de-precios-de-medicamentos.aspx" },
    { titulo: "SISMED — Sistema de Información de Precios de Medicamentos", nota: "Sistema de reporte de precios y consulta de datos históricos.", url: "https://www.sispro.gov.co" },
    { titulo: "INVIMA — Código Único de Medicamentos (CUM)", nota: "Catálogo oficial de medicamentos vigentes en Colombia, disponible también en datos abiertos.", url: "https://www.datos.gov.co" },
    { titulo: "ADRES — Administradora de los Recursos del SGSSS", nota: "Gestión de UPC, recobros y presupuestos máximos.", url: "https://www.adres.gov.co" },
    { titulo: "Decreto 1782 de 2014", nota: "Fusiona la Comisión Nacional de Precios de Medicamentos y la de Dispositivos Médicos en la CNPMDM.", url: "" },
    { titulo: "Ley 100 de 1993 y Ley 1438 de 2011", nota: "Marco general del Sistema General de Seguridad Social en Salud (SGSSS).", url: "" },
  ],
};
