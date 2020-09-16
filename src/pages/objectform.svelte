<Page>
  <Navbar title="На главную" backLink="Back" />
  <Block strong>
    Объект <input type="text" bind:value="{objectcode}">
  </Block>
  <List>
    <ListItem
      title="Логи объекта"
      link="/objectlog/{$myuserdata.users_id}/{$myuserdata.users_token}/{objectcode}/"
    />
  </List> 
</Page>
<script>
  import { Page, Navbar, Block,  List, ListItem } from 'framework7-svelte';

  import { myuserdata } from '../js/store.js';

  let objectcode = "1111"
</script>
