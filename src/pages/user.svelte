<Page>
  <Navbar title={`${user.users_login}`} backLink="Back" />
  <Block strong>
    {user.users_fio} 
    <hr>
    {user.users_mobile}
    <hr>
    {user.users_cloud_login}
    <hr>
    {user.users_login}
  </Block>
</Page>
<script>
  import { Page, Navbar, Block, List, ListItem } from 'framework7-svelte';

  export let f7route;

  const user = f7route.context.user;
</script>
