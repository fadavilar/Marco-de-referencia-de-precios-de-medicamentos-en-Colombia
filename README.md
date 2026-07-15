# Cascada de Precios de Medicamentos — Colombia

App web autocontenida (HTML/CSS/JS, sin build ni backend) para explorar el marco de política de
precios de medicamentos en Colombia: marco regulatorio (CNPMDM, SISMED, Circular Única,
regímenes de libertad vigilada / libertad regulada / control directo), una **cascada de precios
interactiva de 5 eslabones (P1 a P5)** — desde el precio de manufactura, invisible, hasta el
precio al consumidor final o al sistema — y los dos grandes canales de mercado: **retail**
(droguistas, medicamentos OTC, gasto de bolsillo) e **institucional** (IPS, EPS, UPC, recobros y
márgenes de intermediación).

Desarrollada para el Congreso Internacional de Investigaciones — UniNavarra.

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
  de la cascada por canal, márgenes ilustrativos por régimen × canal, glosario y referencias.
  **Este es el archivo a editar si quieres actualizar cifras, textos o fuentes.**
- `js/cascade.js` — lógica de la calculadora de cascada (P1 → P5): renderiza el gráfico y aplica
  los márgenes según el canal y el régimen seleccionados.
- `js/app.js` — navegación por pestañas, tema claro/oscuro y render del resto del contenido.
- `serve.ps1` — servidor HTTP estático mínimo (PowerShell), igual que en `app/serve.ps1`.

## La cascada de precios (P1 → P5)

| Eslabón | Retail (comercial) | Institucional |
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

## Publicar en GitHub Pages

1. Sube esta carpeta (o todo el repositorio) a GitHub.
2. En el repositorio: **Settings → Pages → Source**, selecciona la rama y, si publicas todo el
   repo, la carpeta `/precios-colombia` (o usa un repo dedicado con esta carpeta como raíz).
3. GitHub Pages sirve archivos estáticos directamente — no requiere build.

## Aviso

Herramienta con fines educativos y de divulgación académica. No constituye asesoría regulatoria
ni refleja precios oficiales vigentes; para normativa y cifras actuales, consulta las fuentes
oficiales listadas en la sección "Referencias" dentro de la app (Ministerio de Salud, CNPMDM,
SISMED, INVIMA, ADRES).
