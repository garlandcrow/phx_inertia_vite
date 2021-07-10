<script>
  import { count } from './stores'

  export let id: string
</script>

<button
  {id}
  on:click={() => ($count += 1)}
  data-testid={id}
  class="rounded-full text-blue-600 py-4 px-8 w-48 hover:bg-blue-200"
>
  Clicks: {$count}
</button>

<style>
  button {
    background: rgba(var(--svelte-rgb), 0.05);
  }

  button:active {
    background: rgba(var(--svelte-rgb), 0.15);
  }
</style>
