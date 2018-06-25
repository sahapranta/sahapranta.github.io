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
        '/css/style.min.css',
        '/js/bootstrap.min.js',
        '/js/jquery-2.1.4.min.js',
        '/js/theme.min.js',
        '/vendors/animate-css/wow.min.js',
        '/vendors/counter-up/jquery.counterup.min.js',
        '/vendors/counter-up/waypoints.min.js',
        '/vendors/isotope/imagesloaded.pkgd.min.js',
        '/vendors/isotope/isotope.pkgd.min.js',
        '/vendors/owl-carousel/owl.carousel.min.js',
        '/img/logo.png',
        '/img/footer-logo.png',
        '/img/fav-icon.png',
        '/img/logo/60x60.png',
        '/img/logo/72x72.png',
        '/img/logo/128x128.png',
        '/img/logo/192x192.png'
      ]);
    })
 );
});

self.addEventListener('fetch', function(event) {
    // console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});

