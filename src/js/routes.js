
import HomePage from '../pages/home.svelte';
import RequestAndLoad from '../pages/user.svelte';
import NotFoundPage from '../pages/404.svelte';
import ObjectLog from '../pages/objectlog.svelte';
import ObjectForm from '../pages/objectform.svelte';

import {Question} from './question.js';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/objectform/',
    component: ObjectForm,
  },
  {
    path: '/objectlog/:userId/:Token/:pultId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;
      var Token = routeTo.params.Token;
      var pultId = routeTo.params.pultId;

      const question = {
        users_id: userId,
        users_token: Token
      }
      console.log(question);

      Question.objectlog(question, pultId).then( data => {
        var events = data;

        // Hide Preloader
        app.preloader.hide();

          // Resolve route to load page
          resolve(
            {
              component: ObjectLog,
            },
            {
              context: {
                events: events,
              }
            }
          );
      });
    },
  }, 
  {
    path: '/user/:userId/:Token/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;
      var Token = routeTo.params.Token;

      const question = {
        users_id: userId,
        users_token: Token
      }

      Question.create(question).then( data => {
        var user = data;

        // Hide Preloader
        app.preloader.hide();

          // Resolve route to load page
          resolve(
            {
              component: RequestAndLoad,
            },
            {
              context: {
                user: user,
              }
            }
          );
      });
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
