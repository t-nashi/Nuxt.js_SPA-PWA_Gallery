const site_title = 'Gallery'
const site_description = 'Nuxt.js(SPA|PWA)で作られた静止画/動画のギャラリーページです。jsonファイル内でコンテンツの管理をしています。'
const router_base = '/'

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // 指定フォルダにあるページを無視する
  // ignore: [
  //   // 'pages/ignore/*',
  // ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // グローバルで変数やmixin等を使えるようにする
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: ['~/assets/scss/style.scss']
  },

  // 任意のサブディレクトリ内で動作させる為にはbaseのパスを変更する
  // router: {
  //   base: router_base
  // },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    // base: { href: 'router.base' }, // router.baseを活用するときは有効にする
    title: site_title,
    description: site_description,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'robots', name: 'robots', content: 'noindex' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  pwa: {
    icon: {
      source: '/icon.png',    // このファイルを元に各サイズ毎のアイコン画像を自動生成してくれる
      fileName: 'icon.png',
      sizes: [64, 120, 144, 152, 192, 384, 512],
      targetDir: 'icons',
      plugin: true,
    }
  },
  manifest: {
    lang: 'ja',
    theme_color: '#ededed',
    background_color: '#ededed',
    display: 'standalone',
    start_url: router_base,
    scope: router_base,
    name: site_title,
    short_name: site_title,
    title: site_title,
    description: site_description
    // 'og:title': site_title,
    // 'og:description': site_description,
  },

  // ルート間遷移時にローディングプログレスバーを表示するコンポーネント
  // loading: false,
  loading: {
    color: '#51bba7',
    height: '8px'
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'reset-css',
    'swiper/css/swiper.css',
    '~/assets/scss/style.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    // { src: '~/plugins/lazyload.js' },  // 「loading="lazy"」にて代用 ※lazyload.jsを利用する際は下記のコメントを外し、imgでv-lazyプロパティを使う
    { src: '~/plugins/vue-awesome-swiper.js', ssr: false },
    { src: '~/plugins/components.js', ssr: false },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    // publicPath: '/static/',
  },

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  // buildModules: [
  //   '@nuxtjs/google-analytics'
  // ],
  // googleAnalytics: {
  //   id: 'UA-xxxxxx-xx'  // 自身のアナリティクスコード
  // },
  generate : {
    fallback: true
  },

  // ローディングバーをプログラム的に起動する
  // https://ja.nuxtjs.org/docs/2.x/configuration-glossary/configuration-loading/
  // mounted() {
  //   this.$nextTick(() => {
  //     this.$nuxt.$loading.start()
  //     setTimeout(() => this.$nuxt.$loading.finish(), 500)
  //   })
  // },

}
