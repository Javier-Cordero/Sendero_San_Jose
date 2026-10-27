# Senderos San José — Labs 12, 13, 14 y 15 (Diseño Web I, UPDS)

## Qué se agregó a la actividad 3
| Lab | Qué es | Archivos |
|---|---|---|
| 12 | Página «Nosotros» (línea de tiempo, equipo, cifras, preguntas frecuentes), menú de 5 enlaces en todo el sitio, CSS secciones 29-33 | `nosotros.html`, `css/estilos.css`, `WIREFRAMES.md`, menú en todas las páginas y en `version-bootstrap/index.html` |
| 13 | Calidad y SEO técnico: canonical, JSON-LD `TravelAgency`, `noindex` en gracias, robots.txt, sitemap.xml, 404, informe | `INFORME_CALIDAD.md`, `robots.txt`, `sitemap.xml`, `404.html`, cabeceras de cada página |
| 14 | Publicación con Git y GitHub Pages | `.gitignore`, `.gitattributes`, `.nojekyll`, `README.md`, `CNAME.ejemplo` |
| 15 | Arranque del Proyecto Socioformativo | carpeta `proyecto/` (brief, plan, checklist, guía de entrevista, kickoff) |

## IMPORTANTE: contenido de ejemplo
Los labs traían el contenido de «Senderos Samaipata». Lo adapté a San José de Chiquitos, pero **el equipo (Rosa Tomichá,
Juan Carlos Surubí, Lucía Masavi, Aurelio Cuéllar), los años de la historia y las cifras (+2.500 viajeros, 12 talleres)
son inventados** para que la página quede completa. Reemplázalos por los datos reales de tu cliente antes de entregar
(el checklist del Lab 15 pide «nada de textos de Senderos Samaipata» y contenido real).

## Lo que debes hacer tú (externo)

### Lab 13 — medir calidad
1. Abre el sitio con Live Server (o `python -m http.server`) en Chrome.
2. DevTools > **Lighthouse** > *Mobile* > Rendimiento, Accesibilidad, Buenas prácticas y SEO > Analizar. Hazlo en
   `index`, `tours`, `nosotros`, `contacto` y `version-bootstrap`, en modo claro y en oscuro (DevTools > Rendering >
   *prefers-color-scheme*). No audites `gracias.html` ni `404.html`: llevan `noindex` a propósito.
3. Anota las cifras en la tabla de `INFORME_CALIDAD.md`.
4. Valida cada página en https://validator.w3.org/ y `css/estilos.css` en https://jigsaw.w3.org/css-validator/.
5. Prueba el JSON-LD de la portada en https://search.google.com/test/rich-results (con el sitio ya publicado).

Si Lighthouse te baja de 90 en algo, dime qué auditoría falla y lo corregimos.

### Lab 14 — publicar en GitHub Pages
```
git config --global user.name "Tu Nombre"
git config --global user.email "tu-correo@ejemplo.com"
git init -b main
git add .
git status
git commit -m "Primera versión del sitio de Senderos San José"
git remote add origin https://github.com/TU-USUARIO/senderos-san-jose.git
git push -u origin main
```
Crea antes el repositorio **público** `senderos-san-jose` en github.com (sin README). Luego: Settings > Pages > Source:
Deploy from a branch > `main` / (root) > Save.

**Segundo commit — poner la URL real.** Las páginas usan `https://senderossanjose.bo/` como dirección de ejemplo. Reemplázala
por `https://TU-USUARIO.github.io/senderos-san-jose/` en: `<link rel="canonical">` de las 6 páginas indexables
(index, tours, galeria, nosotros, contacto, legal/politicas, además de version-bootstrap), `sitemap.xml`, `robots.txt`,
las metas Open Graph y el JSON-LD de `index.html`. En Windows con VS Code: Ctrl+Shift+H (buscar y reemplazar en todos los archivos).
Si tu repositorio se llama distinto, cambia también `<base href="/senderos-san-jose/">` en `404.html`.

Pruebas finales: abrir el sitio en el celular, compartirlo por WhatsApp (¿sale la tarjeta con foto?) y entrar a una dirección
inexistente para ver tu 404 con estilos.

### Lab 15 — Proyecto Socioformativo
Completa en `proyecto/`: la entrevista con el cliente (`ENTREVISTA-guia.md`), los campos «POR COMPLETAR» de `BRIEF.md`,
usuarios de GitHub en `PLAN.md` y la autorización escrita del cliente para textos y fotos.

## Qué no incluí
- `practica-auditoria.html` (Lab 13, parte A): es una página rota a propósito para practicar con Lighthouse; no forma parte
  del sitio y fallaría la validación. Si tu docente la pide, está en el zip del lab 13.
- Imágenes en WebP con `srcset`: este sitio trae solo JPG de un tamaño. Funciona bien, pero la portada es de 708 px y
  Lighthouse puede marcar «imagen de baja resolución» en Buenas prácticas en pantallas grandes. Si pasa, conviene
  reemplazarla por una foto más grande.

## Pruebas que ya pasaron (hechas por mí, no son las herramientas oficiales)
- Sin desbordes horizontales en las 8 páginas a 320, 390, 768 y 1280 px, en claro y oscuro.
- Contraste de texto sobre fondos planos: mínimo 5,5:1 (claro) y 7,3:1 (oscuro).
- 0 enlaces o anclas rotos; menú de 5 enlaces con `aria-current` correcto en todas las páginas.
- FAQ de «Nosotros» se abre y cierra con Enter y Espacio.
