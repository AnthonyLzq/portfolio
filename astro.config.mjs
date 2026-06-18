import { defineConfig } from 'astro/config'
import { remarkReadingTime } from './src/plugins/remarkReadingTime.mjs'
import { unified } from '@astrojs/markdown-remark'
import react from '@astrojs/react'

// https://astro.build/config
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://anthonylzq.dev',
  markdown: {
    processor: unified({
      remarkPlugins: [remarkReadingTime]
    })
  },
  integrations: [react(), sitemap()]
})
