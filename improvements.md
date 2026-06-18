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
   - `https://st.anthonylzq.dev` tiene certificado SSL expirado.
2. Arreglar la experiencia de Contact.
   - En local ya no intenta pedir el token a una ruta `undefined/...`; ahora avisa si falta `PUBLIC_SERVER_URL`.
   - Resuelto: el formulario muestra errores y estado de envio inline.
   - Resuelto: el frontend envia el token de reCAPTCHA en el payload.
   - Pendiente: validar realmente el token de reCAPTCHA en el backend.
3. Unificar SEO y metadata social.
   - Resuelto: `Layout.astro` y `PostLayout.astro` usan `https://anthonylzq.dev` de forma consistente.
   - Resuelto: `og:url` ahora usa URLs canonicas absolutas.
   - Resuelto: `PostLayout.astro` genera metadata de articulo para posts.
4. Reemplazar imagenes externas y placeholders.
   - Resuelto: se quitaron placeholders `picsum.photos` de proyectos.
   - Pendiente: evitar hotlinks a GitHub raw, Medium, npm y Google Storage.
   - Pendiente: usar screenshots propios optimizados para proyectos.
5. Mejorar conversion de la home.
   - Resuelto: la home tiene CTAs claros a proyectos, contacto y blog.
   - Resuelto: la propuesta de valor ahora es mas especifica.
   - Pendiente: incluir impacto o logros medibles cuando haya metricas reales.

## Prioridad media

1. Mejorar navegacion movil.
   - Resuelto: el menu hamburguesa usa un `button` semantico con `aria-expanded` y `aria-controls`.
2. Mejorar tarjetas de proyectos.
   - Resuelto: las tarjetas ahora muestran rol, estado, highlights y acciones diferenciadas.
   - Pendiente: agregar impacto medible cuando existan metricas reales.
3. Actualizar README.
   - Resuelto: el README ahora documenta stack, comandos, env vars y estructura del portfolio.
4. Corregir warnings del build.
   - Resuelto: `client:only` ahora usa `client:only="react"`.
   - Resuelto: el bloque markdown `docker-compose` ahora usa `yaml` para Shiki.
5. Formalizar scripts de calidad.
   - Resuelto: se agregaron scripts `lint` y `check`.
   - Resuelto: ESLint fue migrado a flat config y corre sin errores.
6. Tipar y validar explicitamente el frontmatter de posts.
   - Resuelto: `src/schemas/postFrontmatter.ts` declara `postFrontmatterSchema` con Zod.
   - Resuelto: `title`, `description`, `pubDate`, `tags`, `author` e `image` ya estan tipados.
   - Resuelto: el layout valida el shape del frontmatter con Zod y falla si falta metadata requerida.

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
