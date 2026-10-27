# Wireframes — Página "Nosotros" (Senderos San José)

## 1. Arquitectura de información (mapa del sitio)
```
Inicio ─┬─ Tours ──── (anclas por tour) ─── Tarifas
        ├─ Galería
        ├─ Nosotros   ← NUEVA (Lab 12)
        ├─ Contacto ─── Formulario de reserva (#reserva) ─── Gracias
        └─ (pie) Políticas de reserva
(extra) version-bootstrap/ → prototipo de la portada con Bootstrap
(extra) 404.html           → página de "no encontrado"
```

## 2. Wireframe de baja fidelidad — celular (390 px), primero
```
┌───────────────────────────┐
│ Senderos San José         │  cabecera (no fija)
│ Inicio Tours Galería      │
│ Nosotros Contacto         │
├───────────────────────────┤
│ NOSOTROS (h1)             │
│ Texto de entrada (2-3     │
│ líneas: quiénes somos)    │
│                           │
│ Nuestra historia (h2)     │
│ ┃ ● 2015 …                │  línea de tiempo
│ ┃ ● 2018 …                │
│ ┃ ● 2021 …                │
│                           │
│ El equipo (h2)            │
│ ┌───────────────────────┐ │
│ │  (RT)  Rosa Tomichá   │ │  tarjeta por persona
│ │  Fundadora y guía…    │ │  (1 columna)
│ └───────────────────────┘ │
│ …                         │
│ Nuestro impacto (h2)      │
│ [ +2.500 viajeros ]       │  cifras apiladas
│ [ 12 talleres     ]       │
│                           │
│ Preguntas frecuentes (h2) │
│ ▸ ¿Necesito experiencia?  │  <details>
│ ▸ ¿Qué debo llevar?       │
│                           │
│ ( Reserva tu tour )       │  botón → contacto.html#reserva
│                   [WA]    │
└───────────────────────────┘
```

## 3. Wireframe — escritorio (1280 px)
```
┌────────────────────────────────────────────────────────────┐
│ Senderos San José            Inicio Tours … Nosotros …     │ fija
├────────────────────────────────────────────────────────────┤
│ NOSOTROS                                                   │
│ Texto de entrada (máx. 65 caracteres por línea)            │
│                                                            │
│ Nuestra historia                                           │
│ ┃ ● 2015 …   (sigue siendo vertical)                       │
│                                                            │
│ El equipo                                                  │
│ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐   4 tarjetas en fila   │
│ │ (RT) │ │ (JS) │ │ (LM) │ │ (AC) │                        │
│ └──────┘ └──────┘ └──────┘ └──────┘                        │
│ Nuestro impacto                                            │
│ [ +2.500 ]   [ 12 ]   [ 8 ]            3 cifras en fila   │
│ Preguntas frecuentes (acordeón a todo el ancho)            │
└────────────────────────────────────────────────────────────┘
```

## 4. Decisiones (justifica cada una)
- Contenido primero: la historia antes que el equipo porque genera confianza.
- Avatares con iniciales: no hay fotos con permiso de uso; se reemplazarán por fotos reales cuando el cliente las autorice.
- Preguntas frecuentes con `<details>`: accesibles con teclado (Enter/Espacio) sin JavaScript.
- Cuadrículas con `auto-fit` + `minmax()`: 1 columna en celular y 3-4 en escritorio sin media queries.
- Cero colores nuevos: todo sale de los tokens del Lab 9, por eso el modo oscuro funciona sin tocar nada.
