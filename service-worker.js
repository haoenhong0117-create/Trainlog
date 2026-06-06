const CACHE_NAME = "trainlog-v11-runtime";
const RUNTIME_PATCH = "./trainlog-v11-runtime.js?v=11";
const ASSETS = [
  "./", "./index.html", "./v11.html", "./使用说明.html", "./styles.css?v=10", "./styles.css?v=11", "./app.js?v=10", "./app.js?v=11", RUNTIME_PATCH, "./service-worker.js?v=11", "./manifest.webmanifest", "./icon.svg", "./.nojekyll", "./cloudflare-sync-worker.js"
];
self.addEventListener("install", (event) => { event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))); });
self.addEventListener("message", (event) => { if (event.data?.type === "SKIP_WAITING") self.skipWaiting(); });
self.addEventListener("activate", (event) => { event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const requestUrl = new URL(event.request.url);
  if (requestUrl.pathname.endsWith("/app.js") && !requestUrl.searchParams.has("no-runtime")) {
    event.respondWith(Promise.all([fetch(event.request), fetch(RUNTIME_PATCH)]).then(async ([appResponse, patchResponse]) => {
      if (!appResponse.ok || !patchResponse.ok) throw new Error("Runtime patch unavailable");
      const headers = new Headers(appResponse.headers);
      headers.set("Content-Type", "text/javascript; charset=utf-8");
      const response = new Response(`${await appResponse.text()}\n${await patchResponse.text()}`, { status: appResponse.status, statusText: appResponse.statusText, headers });
      caches.open(CACHE_NAME).then((cache) => cache.put(event.request, response.clone()));
      return response;
    }).catch(() => caches.match(event.request)));
    return;
  }
  if (event.request.mode === "navigate") {
    event.respondWith(fetch(event.request).then((response) => { const copy = response.clone(); caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy)); return response; }).catch(() => caches.match(event.request).then((cached) => cached || caches.match("./index.html"))));
    return;
  }
  event.respondWith(fetch(event.request).then((response) => { const copy = response.clone(); caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy)); return response; }).catch(() => caches.match(event.request)));
});
