const CACHE_NAME = "trainlog-v3";
const ASSETS = [
  "./",
  "./index.html",
  "./使用说明.html",
  "./styles.css",
  "./app.js",
  "./service-worker.js",
  "./manifest.webmanifest",
  "./icon.svg",
  "./.nojekyll",
  "./cloudflare-sync-worker.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});
