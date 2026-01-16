const CACHE_NAME = 'namyang-pwa-v2';

const urlsToCache = [
  './',
  './index.html',
  './notice.html',
  './manifest.json',
  './nam-192.png',
  './nam-512.png'
];
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((k) => (k !== CACHE_NAME ? caches.delete(k) : Promise.resolve()))
      )
    )
  );
  self.clients.claim();
});
