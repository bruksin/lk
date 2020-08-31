
import HomePage from '../pages/home.svelte';
import RequestAndLoad from '../pages/user.svelte';
import NotFoundPage from '../pages/404.svelte';
import ObjectLog from '../pages/objectlog.svelte';

import {Question} from './question';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/objectlog/:pultId/',
    component: ObjectLog,
  }, 
  {
    path: '/user/:userId/:sessionId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;
      var sessionId = routeTo.params.sessionId;

      const question = {
        userid: userId,
        sessionid: sessionId
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
