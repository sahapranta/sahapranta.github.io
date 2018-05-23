importScripts('serviceworker-cache-polyfill.js');

self.addEventListener('install', function(event) {
event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/index.html?homescreen=1',
        '/?homescreen=1',
        '/css/bootstrap.min.css',
        '/css/font-awesome.min.css',
        '/css/style.css',
        '/js/bootstrap.min.js',
        '/js/jquery-2.1.4.min.js',
        '/js/theme.min.js',
        '/js/gmaps.min.js',
        '/js/jquery.form.js',
        '/fonts/FontAwesome.otf',
        '/img/logo.png',
        '/img/footer-logo.png',
        '/img/fav-icon.png',
        '/img/Pattern_Light.png',
        '/img/logo/60x60.png',
        '/img/logo/72x72.png',
        '/img/logo/128x128.png',
        '/img/logo/192x192.png'
      ]);
    })
 );
});

self.addEventListener('fetch', function(event) {

});
