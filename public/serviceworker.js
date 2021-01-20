const cacheName = "exp-app-v1";

const cacheAssets = [
  "./",
  "index.html",
  "./images/logo.png",
  "manifest.json",
  "./static/js/bundle.js",
  "./static/js/main.chunk.js",
  "./static/js/0.chunk.js",
];

const self = this;

self.addEventListener("install", (e) => {

  e.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        let requestUrl = event.request.clone();
        fetch(requestUrl);
        return fetch(event.request)
          .then((response) => {
            return caches.open(cacheName).then((cache) => {
              if (response.type === "basic") {
                cache.put(event.request.url, response.clone());
              }
              return response;
            });
          })
          .catch(() => {
            return caches.match("./").then((response) => {
              if (response) {
                return response;
              }
            });
          });
      })
      .catch((error) => {
      })
  );
});

self.addEventListener("activate", (event) => {

  const cacheAllowlist = [cacheName];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheAllowlist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});