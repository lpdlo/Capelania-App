var $ = Dom7;


// Init App
var app = new Framework7({
  name: 'App',
  id: 'br.mackenzie.lfs.App',
  root: '#app',
  theme: 'auto',


  routes: [
    {
      path: '/about/',
      url: './pages/about.html',
    }, {
      path: '/menu/',
      componentUrl: './pages/menu.html'
    }, {
      path: '/abc/',
      componentUrl: './pages/abc.html'
    }, {
      path: '/abu/',
      componentUrl: './pages/abu.html'
    }, {
      path: '/bola/',
      componentUrl: './pages/bola.html'
    }, {
      path: '/ge/',
      componentUrl: './pages/ge.html'
    }, {
      path: '/pock/',
      componentUrl: './pages/pock.html'
    }, {
      path: '/add/',
      url: 'https://www.google.com.br/search?q=teg+para&oq=teg+para+&aqs=chrome..69i57.3428j0j7&sourceid=chrome&ie=UTF-8',
    }
  ]
});

var mainView = app.views.create('.view-main');
