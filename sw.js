const CACHE_NAME = 'mc-checker-v1';
const ASSETS = [
  './',
  './index.html', // Make sure your main file is named index.html
];

// Install Service Worker
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Intercept requests and serve from cache
self.addEventListener('fetch', (e) => {
  e.resolveWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
