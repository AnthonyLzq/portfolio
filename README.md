# AnthonyLzq Portfolio

Personal portfolio and technical blog built with Astro, React and TypeScript.

## Stack

- Astro 6
- React 19
- TypeScript
- ESLint flat config
- Prettier
- pnpm

## Commands

| Command        | Description                          |
| :------------- | :----------------------------------- |
| `pnpm install` | Install dependencies                 |
| `pnpm dev`     | Start the local development server   |
| `pnpm lint`    | Run ESLint                           |
| `pnpm check`   | Run Astro diagnostics                |
| `pnpm build`   | Build the production site            |
| `pnpm preview` | Preview the production build locally |

## Environment variables

The contact form expects these public environment variables:

```sh
PUBLIC_ORIGIN=
PUBLIC_SERVER_URL=
```

Without `PUBLIC_SERVER_URL`, the contact form renders but cannot request a contact token locally.

## Project structure

```text
src/
  components/
  hooks/
  layouts/
  pages/
  plugins/
  static/
  styles/
  utils/
```
