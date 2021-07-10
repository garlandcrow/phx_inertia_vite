import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  optimizeDeps: {
    include: ['@inertiajs/inertia', '@inertiajs/inertia-svelte'],
  },
  build: {
    manifest: true,
    rollupOptions: {
      // overwrite default .html entry
      input: 'src/app.ts',
    },
  },
})
