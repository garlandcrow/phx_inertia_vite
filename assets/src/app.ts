import './hmr'
import '../css/app.css'

// import 'svelte'
// import axios from 'axios'
// import Inertia from '@inertiajs/inertia-svelte'
import { InertiaApp } from '@inertiajs/inertia-svelte'

// import Layout from '@pages/_layout/_layout.svelte'

// per instructions https://github.com/devato/inertia_phoenix
// axios.defaults.xsrfHeaderName = 'x-csrf-token'

// Inertia.createInertiaApp({
//   resolve: (name) => import(`./pages/${name}.svelte`),
//   setup({ el, App, props }) {
//     new App({ target: el, props })
//   },
// })

const app = document.getElementById('app')

if (app) {
  new InertiaApp({
    target: app,
    props: {
      initialPage: JSON.parse(app.dataset.page),
      resolveComponent: async (name) => {
        let page = await import(`./pages/${name}.svelte`)
        // page.layout = page.layout === undefined ? Layout : page.layout
        return page
      },
    },
  })
}
