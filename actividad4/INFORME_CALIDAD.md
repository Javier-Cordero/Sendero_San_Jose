# Informe de calidad — Senderos San José

Fecha: 27/10/2026 · Autor(a): ______________________

Herramientas usadas por quien preparó el código: Chromium con Playwright (anchos 320, 390, 768 y 1280 px; modo claro, oscuro
y movimiento reducido emulados), cálculo propio de contraste WCAG y revisión estructural del HTML. **No se ejecutaron
Lighthouse ni los validadores oficiales de W3C** (no hay internet ni Chrome DevTools en ese entorno): las celdas
marcadas «medir» las debes completar tú con las herramientas reales (ver `LEEME-LABS-12-15.md`, sección Lab 13).

## 1. Lighthouse (móvil) — completar al medir
| Página | Tema | Rendimiento | Accesibilidad | Buenas prácticas | SEO | LCP | CLS | Peso |
|---|---|---|---|---|---|---|---|---|
| index | claro | medir | medir | medir | medir | medir | medir | medir |
| index | oscuro | medir | medir | medir | medir | medir | medir | medir |
| tours | claro | medir | medir | medir | medir | medir | medir | medir |
| nosotros | claro | medir | medir | medir | medir | medir | medir | medir |
| nosotros | oscuro | medir | medir | medir | medir | medir | medir | medir |
| contacto | claro | medir | medir | medir | medir | medir | medir | medir |
| version-bootstrap | claro | medir | medir | medir | medir | medir | medir | medir |

Nota: `gracias.html` y `404.html` llevan `noindex` a propósito (Lab 13), por lo que Lighthouse marcará «la página no está
indexable» en SEO. No son páginas para auditar; mide las de la tabla.

## 2. Hallazgos y correcciones (encontrados al integrar los labs 12 a 15)
| # | Hallazgo (herramienta) | Criterio (WCAG / métrica) | Corrección | Verificación |
|---|---|---|---|---|
| 1 | El menú tenía 4 enlaces y no existía «Nosotros» (revisión de menú en las 8 páginas) | WCAG 3.2.3 navegación consistente | Enlace agregado antes de «Contacto» en todas las páginas, la versión Bootstrap y la 404 | 5 enlaces en las 9 páginas; `aria-current` correcto en cada una |
| 2 | `contacto.html` no tenía el ancla `#reserva` a la que apunta el botón de «Nosotros» (comprobador de enlaces) | Enlace roto / WCAG 2.4.5 | `id="reserva"` en el h2 «Reserva tu tour» | 0 enlaces o anclas rotos en las 9 páginas |
| 3 | Las secciones 29-33 de referencia usan tokens que este CSS no tenía (`--espacio-s`, `--espacio-m`, `--color-blanco`) | Mantenibilidad / regla «cero colores nuevos» | Se agregó la escala `--espacio-*` y el avatar usa `--color-texto-sobre-marca` en vez de un blanco nuevo | Cero colores fuera de `:root`, modo oscuro y bloque de impresión |
| 4 | `robots.txt` de referencia bloquea `gracias.html` y `version-bootstrap/`; un bloqueo impide leer el `noindex` y Lighthouse lo reporta como página no rastreable | SEO técnico | `robots.txt` permite todo y solo enlaza el sitemap; el `noindex` va en la propia página | Revisado a mano |
| 5 | Faltaban canonical, robots.txt, sitemap.xml, datos estructurados y 404 | SEO técnico | Agregados; `gracias.html` con `noindex` | Ver sección 5 |

## 3. Validación W3C
- HTML (9 páginas): **medir** en https://validator.w3.org/ (pestaña «Validate by File Upload») — resultado: ____ errores.
  Revisión estructural propia: sin etiquetas sin cerrar ni cierres inesperados, sin ids duplicados, un solo h1 por página,
  sin saltos de encabezado, todas las imágenes con `alt`, `width` y `height`, todos los campos con etiqueta.
- CSS (`css/estilos.css`): **medir** en https://jigsaw.w3.org/css-validator/ — resultado: ____ errores, ____ advertencias.
  Las advertencias típicas sobre variables CSS (`var(--…)`), `color-scheme` o `:user-invalid` son falsos positivos: el
  validador aún no evalúa esas propiedades modernas.

## 4. Pruebas manuales de accesibilidad
| Prueba | Resultado |
|---|---|
| Recorrido solo con teclado (menú, formulario, FAQ) | FAQ de «Nosotros»: Enter abre y Espacio cierra cada `<details>` ✔. Menú y formulario: probar con Tab |
| Reflow 320 px (WCAG 1.4.10) | Sin desplazamiento horizontal en las 8 páginas, en claro y oscuro (medido en 320, 390, 768 y 1280 px) ✔ |
| Lector de pantalla: títulos, regiones, imágenes, formulario | Pendiente de probar (NVDA o VoiceOver) |
| Modo oscuro y movimiento reducido | Contraste mínimo medido: 7,3:1 en oscuro y 5,5:1 en claro (texto sobre fondos planos; el texto de la portada va sobre foto con capa oscura y no se puede medir automáticamente) ✔. Movimiento reducido emulado sin errores ✔ |
| Objetivos táctiles | Todos los enlaces y botones de más de 24 px; solo los radios/casillas nativos del formulario son menores (exentos) ✔ |

## 5. SEO técnico
- canonical en cada página indexable ☑ · robots.txt ☑ · sitemap.xml (6 páginas públicas) ☑ · datos estructurados
  `TravelAgency` en la portada ☑ (probar en search.google.com/test/rich-results ☐) · 404.html ☑ · gracias.html con
  `noindex` ☑

Las URL usan `https://senderossanjose.bo/`. Al publicar en GitHub Pages hay que reemplazarla (ver `LEEME-LABS-12-15.md`).

## 6. Conclusión (3-5 líneas)
Completar después de medir con Lighthouse y los validadores: qué puntajes se obtuvieron, qué se corrigió y qué queda como mejora
(por ejemplo, convertir las fotos a WebP con `srcset`).
