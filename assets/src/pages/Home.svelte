<script>
  import Counter from '../components/Counter.svelte'

  export let message: string
</script>

<div class="flex flex-col gap-2 items-center">
  <h1 class="">Component: Home</h1>
  <p class="">Message from inertia_phoenix controller: {message}</p>

  <Counter id="0" />
</div>
