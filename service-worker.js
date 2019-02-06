importScripts("/untitled-adventure/precache-manifest.7f474541dc58c5369493de18e639e68e.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

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

