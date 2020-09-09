<Page>
  <Navbar title="Лог объекта" backLink="Back" />
  <Block strong>
    Объект 3289
  </Block>
  <Block strong>
    {#each events.events as event}
      {event.server_datetime}<br>
      {event.view_text}<br>
      Тип: {event.type}/{event.subtype}; Линия: {event.line}; Раздел:  {event.partition}; Номер зоны: {event.zone}; Код события: {event.event_code}; АОН: {event.aon}
      <hr>
    {/each}
  </Block>
</Page>
<script>
  import { Page, Navbar, Block, List, ListItem } from 'framework7-svelte';
  export let f7route;
  const events = f7route.context.events;
</script>
