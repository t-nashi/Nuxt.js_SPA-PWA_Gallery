# Nuxt.js_SPA-PWA_Gallery
Nuxt.js(SPA|PWA)で作られた静止画/動画のギャラリーページです。jsonファイル内でコンテンツの管理をしています。


<br>

## 仕様

* PWA（Progressive Web Apps）対応
* レスポンシブ対応
* モーダルウィンドウ内のスライダーはSwiperプラグインを採用
* 表示するコンテンツの管理はjsonで行う
* PCではキーボード操作対応（Tab・Enterキーで選択、左右キーでスライダー操作、escキーでモーダル解除）


<br>

## 仮コンテンツを入れたサンプルページ

* [Gallery](https://koreyome.com/labo/contents/nuxt/pwa/gallery/)


<br>

## 起動イメージ

![Gallery1](https://user-images.githubusercontent.com/5539081/112163387-522e0a80-8c30-11eb-9243-09037aa89268.png)

![Gallery2](https://user-images.githubusercontent.com/5539081/112163392-54906480-8c30-11eb-8f09-1544e6970550.png)

<br>

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

<br>


## 動作確認環境

#### ▼ Windows 10 Pro

* node： v12.16.1
* npm: 6.9.0

#### ▼ macOS Big Sur（v11.2.3）

* node： v14.16.0
* npm: 6.14.11

#### ▼ npmインストール済パッケージ

| パッケージ | バージョン |
|:---|:---|
|@nuxtjs/axios |5.13.1 |
|@nuxtjs/google-analytics |2.4.0 |
|@nuxtjs/pwa |3.3.5 |
|@nuxtjs/style-resources |1.0.0 |
|core-js |3.9.1 |
|node-sass |5.0.0 |
|nuxt |2.15.3 |
|reset-css |5.0.1 |
|sass-loader |10.1.1 |
|swiper |5.4.5 |
|vue-awesome-swiper |4.1.1 |
|vue-lazyload |1.3.3 |


<br>


## Nuxtインストール時の設定

#### $ npx create-nuxt-app gallery

| パッケージ | バージョン |
|:---|:---|
|? Generating Nuxt.js project in |**gallery** |
|? Project name: |**gallery** |
|? Programming language: |**JavaScript** |
|? Package manager: |**Npm** |
|? UI framework: |**None** |
|? Nuxt.js modules: |**Axios, Progressive Web App (PWA)** |
|? Linting tools: |**(Press <space> to select, <a> to toggle all, <i> to invert selection)** |
|? Test ing framework: |**None** |
|? Rendering mode: |**Single Page App** |
|? Deployment target: |**Static (Static/JAMStack hosting)** |
|? Development tools: |**(Press <space> to select, <a> to toggle all, <i> to invert selection)** |
|? What is your GitHub username? |**[ username ]** |
|? Version control system: |**Git.** |
