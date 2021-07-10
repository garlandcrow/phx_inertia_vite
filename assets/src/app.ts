import './hmr'
import '../css/app.css'

import 'svelte'
import axios from 'axios'
import { createInertiaApp } from '@inertiajs/inertia-svelte'

import Layout from './pages/_layout/_layout.svelte'

// per instructions https://github.com/devato/inertia_phoenix
axios.defaults.xsrfHeaderName = 'x-csrf-token'

createInertiaApp({
  resolve: async (name) => {
    const page = await import(`./pages/${name}.svelte`)
    if (typeof page.layout === 'undefined') {
      return { ...page, layout: Layout }
    }
    return page
  },
  setup({ el, App, props }) {
    new App({ target: el, props })
  },
})
