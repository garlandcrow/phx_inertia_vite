<script lang="ts">
  import { inertia, page } from '@inertiajs/inertia-svelte'
  import Icon from '../../components/Icon.svelte'

  const links = [
    { href: '/datastore', name: 'Datastore', iconName: 'disk' },
    { href: '/strains', name: 'Strains', iconName: 'strain' },
    { href: '/pipelines', name: 'Pipelines', iconName: 'pipeline' },
    { href: '/jobs', name: 'Jobs', iconName: 'job' },
  ]

  function onReportBug() {
    alert('report bug')
  }

  function onContactUs() {
    alert('contact us')
  }
</script>

<section class="grid gap-4 h-full bg-gray-900 text-white">
  <header class="flex items-center justify-center">
    <img src="/icons/genome-miner-ui-logo.svg" alt="logo" class="p-6" />
  </header>

  <main class="flex flex-col items-center flex-grow">
    <ul class="w-full flex flex-col justify-center">
      {#each links as { href, name, iconName }}
        <a use:inertia {href}>
          {#if $page.url.startsWith(href)}
            <li class="active py-4 pl-5 flex gap-2 items-center">
              <Icon name={iconName} />
              <div class="">{name}</div>
            </li>
          {:else}
            <li
              class="py-4 pl-6 hover:pl-5 flex gap-2 items-center hover:border-white hover:border-l-4 hover:bg-gray-800"
            >
              <Icon name={iconName} />
              {name}
            </li>
          {/if}
        </a>
      {/each}
    </ul>
  </main>

  <footer class="flex flex-col items-center pb-6">
    <h3
      class="w-full pl-6 pb-4 uppercase text-gray-400 text-xs font-bold tracking-normal text-left"
    >
      Support
    </h3>
    <ul class="w-full flex flex-col gap-y-4 items-center text-xs">
      <li class="flex gap-2 items-center cursor-pointer" on:click={onReportBug}>
        <Icon name="bug" size={18} /> Report Bug
      </li>
      <li class="flex gap-2 items-center cursor-pointer" on:click={onContactUs}>
        <Icon name="mail" size={14} /> Contact Us
      </li>
    </ul>
  </footer>
</section>

<style lang="postcss">
  section {
    distplay: grid;
    grid-template-rows: 4rem 1fr min-content;
    grid-template-areas:
      'header'
      'main'
      'footer';
  }
  section > *:not(:last-child) {
    @apply border-b border-gray-600;
  }
  header {
    grid-area: header;
  }
  main {
    grid-area: main;
  }
  footer {
    grid-area: footer;
  }

  li.active {
    @apply border-primary border-l-4 bg-primary/20;
  }
</style>
