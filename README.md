# Fragaria.com.ar

Sitio web estatico corporativo de Fragaria S.A., orientado a presentar empresa, valores, lineas de trabajo, Instagram y contacto comercial.

## Contenido

- `index.html`: landing principal.
- `hero.mp4`: video del hero.
- `fragaruua.webp`: logo principal.
- `CNAME`: dominio personalizado.

## Secciones principales

- hero institucional
- empresa
- valores
- compromiso con la sustentabilidad
- feed / CTA de Instagram
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

- Hoy el repositorio es una landing unica. Si se suman productos o fichas tecnicas, conviene organizar una estructura de paginas adicionales.
