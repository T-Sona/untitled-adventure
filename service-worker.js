importScripts("/untitled-adventure/precache-manifest.96029e7dbe6db942de7fad33f63b833d.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

import workbox from "workbox";

workbox.setConfig({
  debug: false
});

workbox.precaching.precacheAndRoute([]);

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  workbox.strategies.cacheFirst({
    cacheName: "images",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
      })
    ]
  })
);

