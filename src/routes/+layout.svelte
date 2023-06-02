<script>
  import '../css/app.scss';
  import Navbar from '../components/layout/NavBar.svelte';
</script>

<div class="lg:flex lg:flex-row">
  <Navbar class="navbar" />

  <div
    class="ml-0 p-4 md:h-screen md:ml-[60px] lg:ml-0 lg:flex-grow lg:overflow-y-scroll lg:box-border"
  >
    <slot />
  </div>
</div>
