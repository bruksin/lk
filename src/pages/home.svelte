<script>
  import {
    Page,
    Navbar,
    NavTitle,
    NavTitleLarge,
    Link,
    Toolbar,
    Block,
    BlockTitle,
    Row,
    Col,
    List,
    ListItem,
    Button
  } from 'framework7-svelte';

  import { myuserdata } from '../js/store.js';

  function logout() {
    localStorage.setItem('userdata', JSON.stringify({result: false}));
    myuserdata.set(JSON.parse(localStorage.getItem('userdata')));
  }

</script>

<Page name="home">
  <!-- Top Navbar -->
  <Navbar large>
    <NavTitle>etc-ohrana</NavTitle>
    <NavTitleLarge>etc-ohrana</NavTitleLarge>
  </Navbar>
  <!-- Toolbar -->
  <Toolbar bottom>
    <Link>Left Link</Link>
    <Link>Right Link</Link>
  </Toolbar>
  <!-- Page content -->
  <Block strong>
    <p>Мобильное приложение для клиентов ЕТЦ</p>

    {#if $myuserdata.result}
    <BlockTitle>Вы авторизовались</BlockTitle>
    {:else}
    <BlockTitle>Необходима авторизация</BlockTitle>
    {/if}
    <Block strong>
    {#if $myuserdata.result}
    <List>
      <ListItem
        title="Логи объектов"
        link="/objectform/"
      />
      <ListItem
        title="Профиль"
        link="/user/{$myuserdata.users_id}/{$myuserdata.users_token}/"
      />
    </List> 
      <Row>
        <Col width="50">
          <Button fill raised on:click="{logout}">Выход</Button>
        </Col>
      </Row>
    {:else}
      <Row>
        <Col width="50">
          <Button fill raised loginScreenOpen="#my-login-screen">Войти</Button>
        </Col>
      </Row>
    {/if}
    </Block>
  </Block>

 
</Page>




