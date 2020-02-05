module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/stylesheets/global.scss";
        `,
      },
    },
  },
  pwa: {
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "src/service-worker.js",
    },
    themeColor: "#2C8CEC",
    favicon32: 'img/icons/Logo_contrast_bluex192.png',
    favicon16: 'img/icons/Logo_contrast_bluex512.png',
    icons: [
      {
        "src": "./img/icons/Logo_contrast_bluex192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "./img/icons/Logo_contrast_bluex512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ]
  }
}