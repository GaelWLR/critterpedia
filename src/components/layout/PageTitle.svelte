<script>
  import { _ } from 'svelte-i18n';

  export let key = 'Page title';
</script>

<h1 class="mb-2 text-5xl leading-normal">{$_(key)}</h1>
