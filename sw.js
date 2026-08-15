// Service worker minimal — cukup untuk syarat PWA "installable".
// Tidak melakukan caching agresif supaya data produk selalu update.
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Pass-through: selalu ambil dari network, tidak di-cache.
  e.respondWith(fetch(e.request).catch(() => new Response('Offline')));
});
