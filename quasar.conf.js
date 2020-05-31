// Configuration for your app
// https://quasar.dev/quasar-cli/quasar-conf-js

module.exports = function (ctx) {
  return {
    preFetch: true,
    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    boot: [
    ],

    css: [
      'app.styl'
    ],

    extras: [
      // 'ionicons-v4',
      // 'mdi-v3',
      // 'fontawesome-v5',
      // 'eva-icons',
      // 'themify',
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

      'roboto-font', // optional, you are not bound to it
      'material-icons' // optional, you are not bound to it
    ],

    framework: {
      // iconSet: 'ionicons-v4',
      // lang: 'de', // Quasar language

      // all: true, // --- includes everything; for dev only!

      components: [
        'QLayout',
        'QHeader',
        'QFooter',
        'QPageContainer',
        'QPage',
        'QToolbar',
        'QToolbarTitle',
        'QAvatar',
        'QBtn',
        'QIcon',
        'QList',
        'QItem',
        'QItemSection',
        'QItemLabel',
        'QTabs',
        'QTab',
        'QRouteTab',
        'QCard',
        'QCardSection',
        'QCardActions',
        'QBtnGroup',
        'QBtn',
        'QSeparator',
        'QSpinner',
        'QDialog',
        'QSpace',
        'QImg'
      ],

      directives: [
        'Ripple',
        'ClosePopup',
        'TouchSwipe'
      ],

      // Quasar plugins
      plugins: [
        'Notify',
        'LocalStorage'
      ]
    },

    supportIE: false,

    build: {
      modern: true,
      scopeHoisting: true,
      // vueRouterMode: 'history',
      vueCompiler: true,
      gzip: true,
      // analyze: true,
      // extractCSS: false,
      extendWebpack (cfg) {
        cfg.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/,
          options: {
            formatter: require('eslint').CLIEngine.getFormatter('stylish')
          }
        })
      }
    },

    devServer: {
      // https: true,
      // port: 8080,
      open: true // opens browser window automatically
    },

    animations: 'all', // --- includes all animations
    // animations: [],

    ssr: {
      pwa: {
        runtimeCaching: [
          {
            urlPattern: '/infos',
            handler: 'cacheFirst'
          },
          {
            urlPattern: '/program',
            handler: 'cacheFirst'
          },
          {
            urlPattern: '/speakers',
            handler: 'cacheFirst'
          },
          {
            urlPattern: '/about',
            handler: 'cacheFirst'
          }
        ]
      }
    },

    pwa: {
      // workboxPluginMode: 'InjectManifest',
      workboxOptions: {
        skipWaiting: true,
        clientsClaim: true
      }, // only for NON InjectManifest
      manifest: {
        start_url: '/',
        name: 'La Rentrée des Initiatives Citoyennes',
        short_name: 'La Rentrée',
        description: 'Retrouvez toutes les informations pratique sur l\'événement',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#eeeeee',
        theme_color: '#009aaf',
        icons: [
          {
            'src': 'statics/app-logo-128x128.png',
            'sizes': '128x128',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/ric-icon-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/ric-icon-256x256.png',
            'sizes': '256x256',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/ric-icon-384x384.png',
            'sizes': '384x384',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/ric-icon-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          }
        ]
      },
      metaVariables: {
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'default',
        appleTouchIcon120: 'statics/icons/apple-ric-icon-120x120.png',
        appleTouchIcon180: 'statics/icons/apple-ric-icon-180x180.png',
        appleTouchIcon152: 'statics/icons/apple-ric-icon-152x152.png',
        appleTouchIcon167: 'statics/icons/apple-ric-icon-167x167.png',
        msapplicationTileImage: 'statics/icons/ms-ric-icon-144x144.png',
        msapplicationTileColor: '#FFFFFF'
      }
    },

    cordova: {
      // id: 'org.cordova.quasar.app',
      // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
    },

    electron: {
      // bundler: 'builder', // or 'packager'

      extendWebpack (cfg) {
        // do something with Electron main process Webpack cfg
        // chainWebpack also available besides this extendWebpack
      },

      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',

        // Windows only
        // win32metadata: { ... }
      },

      builder: {
        // https://www.electron.build/configuration/configuration

        // appId: 'event-planet'
      }
    }
  }
}
