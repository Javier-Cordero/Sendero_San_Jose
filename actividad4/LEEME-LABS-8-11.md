# Senderos San José — Labs 8, 9, 10 y 11 (Diseño Web I, UPDS)

## Qué contiene
| Carpeta / archivo | Lab | Qué es |
|---|---|---|
| `css/estilos.css` | 8, 9, 11 | Hoja del sitio propio: secciones 1-15 (Labs 5-7) + 16-20 (Grid), 21-25 (tokens, mobile-first, oscuro, impresión) y 26-28 (movimiento) |
| `index.html`, `galeria.html`, `contacto.html`, `tours.html` | 8, 9 | Cambios de HTML: `section.hero` + `div.hero-texto`, `div.galeria`, `div.form-columnas`, `aria-labelledby` corregido en la tabla |
| `version-bootstrap/` | 10, 11 | Portada con Bootstrap 5.3.8 (local en `vendor/`), `css/personalizado.css`, `js/tema.js`, `js/reserva.js` |
| `evidencias/` | todos | Capturas (390/768/1280 px, claro y oscuro), capturas de Bootstrap, y los resultados de las pruebas automáticas |

## Cómo probarlo
Abre `index.html` con Live Server (o `python -m http.server`). La versión Bootstrap está en `version-bootstrap/index.html`.

## Resultados de las pruebas (resumen)
- Validador Nu HTML Checker (el mismo motor de validator.w3.org): **0 errores** en las 6 páginas del sitio y en `version-bootstrap/index.html`.
- Sin desbordes horizontales en las 6 páginas a 390, 768 y 1280 px, en claro y en oscuro.
- Cero colores escritos a mano fuera de `:root`, del bloque oscuro y del bloque de impresión.
- Contraste mínimo medido en oscuro: 4.5:1 (enlace del pie al pasar el puntero); el resto, 7.6:1 o más.
- Detalle de cada prueba: `evidencias/pruebas/resultados.json`, `contraste.json`, `peso.json`, `bug-minwidth.json`.

## Qué falta hacer a mano (lo pide la guía y no se puede automatizar)
- Capturas reales de DevTools: inspector de Grid del `body`, `.galeria` y `.hero`; panel Red; menú ☰ abierto en 390 px.
- Validar en https://validator.w3.org/ y guardar la captura.
- Comprobar que el mapa de `contacto.html` carga con internet (aquí no hay).
- Nombres: el pie dice «Darcko Alejandro Roca»; cámbialo si corresponde.
