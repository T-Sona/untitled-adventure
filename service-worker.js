importScripts("/untitled-adventure/precache-manifest.358bf754c62fd4b1b76a5f336307ae45.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

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

