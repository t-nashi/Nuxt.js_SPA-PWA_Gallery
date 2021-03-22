<template>
  <div class="__layout__inner">
    <TheHeader />
    <div class="l-container">
      <div class="l-container__inner">
        <main class="l-main">
          <div class="l-main__inner">
            <article class="gallery_thumbnail" :tabIndex="(index+1)" v-for="(item, index) in result_json_data" :key="index" @click="openModal(item)" @keyup.enter="openModal(item)" @keyup.esc="closeModal">
              <p>
                <Loading />
                <img :src="require(`~/assets/images/${ item.thumbnail }`)" loading="lazy" v-on:load="imgLoaded" :alt="`${ item.title }`">
              </p>
            </article>
          </div>
          <ModalGallery
            :json_data="postItem"
            :img_thumb="postItemThumbSrc"
            :img_gallery="postItemGallerySrc"
            :key="modalKey"
            v-show="showContent"
            ref="childModal"
            @close="closeModal"
            @pauseVideo="pauseVideo" />
        </main>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script>
const axios = require("axios");
let jsonUrl = "gallery.json";

export default {
  asyncData: async function() {
    let result = await axios.get(jsonUrl);
    return { result_json_data: result.data };
  },
  data() {
    return {
      showContent: false,
      postItem: "",
      postItemThumbSrc: "",
      postItemGallerySrc: {},
      modalKey: 0
    }
  },
  methods: {
    openModal(item) {
      this.showContent = true
      this.setImageSrc(item)
    },
    setImageSrc(item) {
      // requireが子コンポーネント内でうまく動作しない為、ココでイメージ(assets内)のURLを展開
      this.postItem = item
      // サムネイル用
      this.postItemThumbSrc = require(`~/assets/images/${ item.thumbnail }`)
      // swiperギャラリー用
      const e = this.postItemGallerySrc
      const img1 = item.gallery_image1
      const img2 = item.gallery_image2
      const img3 = item.gallery_image3
      const img4 = item.gallery_image4
      const img5 = item.gallery_image5
      if(img1!=='') {
        e.gallery1 = require(`~/assets/images/${ img1 }`)
      } else {
        delete e.gallery1
      }
      if(img2!=='') {
        e.gallery2 = require(`~/assets/images/${ img2 }`)
      } else {
        delete e.gallery2
      }
      if(img3!=='') {
        e.gallery3 = require(`~/assets/images/${ img3 }`)
      } else {
        delete e.gallery3
      }
      if(img4!=='') {
        e.gallery4 = require(`~/assets/images/${ img4 }`)
      } else {
        delete e.gallery4
      }
      if(img5!=='') {
        e.gallery5 = require(`~/assets/images/${ img5 }`)
      } else {
        delete e.gallery5
      }
      // 再レンダリング用の処理
      this.modalKey = this.modalKey ? 0 : 1;
    },
    closeModal() {
      this.showContent = false
      // ビデオの再生停止
      this.pauseVideo()
      // 〇秒後に実行メソッド
      setTimeout(() => {
        this.deleteSwiperSlide()
      } ,500)
    },
    pauseVideo() {
      if(document.getElementById('video') != null) {
        document.getElementById('video').pause()
      }
    },
    deleteSwiperSlide() {
      this.$refs.childModal.deleteSwiperSlide()
    },
    imgLoaded(e) {
      // メソッド呼び出し要素の前要素を変数に定義
      const loadingElement = e.currentTarget.previousElementSibling
      // 少しアニメーションを見せてからサークル要素を非表示にするためのclassを付与
      setTimeout(() => { loadingElement.classList.add('outer-hide') }, 500)
      // ローディング要素が非表示になってからローディング要素全体を非表示にするためのclassを付与
      setTimeout(() => { loadingElement.classList.add('whole-hide') }, 800)
      // cssアニメーションでローディング要素を隠れ切ったらローディング要素を削除
      setTimeout(() => { loadingElement.remove() }, 1100)
    }
  }
}
</script>

<style lang="scss" scoped>
.__layout__inner {
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
}
.l-container__inner {
  padding: 10px;
  @include mq-up(lg) {
    padding: 20px 10px;
  }
}
.l-main {
  @include mx-auto();
  @include mq-up(md) {
    width: 740px;
  }
  @include mq-up(lg) {
    width: 960px;
  }
  @include mq-up(xl) {
    width: 1036px;
  }
  @include mq-up(xxl) {
    width: 1400px;
  }
  &__inner {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 10px;
    @include mq-up(sm) {
      grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    }
    @include mq-up(lg) {
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      gap: 20px;
    }
    @include mq-up(xl) {
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      margin: 0;
    }

    .gallery_thumbnail {
      @include cursor-pointer();
      font-size: 0;
      overflow: hidden;
      outline: none;
      // zoom戻り
      transition: all .3s ease;
      box-shadow: none;
      // hover-zoom
      &:hover, &:active {
        box-shadow:
        rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
      }
      // フォーカス
      &:focus, &:focus-visible {
        outline: none;
        box-shadow:
        rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
        transition: all .5s ease;
        img {
          // hover-zoom
          transition: all .3s ease;
          transform: scale(1.05);
          filter: brightness(1.05);
        }
      }
      & > p {
        position: relative;
      }
      img {
        // zoom戻り
        transition: all .5s ease;
        width: 100%;
        border: none;
        filter: brightness(1);
        // hover-zoom
        &:hover, &:active {
          transition: all .3s ease;
          transform: scale(1.05);
          filter: brightness(1.05);
        }
      }
    }
  }
}

</style>