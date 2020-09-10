<Page>
  <Navbar title={`${user.users_login}`} backLink="Back" />
  <Block strong>
    {user.users_fio} 
    <hr>
    {user.users_mobile}
    <hr>
    {user.users_login}
  </Block>
  <Block strong>
    {#each user.objects as object}
      Договор: {object.contract_contract} <br>
      Оформлен на: {object.contract_fio} <br>
      Баланс: {object.contract_account}руб. (данные от {object.contract_timeaccount})<br>
      Абонентская плата: {object.contract_fee} руб./мес.<br>
      Адрес: {object.contract_address}<br>
      email: {object.contract_email}<br>
      Мобильный телефон: {object.contract_mobile}<br>
      Последнее СМС уведомление: {object.contract_timesms}<br>
      Пультовой: {object.users_Obj_code}<br>
      Действующий договор: {object.contract_activ}<br>
      <hr>
    {/each}
  </Block>
</Page>
<script>
  import { Page, Navbar, Block, List, ListItem } from 'framework7-svelte';
import Fab from 'framework7-svelte/components/fab.svelte';

  export let f7route;

  const user = f7route.context.user;
</script>
