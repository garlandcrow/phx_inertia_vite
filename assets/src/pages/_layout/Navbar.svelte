<script lang="ts">
  import Icon from '../../components/Icon.svelte'

  let username = 'Mogura'
  let profileImg = '/images/user.png'
  let hasNotifications = true
</script>

<nav class="bg-white h-full flex items-center justify-between px-4">
  <input type="text" placeholder="Search..." class="bg-gray-100 flex-grow-0 !w-[300px]" />
  <section class="flex items-center gap-2">
    <Icon name={hasNotifications ? 'hasNotifications' : 'zeroNotifications'} />
    <img src={profileImg} alt="User" />
    <div class="">{username}</div>
    <Icon name="hamburger" />
  </section>
</nav>

<style lang="postcss">
  img {
    @apply h-8 rounded-full;
  }
</style>
