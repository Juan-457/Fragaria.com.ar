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
