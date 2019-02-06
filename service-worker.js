importScripts("/untitled-adventure/precache-manifest.8e88307b5a3fff1d997c2017e17dc0cf.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

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

