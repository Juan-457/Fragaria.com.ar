# Fragaria.com.ar

Sitio web estatico corporativo de Fragaria S.A., orientado a presentar empresa, valores, lineas de trabajo, Instagram y contacto comercial.

## Contenido

- `index.html`: landing principal.
- `empresa.html`: pagina institucional de empresa.
- `catalogo.html`: catalogo local con filtros y enlaces a fichas internas.
- `productos/`: fichas HTML locales de cada producto.
- `docs/`: hojas de seguridad descargadas desde las fichas originales.
- `img/`: imagenes del catalogo y favicons.
- `hero.mp4`: video del hero.
- `fragaruua.webp`: logo principal.
- `CNAME`: dominio personalizado.

## Secciones principales

- hero institucional
- empresa
- valores
- compromiso con la sustentabilidad
- feed / CTA de Instagram
- catalogo de productos
- fichas de producto locales
- contacto

## Stack

- HTML estatico
- Tailwind via CDN
- Google Fonts
- widget externo de RSS/App para Instagram

No requiere build.

## Medición

Las páginas públicas cargan el contenedor `GTM-WN74DD6P`, que administra el
GA4 anterior `G-XBJRWPZS5Z` y el píxel de Meta. El archivo compartido
`tracking.js` conserva el GA4 `G-ZKQ3P02MDB` que alimenta el reporte mensual
y el evento `whatsapp_click_contact`, dirigido explícitamente a esa propiedad.
La delegación de clics cubre también los enlaces creados por el mapa de Presencia.

No agregar `G-ZKQ3P02MDB` al contenedor mientras se configure desde
`tracking.js`: cada navegación debe emitir una sola vista por propiedad.
Las páginas nuevas deben incluir el mismo bloque GTM, el noscript y una ruta
relativa correcta a `tracking.js`. Las páginas identificadas como preview quedan
fuera de la medición productiva. Un clic a WhatsApp no equivale a un lead.

## Verlo localmente

```bash
cd Fragaria.com.ar
python3 -m http.server 8000
```

Abrir `http://localhost:8000`.

## Deploy

Publicacion estatica simple. Mantener:

- `CNAME`
- assets del hero y branding
- embed de Instagram si sigue en uso

## Notas

- Las cards de `catalogo.html` apuntan a `productos/<slug>/`.
- Cada ficha conserva la informacion migrada desde la pagina original y enlaza los documentos guardados en `docs/`.
