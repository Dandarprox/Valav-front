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
}