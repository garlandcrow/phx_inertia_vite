<script lang="ts">
  import { page } from '@inertiajs/inertia-svelte'
  import Sidebar from './Sidebar.svelte'
  import Navbar from './Navbar.svelte'
  // import FlashMessage from '../../components/FlashMessage.svelte'
  // import { capitalizeFirstLetter } from '../../helpers'
  // import { gcloudToken } from '../../store'

  $: console.debug('$page', $page)

  // $: breadcrumbs = $page.url
  //   .split('/')
  //   .filter((u) => u.length > 0)
  //   .map(capitalizeFirstLetter)

  let breadcrumbs = ['asdf']

  // $: $gcloudToken = 'asdf' // $page.props.gcloud_token
</script>

<main class="page-grid">
  <section class="sidebar">
    <Sidebar />
  </section>

  <section class="navbar shadow-lg">
    <Navbar />
  </section>

  <section class="content overflow-scroll">
    <div class="bg-primary/20 text-gray-800 p-4 shadow-sm">{breadcrumbs.join(' > ')}</div>
    <!-- <div class="m-6"><FlashMessage /></div> -->
    <div class="content-slot">
      <slot />
    </div>
  </section>
</main>

<style lang="postcss">
  .page-grid {
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 4rem 1fr;
    grid-template-columns: 16rem 1fr;
    grid-template-areas:
      'sidebar navbar'
      'sidebar content';
  }

  .sidebar {
    grid-area: sidebar;
  }
  .navbar {
    grid-area: navbar;
  }
  .content {
    grid-area: content;
    @apply bg-gray-100;
  }
  .content-slot {
    @apply m-6 p-6 bg-white rounded-md shadow-md;
  }
</style>
