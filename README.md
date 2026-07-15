# Marco de Referencia de Precios de Medicamentos en Colombia

App web autocontenida (HTML/CSS/JS, sin build ni backend) para explorar el marco de política de
precios de medicamentos en Colombia: marco regulatorio (CNPMDM, SISMED, circulares vigentes,
regímenes de libertad vigilada / libertad regulada / control directo), una **cascada de precios
interactiva de 5 eslabones (P1 a P5)** — desde el precio de manufactura, invisible, hasta el
precio al consumidor final o al sistema —, el **índice de concentración de mercado (HHI)** con
calculadora interactiva, la reforma del reporte SISMED vía **factura electrónica (CUFE)**, y los
los dos canales que usa la nomenclatura oficial de SISMED: **Canal Comercial** (droguistas,
medicamentos OTC, gasto de bolsillo) y **Canal Institucional** (IPS, EPS, UPC, presupuestos
máximos/recobro y márgenes de intermediación), además de una guía de referenciación
internacional de precios (IRP) y las estrategias de pricing farmacéutico más usadas en la práctica.

## Usar

Abre `index.html` directamente en el navegador (funciona offline, sin instalación) o visita la
versión publicada en GitHub Pages. Si prefieres servirla por HTTP en local:

```
powershell -File serve.ps1
```

y visita `http://localhost:8844/`. También funciona con cualquier otro servidor estático
(`npx serve`, `python -m http.server`, GitHub Pages, Netlify, etc.) apuntado a esta carpeta.

## Contenido

- `index.html` — estructura de la app (navegación por pestañas, contenedores para cada sección).
- `css/styles.css` — paleta de color (modo claro/oscuro) y estilos de todos los componentes.
- `js/data.js` — todo el contenido editorial: marco regulatorio, definiciones de los 5 eslabones
  de la cascada por canal, márgenes ilustrativos, concentración de mercado (HHI), reforma CUFE,
  glosario y referencias. **Este es el archivo a editar si quieres actualizar cifras, textos o
  fuentes.**
- `js/cascade.js` — lógica de la calculadora de cascada (P1 → P5): renderiza el gráfico y aplica
  los márgenes según el canal y el régimen seleccionados.
- `js/hhi.js` — lógica de la calculadora interactiva del Índice de Herfindahl-Hirschman.
- `js/app.js` — navegación por pestañas, tema claro/oscuro y render del resto del contenido.
- `serve.ps1` — servidor HTTP estático mínimo (PowerShell), igual que en `app/serve.ps1`.

## La cascada de precios (P1 → P5)

| Eslabón | Canal Comercial | Canal Institucional |
|---|---|---|
| P1 | Precio de manufactura (PVL) — invisible | igual |
| P2 | Precio al distribuidor mayorista | Precio al distribuidor / operador logístico |
| P3 | Precio de adquisición — droguería | Precio de facturación a IPS / operador |
| P4 | Precio de lista en punto de venta | Precio de facturación a la EPS (UPC / recobro) |
| P5 | PVP — precio al consumidor final | Precio de referencia al sistema (sin pago directo del paciente) |

Los porcentajes de margen que usa la calculadora en cada régimen (Libertad Vigilada / Libertad
Regulada / Control Directo) son **ilustrativos**: buscan mostrar la lógica de la política (a
mayor intervención regulatoria, menor margen acumulado, especialmente en el canal institucional),
no reproducir cifras oficiales vigentes. Editables en `DATA.margenes` dentro de `js/data.js`.

## Concentración de mercado (HHI) y reforma CUFE

Dos secciones con contenido verificado contra fuentes oficiales (julio de 2026):

- **Concentración (HHI)**: el Índice de Herfindahl-Hirschman explicado desde su origen académico
  (Hirschman 1945, Herfindahl 1950) hasta su uso real y verificado en la Circular 18 de 2024 de la
  CNPMDM, que lo usa para clasificar mercados relevantes en régimen de precios. Incluye una
  calculadora interactiva.
- **Reporte y CUFE**: qué cambió con la Circular Externa 021 de 2026 (9 de junio de 2026) en el
  reporte a SISMED — ahora cada registro debe citar el Código Único de Factura Electrónica (CUFE)
  de la DIAN y reportar el valor bruto real de la factura, en vez de un precio autorreportado sin
  verificación cruzada.

## Publicar en GitHub Pages

1. Sube esta carpeta (o todo el repositorio) a GitHub.
2. En el repositorio: **Settings → Pages → Source**, selecciona la rama y, si publicas todo el
   repo, la carpeta `/precios-colombia` (o usa un repo dedicado con esta carpeta como raíz).
3. GitHub Pages sirve archivos estáticos directamente — no requiere build.

## Aviso

Herramienta educativa y de divulgación regulatoria. No constituye asesoría legal ni regulatoria;
para normativa y cifras actuales, consulta las fuentes oficiales listadas en la sección
"Referencias" dentro de la app (Ministerio de Salud, CNPMDM, SISMED, INVIMA, ADRES) — la CNPMDM
actualiza circulares con frecuencia, así que confirma siempre la versión vigente.
