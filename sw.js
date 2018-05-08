importScripts('serviceworker-cache-polyfill.js');

self.addEventListener('install', function(event) {
event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/index.html',
        '/css/bootstrap.min.css',
        '/css/font-awesome.min.css',
        '/css/style.css',
        '/css/style.css.map',
        '/js/bootstrap.min.js',
        '/js/jquery-2.1.4.min.js',
        '/js/theme.js',
        '/js/contact.js',
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
        '/img/logo/192x192.png',
        '/img/logo/512x512.png'
      ]);
    })
 );
});

self.addEventListener('fetch', function(event) {

});
