module.exports = {
  publicPath: "/untitled-adventure/",
  pwa: {
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "public/service-worker.js"
    }
  }
};
