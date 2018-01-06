self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/index.html',
        '/about.html',
        '/blog.html',
        '/contact.html',
        '/blog-details.html',
        '/work-details.html',
        '/css/',
        '/css/style.css',
        '/css/bootstrap.min.css',
        '/css/responsive.css',
        '/css/font-awesome.min.css',
        '/css/effects/set2.css',
        '/css/effects/normalize.css',
        '/css/effects/component.css',
        '/images/',
        '/images/logo.png',
        '/images/home-images/image-1.jpg',
        '/images/home-images/image-2.jpg',
        '/images/home-images/image-3.jpg',
        '/images/home-images/image-4.jpg',
        '/images/home-images/image-5.jpg',
        '/js/',
        '/js/jquery.min.js',
        '/js/nav.js',
        '/js/custom.js',
        '/js/bootstrap.min.js',
        '/js/effects/masonry.pkgd.min.js',
        '/js/effects/imagesloaded.js',
        '/js/effects/classie.js',
        '/js/effects/AnimOnScroll.js',
        '/js/effects/modernizr.custom.js',
        '/js/html5shiv.js',
        'https://connect.facebook.net/en_US/sdk.js'
        
      ]);
    })
  );
});
