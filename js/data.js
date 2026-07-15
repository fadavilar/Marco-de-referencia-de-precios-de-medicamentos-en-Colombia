// Contenido de la app "Marco de referencia de precios de medicamentos en Colombia"
// Herramienta educativa de divulgación regulatoria.
// Los valores porcentuales de la calculadora de cascada (js/cascade.js) son ILUSTRATIVOS
// (fines pedagógicos), no cifras oficiales vigentes. Todo lo demás está respaldado por las
// fuentes citadas en la sección Referencias — revisadas en julio de 2026.

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
      Ley 100 de 1993</strong> (reglamentado por el Decreto 413 de 1994) y ampliada a dispositivos
      médicos mediante el <strong>Decreto 705 de 2016</strong>, quedando como CNPMDM. Fija la
      política de precios mediante <strong>circulares externas</strong> (no existe un único texto
      consolidado permanente: cada circular modifica o deroga a las anteriores) y hace seguimiento
      a través del <strong>Sistema de Información de Precios de Medicamentos (SISMED)</strong>, al
      cual laboratorios, distribuidores, mayoristas, IPS y droguerías están obligados a reportar
      los precios de cada eslabón de la cadena.`,
    pilares: [
      {
        titulo: "SISMED",
        texto: "Sistema obligatorio de reporte periódico de precios (a distintos niveles de la cadena) que alimenta el monitoreo de mercado y la identificación de fallas (precios atípicos, posición dominante, ausencia de competencia). Reformado a fondo por la Circular 021 de 2026 — ver la sección \"Reporte y CUFE\".",
      },
      {
        titulo: "Circulares de la CNPMDM",
        texto: "No hay una \"circular única\" permanente: la política se fija y actualiza mediante circulares externas numeradas que la Comisión expide y modifica con frecuencia (metodología, listados de mercados relevantes bajo control directo, reglas de reporte). Conviene revisar siempre la versión vigente, no una copia archivada.",
      },
      {
        titulo: "Precio Techo por comparación internacional",
        texto: "Para medicamentos bajo Control Directo, el precio máximo de venta (a nivel de manufactura/PVL) se fija tomando como referencia los precios observados en una canasta de países, ajustados por la metodología vigente (Circular 18 de 2024) y actualizados periódicamente (p. ej. Circular 19 de 2024, Circular 22 de 2026).",
      },
      {
        titulo: "Concentración de mercado",
        texto: "Desde la Circular 18 de 2024, la clasificación de cada mercado relevante en un régimen de precios usa explícitamente el Índice de Herfindahl-Hirschman (HHI) calculado con datos de SISMED — ver la sección dedicada \"Concentración (HHI)\".",
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
          mercado. Un mercado relevante con HHI bajo (baja concentración) entra directamente a este
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
        detalle: `Aplica a mercados relevantes con alta concentración (HHI alto) y/o participaciones
          de venta elevadas, según la metodología de puntaje de la Circular 18 de 2024. La Comisión
          fija un <strong>Precio Máximo de Venta (Precio Techo / PMV)</strong> a nivel de
          manufactura por comparación internacional, actualizado periódicamente (la revisión de la
          Circular 22 de 2026 ajustó a la baja 528 mercados regulados e incorporó 33 nuevos).`,
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
          concentraron los sobrecostos por múltiples capas de intermediación, lo que motivó topes
          regulados al margen acumulado.`,
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
  // CONCENTRACIÓN DE MERCADO — ÍNDICE DE HERFINDAHL-HIRSCHMAN (HHI)
  // ---------------------------------------------------------------------
  concentracion: {
    intro: `El Índice de Herfindahl-Hirschman (HHI) mide qué tan concentrado está un mercado sumando
      el cuadrado de la participación (en %) de cada actor que compite en él. En Colombia no es solo
      un concepto de libro de texto: la <strong>Circular 18 de 2024</strong> de la CNPMDM lo usa de
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
        actor: <code>HHI = Σ (participación_i)²</code>. Un monopolio puro (un solo actor con 100% del
        mercado) da HHI = 10.000, el valor máximo. Cuantos más competidores con participaciones
        similares haya, más bajo el índice — con n actores idénticos, HHI = 10.000 / n.`,
    },
    umbralesGenericos: {
      titulo: "Umbrales de referencia internacional",
      texto: `Las guías de fusiones de EE. UU. (DOJ/FTC) usan tres bandas orientativas, ampliamente
        adoptadas en la práctica internacional de competencia:`,
      bandas: [
        { rango: "HHI < 1.500", nombre: "Mercado no concentrado", badge: "good" },
        { rango: "1.500 ≤ HHI < 2.500", nombre: "Moderadamente concentrado", badge: "warning" },
        { rango: "HHI ≥ 2.500", nombre: "Altamente concentrado", badge: "critical" },
      ],
    },
    umbralesColombia: {
      titulo: "Los umbrales que usa la CNPMDM (Circular 18 de 2024)",
      texto: `Para cada mercado relevante, la Comisión calcula el HHI a partir de las ventas
        históricas reportadas a SISMED y le asigna un puntaje que alimenta la metodología de
        clasificación en régimen de precios:`,
      bandas: [
        { rango: "HHI < 2.500", nombre: "Puntaje 1 — entra directo a vigilancia (Libertad Vigilada), sin importar el criterio de participación de ventas", badge: "good" },
        { rango: "2.500 ≤ HHI < 10.000", nombre: "Puntaje 2 — se combina con el criterio de participación de ventas para definir el régimen", badge: "warning" },
        { rango: "HHI = 10.000", nombre: "Puntaje 3 — mercado monopólico (un solo actor); mayor probabilidad de terminar en Control Directo", badge: "critical" },
      ],
      nota: `Los umbrales de puntaje están verificados contra el texto de la Circular 18 de 2024.
        La regla completa combina este puntaje de concentración con un segundo criterio de
        participación de ventas del mercado relevante — consulte el texto vigente de la circular
        (enlace en Referencias) para la metodología integral de asignación de régimen.`,
    },
    calculadora: {
      titulo: "Calculadora interactiva de HHI",
      texto: `Ingresa los actores de un mercado relevante ilustrativo (laboratorio/marca) y su
        participación de ventas en porcentaje. La calculadora suma los cuadrados en vivo y clasifica
        el resultado con ambas escalas (internacional y CNPMDM).`,
      ejemplo: [
        { nombre: "Laboratorio A", share: 42 },
        { nombre: "Laboratorio B", share: 27 },
        { nombre: "Laboratorio C", share: 15 },
        { nombre: "Laboratorio D", share: 10 },
        { nombre: "Otros", share: 6 },
      ],
    },
  },

  // ---------------------------------------------------------------------
  // REPORTE DE PRECIOS Y FACTURA ELECTRÓNICA (CUFE) — ANTES / DESPUÉS
  // ---------------------------------------------------------------------
  reporteCufe: {
    intro: `El 9 de junio de 2026, el Ministerio de Salud y Protección Social — CNPMDM expidió la
      <strong>Circular Externa 021 de 2026</strong> (Diario Oficial N.º 53.517), que reescribe por
      completo el reporte a SISMED y deroga las circulares 06 de 2018 y 17 de 2023. Es el cambio más
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
      { fecha: "1994", numero: "Decreto 413 de 1994", resumen: "Reglamenta las funciones de la entonces Comisión Nacional de Precios de Medicamentos (Ley 100/1993, art. 245)." },
      { fecha: "2016", numero: "Decreto 705 de 2016", resumen: "Crea la CNPMDM al ampliar la Comisión a dispositivos médicos." },
      { fecha: "2018", numero: "Circular 06 de 2018", resumen: "Reglas de reporte a SISMED vigentes hasta 2026 (derogada por la Circular 021/2026)." },
      { fecha: "2023", numero: "Circular 17 de 2023", resumen: "Modifica procedimientos de reporte a SISMED (derogada por la Circular 021/2026)." },
      { fecha: "2024", numero: "Circular 18 de 2024", resumen: "Fija la metodología vigente de clasificación de mercados relevantes en régimen de precios, con el HHI como criterio explícito." },
      { fecha: "2024", numero: "Circular 19 de 2024", resumen: "Actualiza el Precio Máximo de Venta (Precio Techo) de los medicamentos ya sujetos a Control Directo." },
      { fecha: "2026", numero: "Circular 22 de 2026", resumen: "Una de las revisiones más amplias de precios techo en años: incorpora 33 mercados relevantes nuevos, modifica 22 ya regulados y ajusta 528 mercados por tasa de cambio (-7,4%)." },
      { fecha: "2026", numero: "Circular 021 de 2026", resumen: "Reforma integral del reporte SISMED: exige CUFE y valor bruto de factura. Publicada el 9 de junio de 2026 (Diario Oficial 53.517)." },
    ],
  },

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
        texto: `A raíz de escándalos de sobrefacturación en la cadena institucional (compras de
          medicamentos de alto costo a través de múltiples intermediarios), la regulación ha
          avanzado hacia topes al margen de comercialización acumulado en ese canal, buscando
          acercar el precio de facturación a la IPS al precio de manufactura. La reforma del
          reporte vía CUFE (Circular 021/2026) refuerza esa vigilancia al hacer visible el precio
          bruto real de cada factura en la cadena.`,
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
    { termino: "CNPMDM", definicion: "Comisión Nacional de Precios de Medicamentos y Dispositivos Médicos: organismo regulador mixto (Min. Salud + Min. Comercio) que fija la política de precios de medicamentos en Colombia. Creada como CNPM por la Ley 100/1993 y ampliada a dispositivos médicos por el Decreto 705 de 2016." },
    { termino: "SISMED", definicion: "Sistema de Información de Precios de Medicamentos: plataforma de reporte obligatorio de precios en distintos eslabones de la cadena, usada para monitoreo y vigilancia de mercado. Reformada a fondo por la Circular 021 de 2026." },
    { termino: "CUFE", definicion: "Código Único de Factura Electrónica: identificador que la DIAN asigna a cada factura de venta electrónica. Desde la Circular 021 de 2026, cada registro de SISMED debe citar el CUFE de la factura real que soporta el precio reportado." },
    { termino: "Precio bruto de factura", definicion: "Valor de la factura antes de aplicar descuentos comerciales o bonificaciones en el punto de venta. La Circular 021 de 2026 exige reportarlo así (documentando aparte las unidades bonificadas), en vez de un precio neto ya descontado." },
    { termino: "UMD", definicion: "Unidad Mínima de Dispensación: unidad estándar (p. ej., una tableta, una ampolla) en la que la Circular 021 de 2026 exige reportar los volúmenes a SISMED, para que sean comparables entre actores." },
    { termino: "PVL", definicion: "Precio Venta Laboratorio: precio de fábrica o de manufactura (P1 en esta cascada)." },
    { termino: "PVP", definicion: "Precio de Venta al Público: precio final al consumidor en el canal comercial (P5 retail)." },
    { termino: "Precio Techo / PMV", definicion: "Precio Máximo de Venta fijado por la Comisión para medicamentos bajo Control Directo, calculado por comparación internacional y actualizado periódicamente (p. ej., Circular 19 de 2024, Circular 22 de 2026)." },
    { termino: "Mercado relevante", definicion: "Unidad de análisis que usa la CNPMDM para regular: un principio activo, forma farmacéutica y concentración específicos, agrupados según criterios de sustituibilidad." },
    { termino: "HHI (Índice de Herfindahl-Hirschman)", definicion: "Suma de los cuadrados de las participaciones de mercado (%) de cada actor de un mercado relevante. La Circular 18 de 2024 lo usa como criterio explícito de clasificación en régimen de precios." },
    { termino: "Libertad Vigilada", definicion: "Régimen general de precios: el mercado fija el precio, la Comisión vigila ex post vía SISMED." },
    { termino: "Libertad Regulada", definicion: "Régimen intermedio: el precio lo fija el productor dentro de una metodología o criterios definidos por la Comisión." },
    { termino: "Control Directo", definicion: "Régimen de mayor intervención: la Comisión fija directamente el precio techo, típicamente por comparación internacional." },
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
        { titulo: "SISMED — Sistema de Información de Precios de Medicamentos (SISPRO)", nota: "Portal del sistema de reporte y consulta de precios.", url: "https://www.sispro.gov.co/central-prestadores-de-servicios/Pages/SISMED-Sistema-de-Informacion-de-Precios-de-Medicamentos.aspx" },
        { titulo: "Consulta pública de precios de medicamentos (Datos Abiertos)", nota: "Dataset abierto con los precios reportados a SISMED en la cadena de comercialización.", url: "https://www.datos.gov.co/Salud-y-Protecci-n-Social/Consulta-p-blica-de-Precios-de-Medicamentos/3he6-m866" },
      ],
    },
    {
      categoria: "Metodología de clasificación y concentración de mercado",
      items: [
        { titulo: "Circular 18 de 2024 — Normograma INVIMA", nota: "Metodología vigente de clasificación de mercados relevantes por régimen de precios, con el HHI como criterio explícito.", url: "https://normograma.invima.gov.co/compilacion/docs/circular_cnpmd_0018_2024.htm" },
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
  ],
};
