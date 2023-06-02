<script>
  import { page } from '$app/stores';
  import { faHome, faBug, faFish, faBone } from '@fortawesome/free-solid-svg-icons';
  import Icon from 'svelte-awesome';
  import { _ } from 'svelte-i18n';

  $: isActive = (pathname) => $page.url.pathname === pathname;

  const links = [
    { name: 'home', href: '/', icon: faHome },
    { name: 'bugs', href: '/bugs', icon: faBug },
    { name: 'fishes', href: '/fishes', icon: faFish },
    { name: 'fossils', href: '/fossils', icon: faBone }
  ];
</script>

<nav
  class="group duration-1000 transition-maxw fixed bottom-0 z-10 flex flex-row md:flex-col md:max-w-[60px] md:justify-start w-screen md:hover:w-max md:hover:max-w-screen-md md:w-[60px] md:h-screen md:left-0 height-60 navbar bg-secondary justify-evenly lg:relative lg:w-max lg:max-w-screen-lg filter grayscale-20 overflow-hidden"
  data-sveltekit-preload-data
>
  {#each links as { name, href, icon }}
    <a
      class="transition-link duration-500 flex gap-3 items-center h-[60px] text-tertiary filter grayscale-20 opacity-60 hover:grayscale-0 hover:opacity-100"
      {href}
      class:active={isActive(href)}
    >
      <i class="w-[60px] h-[60px]">
        <Icon data={icon} scale="1" class="h-[30px] w-[30px] m-[15px]" />
      </i>
      <span
        class="hidden ml-2 mr-4 text-2xl font-bold whitespace-nowrap md:group-hover:block lg:block"
        >{$_(name)}</span
      >
    </a>
  {/each}
</nav>

<style lang="scss">
  .active {
    @apply text-secondary bg-tertiary;
  }
</style>
