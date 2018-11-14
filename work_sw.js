importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js');

workbox.routing.registerRoute(
  new RegExp('.*\.(?:js|css)'),
  workbox.strategies.networkFirst()
);


workbox.routing.registerRoute(
  // Cache image files
  /.*\.(?:png|jpg|jpeg|svg|gif)/,
  // Use the cache if it's available
  workbox.strategies.cacheFirst({
    // Use a custom cache name
    cacheName: 'image-cache',
    plugins: [
      new workbox.expiration.Plugin({
        // Cache only 20 images
        maxEntries: 20,
        // Cache for a maximum of a week
        maxAgeSeconds: 7 * 24 * 60 * 60,
      })
    ],
  })
);

//webP

self.addEventListener('fetch', function(event) {
    if (/\.jpg$|.png$/.test(event.request.url)) {
      var supportsWebp = false;
      if (event.request.headers.has('accept')){
          supportsWebp = event.request.headers
                                      .get('accept')
                                      .includes('webp');
      }
        if (supportsWebp){
           var req = event.request.clone();
           var returnUrl = req.url.substr(0, req.url.lastIndexOf(".")) + ".webp";
           event.respondWith(
                fetch(returnUrl, {
                  mode: 'no-cors'
                })
          );
      }
    }else{
        event.respondWith(
            caches.match(event.request).then(function(response) {
                return response || fetch(event.request);
            })
    );
    }
});
