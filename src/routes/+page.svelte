<script>
  import { _ } from 'svelte-i18n';

  import PageTitle from '../components/layout/PageTitle.svelte';
</script>

<PageTitle key={'home'} />

<p>{$_('home_greetings_message')}</p>
