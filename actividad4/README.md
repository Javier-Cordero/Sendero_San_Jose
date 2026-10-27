# Senderos San José — sitio web

Sitio del operador de turismo **Senderos San José** (San José de Chiquitos, Santa Cruz, Bolivia), desarrollado en la
materia Diseño Web I de la UPDS.

- **Sitio publicado:** https://TU-USUARIO.github.io/senderos-san-jose/   ← reemplaza TU-USUARIO cuando publiques
- **Tecnologías:** HTML5 semántico, CSS propio (variables, Flexbox, Grid, mobile-first, modo oscuro) y una versión
  alternativa de la portada con Bootstrap 5.3.8 (`version-bootstrap/`).
- **Decisión técnica:** el sitio principal usa CSS propio (más liviano y con control total de los tokens de color);
  Bootstrap se usó solo en un prototipo de la portada para comparar peso y productividad.
- **Calidad:** ver `INFORME_CALIDAD.md` (Lighthouse móvil, WCAG 2.2 AA, validación W3C, SEO técnico).

## Estructura
| Carpeta / archivo | Contenido |
|---|---|
| `index.html`, `tours.html`, `galeria.html`, `nosotros.html`, `contacto.html` | Páginas públicas |
| `legal/politicas.html`, `gracias.html`, `404.html` | Páginas de apoyo |
| `css/estilos.css` | Hoja de estilos del sitio (secciones 1-33) |
| `img/`, `video/` | Imágenes y video con subtítulos |
| `version-bootstrap/` | Prototipo de la portada con Bootstrap |
| `robots.txt`, `sitemap.xml` | SEO técnico |
| `WIREFRAMES.md` | Mapa del sitio y wireframes de «Nosotros» |
| `proyecto/` | Documentos del Proyecto Socioformativo (Lab 15) |

## Cómo verlo en tu computadora
Abre la carpeta en VS Code y usa Live Server sobre `index.html` (o `python -m http.server`).

## Cómo publicarlo (GitHub Pages)
Los pasos están en `LEEME-LABS-12-15.md`, sección «Lab 14».

## Créditos
Ilustraciones y fotos: material del curso. Desarrollo: Darcko Alejandro Roca — Diseño Web I, UPDS, 2026.
