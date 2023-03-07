import { defineConfig } from 'astro/config'
import { remarkReadingTime } from './src/plugins/remarkReadingTime.mjs'
import react from '@astrojs/react'

// https://astro.build/config
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://anthonylzq.dev',
  markdown: {
    remarkPlugins: [remarkReadingTime],
    extendDefaultPlugins: true
  },
  integrations: [react(), sitemap()]
})
