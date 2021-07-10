<script>
  import { page } from '@inertiajs/inertia-svelte'

  $: console.debug('$page', $page)
</script>

<main
  class="h-screen bg-blue-100 grid grid-cols-1"
  style="grid-template-rows: min-content minmax(0, 1fr);"
>
  <h1 class="p-2 bg-blue-300 text-center">From Layout</h1>
  <section class="p-2">
    <slot />
  </section>
</main>
