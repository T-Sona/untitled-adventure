importScripts("/untitled-adventure/precache-manifest.5f48286e158dde94ebb7d69cea42dd17.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

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

