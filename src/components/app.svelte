<App params={ f7params } >

  <!-- Your main view, should have "view-main" class -->
  <View main class="safe-areas" url="/" />

  <LoginScreen id="my-login-screen">
    <View>
      <Page loginScreen>
        <LoginScreenTitle>Авторизация</LoginScreenTitle>
        <List form>
          <ListInput
            type="text"
            name="username"
            placeholder="Ваш логин (email)"
            value={username}
            onInput={(e) => username = e.target.value}
          />
          <ListInput
            type="password"
            name="password"
            placeholder="Ваш пароль"
            value={password}
            onInput={(e) => password = e.target.value}
          />
        </List>
        <List>
          <ListButton title="Войти" onClick={() => auth_api()} />
        </List>
        <BlockFooter>
          Введите логин и пароль от личного кабинета для авторизации<br />
          <p><a class="link login-screen-close" href="#/">Отмена</a></p>
        </BlockFooter>
      </Page>
    </View>
  </LoginScreen>

</App>
<script>
  import { onMount } from 'svelte';
  import { Device }  from 'framework7/framework7-lite.esm.bundle.js';
  import {
    f7,
    f7ready,
    App,
    View,
    Block,
    BlockTitle,
    LoginScreen,
    LoginScreenTitle,
    Page, 
    List,
    ListItem,
    ListInput,
    ListButton,
    BlockFooter
  } from 'framework7-svelte';
  import cordovaApp from '../js/cordova-app.js';
  import routes from '../js/routes.js';

  import {Question} from '../js/question.js';
  import { myuserdata } from '../js/store.js';

  // Framework7 Parameters
  let f7params = {
    id: 'io.framework7.myapp', // App bundle ID
    name: 'etc-ohrana', // App name
    theme: 'auto', // Automatic theme detection



    // App routes
    routes: routes,


    // Input settings
    input: {
      scrollIntoViewOnFocus: Device.cordova && !Device.electron,
      scrollIntoViewCentered: Device.cordova && !Device.electron,
    },
    // Cordova Statusbar settings
    statusbar: {
      iosOverlaysWebView: true,
      androidOverlaysWebView: false,
    },
  };

  // Login screen demo data
  let username = '';
  let password = '';

  function auth_api() {
    let question2 = {
        user: username,
        pass: password
    } 
    Question.auth(question2).then( data => {
        addToLocalStorage(data);
    })
    f7.loginScreen.close();
  }

  function addToLocalStorage(userdata) {
    localStorage.setItem('userdata', JSON.stringify(userdata));
    myuserdata.set(JSON.parse(JSON.stringify(userdata)));
  }

  onMount(() => {
    f7ready(() => {
      // Init cordova APIs (see cordova-app.js)
      if (Device.cordova) {
        cordovaApp.init(f7);
      }
      // Call F7 APIs here
    });
  })
</script>