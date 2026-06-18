/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_ORIGIN: string
  readonly PUBLIC_SERVER_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
