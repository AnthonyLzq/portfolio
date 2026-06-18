# Portfolio improvements

## Estado actual

- El sitio compila correctamente.
- `astro check` no reporta errores, warnings ni hints.
- `pnpm run lint` esta configurado y pasa correctamente.
- Lighthouse en la home reporta 100/100 en Accessibility, Best Practices, SEO y Agentic Browsing.
- Las oportunidades principales no son de estructura base, sino de conversion, confiabilidad, SEO social y mantenimiento.

## Prioridad alta

1. Corregir links rotos o inestables.
   - `https://thesis2.anthonylzq.dev` puede tardar en resolver mientras termina la configuracion DNS.
   - `https://scr.anthonylzq.dev` no resuelve DNS.
   - `https://st.anthonylzq.dev` tiene certificado SSL expirado.
2. Arreglar la experiencia de Contact.
   - En local ya no intenta pedir el token a una ruta `undefined/...`; ahora avisa si falta `PUBLIC_SERVER_URL`.
   - El formulario todavia deberia mostrar errores inline en lugar de depender de alerts o consola.
   - El token de reCAPTCHA deberia enviarse y validarse realmente en el backend.
3. Unificar SEO y metadata social.
   - `astro.config.mjs` usa `https://anthonylzq.dev`, pero Open Graph/Twitter usan `anthonylz.dev`.
   - `og:url` no incluye protocolo.
   - `PostLayout.astro` no tiene metadata rica por post.
4. Reemplazar imagenes externas y placeholders.
   - Evitar hotlinks a GitHub raw, Medium, npm, Google Storage y `picsum.photos`.
   - Usar screenshots propios optimizados para proyectos.
5. Mejorar conversion de la home.
   - Agregar CTAs claros: contacto, CV/resume y proyectos destacados.
   - Hacer la propuesta de valor mas especifica.
   - Incluir impacto o logros medibles.

## Prioridad media

1. Mejorar navegacion movil.
   - El menu hamburguesa funciona, pero el control se expone como texto, no como boton semantico.
2. Mejorar tarjetas de proyectos.
   - Agregar problema, rol, impacto, estado del proyecto y links diferenciados a demo/repositorio.
3. Actualizar README.
   - Actualmente conserva contenido del starter kit de Astro.
4. Corregir warnings del build.
   - Resuelto: `client:only` ahora usa `client:only="react"`.
   - Resuelto: el bloque markdown `docker-compose` ahora usa `yaml` para Shiki.
5. Formalizar scripts de calidad.
   - Resuelto: se agregaron scripts `lint` y `check`.
   - Resuelto: ESLint fue migrado a flat config y corre sin errores.

## Paquetes

Si, conviene actualizar dependencias. Esta fase ya actualizo la mayoria de paquetes relevantes:

- Astro: `4.14.2` -> `6.4.8`.
- React: `18.3.1` -> `19.2.7`.
- `@astrojs/react`: `3.6.2` -> `5.0.7`.
- `@astrojs/sitemap`: `3.1.6` -> `3.7.3`.
- `astro-seo`: `0.8.4` -> `1.1.0`.
- `@tabler/icons-react`: `3.12.0` -> `3.44.0`.
- `react-vertical-timeline-component`: `3.6.0` -> `4.0.0`.
- `@typescript-eslint/*`: `6.15.0` -> `8.61.1`.
- ESLint: `8.56.0` -> `9.39.4`.
- `@eslint/js`: `9.39.4`.
- `eslint-config-standard-with-typescript` fue eliminado por estar deprecated.
- `eslint-config-prettier`: `9.1.0` -> `10.1.8`.
- `eslint-plugin-astro`: `0.31.0` -> `1.7.0`.
- `eslint-plugin-import`: `2.29.1` -> `2.32.0`.
- `eslint-plugin-jsx-a11y`: `6.8.0` -> `6.10.2`.
- `eslint-plugin-n`: `16.5.0` -> `18.1.0`.
- `eslint-plugin-prettier`: `5.1.2` -> `5.5.6`.
- `eslint-plugin-promise`: `6.1.1` -> `7.3.0`.
- `prettier`: `3.1.1` -> `3.8.4`.
- `prettier-plugin-astro`: `0.12.2` -> `0.14.1`.
- TypeScript fue agregado explicitamente en `5.9.3`.
- `react-recaptcha-x` fue removido porque no declara soporte para React 19.

Updates pendientes:

- ESLint `9.39.4` -> `10.5.0`.
- `@eslint/js` `9.39.4` -> `10.0.1`.
- TypeScript `5.9.3` -> `6.0.3`.

Recomendacion: dejar ESLint 10 y TypeScript 6 para una fase posterior, cuando los plugins del ecosistema declaren compatibilidad completa.
