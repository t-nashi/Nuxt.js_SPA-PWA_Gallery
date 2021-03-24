# Nuxt.js_SPA-PWA_Gallery
Nuxt.js(SPA|PWA)で作られた静止画/動画のギャラリーページです。jsonファイル内でコンテンツの管理をしています。


<br>

## プロジェクト仕様

* Nuxt.js v2.15.3にてプロジェクト作成
* CSS設計はFLOCSSを採用 ※主要styleはvueファイル内に記述していたりもする
* 表示するコンテンツの管理はjsonで行っている
* 静止画・動画表示に対応
* サムネイル一つあたりのギャラリー表示は「静止画: 1～5枚、動画: 1つ」の制限あり ※各所調整すれば制限変更可能
* ギャラリー表示はjsonデータの有無で静止画 or 動画表示の制御をしている
* その他、タグx10、モーダル内説明文はhtmlタグ使用可能としている
* PWA（Progressive Web Apps）対応 ※Android: Chrome、iOS: Safariからホーム画面へ追加可能
* レスポンシブ対応（ブレイクポイント： 340 | 360 | 576 | 768 | 992 | 1200 | 1400）
* モーダルウィンドウ内のスライダーはSwiperプラグインを採用
* PCではキーボード操作対応（Tab・Enterキーで選択、左右キーでスライダー操作、escキーでモーダル解除）


<br>

## コンテンツ管理用のjsonデータ作成補助をするためのスプレッドシート

* [Nuxt.js_SPA-PWA_Galleryのjsonファイル作成補助](https://docs.google.com/spreadsheets/d/1bj0OXiayXWz2l4Reoh8dVtbOjoSviFxMn_Ge5YywYxo/edit?usp=sharing)



<br>

## 仮コンテンツを入れてgenerate後サーバーへアップしたサンプルページ
![screenshot 1](https://user-images.githubusercontent.com/5539081/112361865-2afe3880-8d17-11eb-9d7f-4025def4f3dd.png)
* [Gallery](https://koreyome.com/labo/contents/nuxt/pwa/gallery/)


<br>

## 起動イメージ（dev | generate後のstart）

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
