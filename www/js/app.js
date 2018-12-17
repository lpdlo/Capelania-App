var $ = Dom7;
var JS = new Index();

// Init App
var app = new Framework7({
  name: 'App',
  id: 'br.mackenzie.lfs.App',
  root: '#app',
  theme: 'md',
  touch: {
    materialRipple: false
  },
  materialPreloaderHtml: true,  // NOT sure about this setting
  view: {
    pushState: true
  },

  routes: [
    {
      path: '/about/',
      url: './pages/about.html',
    }, {
      path: '/menu/',
      componentUrl: './pages/menu.html'
    }, {
      path: '/grupo/',
      componentUrl: './pages/grupo.html'
    }
  ]
});

var mainView = app.views.create('.view-main');
