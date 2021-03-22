<template>
  <transition name="modal" appear>
    <div class="modal__overlay" @click.self="$emit('close')">
      <div class="modal__window">
        <div class="modal__content">
          <swiper ref="mySwiper" :options="swiperOption" @slideChange="onSlideChange">
            <swiper-slide v-if="json_data.video">
              <video id="video" controls :poster="json_data.video_thumbnail" preload data-setup="{}">
                <source :src="json_data.video" type="video/mp4">
                <p>I'm sorry; your browser doesn't support HTML5 video in WebM with VP8/VP9 or MP4 with H.264.</p>
              </video>
            </swiper-slide>
            <swiper-slide ref="slide" v-for="(item, index) in img_gallery" :key="index">
              <Loading />
              <img :src="item" height="300" loading="lazy" @load="imgLoaded" :key="imgKey" />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
          <section class="content__body">
            <ul class="tags">
              <li v-if="json_data.tag1">{{ json_data.tag1 }}</li>
              <li v-if="json_data.tag2">{{ json_data.tag2 }}</li>
              <li v-if="json_data.tag3">{{ json_data.tag3 }}</li>
              <li v-if="json_data.tag4">{{ json_data.tag4 }}</li>
              <li v-if="json_data.tag5">{{ json_data.tag5 }}</li>
              <li v-if="json_data.tag6">{{ json_data.tag6 }}</li>
              <li v-if="json_data.tag7">{{ json_data.tag7 }}</li>
              <li v-if="json_data.tag8">{{ json_data.tag8 }}</li>
              <li v-if="json_data.tag9">{{ json_data.tag9 }}</li>
              <li v-if="json_data.tag10">{{ json_data.tag10 }}</li>
            </ul>
            <h3 class="title">{{ json_data.title }}</h3>
            <p class="explanation" v-html="json_data.explanation"></p>
          </section>
        </div>
      </div>
      <button class="btn-close" @click="$emit('close')">✕</button>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  props: ["json_data", "img_thumb", "img_gallery"], // 親からデータ受け取り
  data() {
    return {
      swiperOption: {
        init: true,
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false
        // },
        // spaceBetween: 4,
        watchOverflow: true,
        slidesPerView: 1,
        centeredSlides: true,
        loop: false,
        keyboard: {
          enabled: true
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: 'bullets',
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      imgKey: 0
    };
  },
  methods: {
    onSlideChange() {
      this.$emit('pauseVideo')
    },
    deleteSwiperSlide() {
      // swiper slideをリセットするための準備
      const e = this.img_gallery
      delete e.gallery1
      delete e.gallery2
      delete e.gallery3
      delete e.gallery4
      delete e.gallery5
      // 再レンダリング用の処理
      this.imgKey = this.imgKey ? 0 : 1;
    },
    imgLoaded(e) {
      // メソッド呼び出し要素の前要素を変数に定義
      const loadingElement = e.currentTarget.previousElementSibling
      // classを付与してcssアニメーションでローディング要素を隠す
      // 少しアニメーションを見せてからサークル要素を非表示にするためのclassを付与
      setTimeout(function(){ loadingElement.classList.add('outer-hide') }, 500)
      // ローディング要素が非表示になってからローディング要素全体を非表示にするためのclassを付与
      setTimeout(function(){ loadingElement.classList.add('whole-hide') }, 800)
      // cssアニメーションでローディング要素を隠れ切ったらローディング要素を削除
      setTimeout(function(){ loadingElement.remove() }, 1100)
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  &__overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
    .btn-close {
      border-radius: 50%;
      width: 50px;
      height: 50px;
      font-size: 2.0rem;
      font-weight: bold;
      line-height: 1;
      vertical-align: middle;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%,-50%);
      border: none;
      outline: none;
      opacity: 1;
      @include hover-transition;
      @include cursor-pointer;
    }
  }

  &__window {
    margin-top: -10vh;
    width: 96vw;
    transition: all .5s ease;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 5px;
    position: relative;
    @include mq-up(lg) {
      width: 80vw;
    }
    @include mq-up(xl) {
      width: 68vw;
    }
  }

  &__content {
    height: 100%;
    padding: 8px;
    @include mq-up(xl) {
      padding: 30px;
    }
    .content__body {
      font-size: 1.6rem;
      margin-top: 8px;
      .title {
        font-weight: bold;
        @include mq-up(md) {
          font-size: 1.8rem;
        }
      }
      .tags {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 4px;
        li {
          font-size: 1.2rem;
          line-height: 1;
          background-color: $color-primary-light;
          color: $color-white;
          padding: 4px 16px;
          border-radius: 24px;
          margin-bottom: 4px;
          &:not(:last-child) {
            margin-right: 4px;
          }
        }
      }
      .explanation {
        font-size: 1.4rem;
        overflow: auto;
        max-height: 6.4em;
        @include mq-up(md) {
          font-size: inherit;
          max-height: 4.4em;
        }
      }
    }
    .swiper-slide {
      position: relative;
      text-align: center;
      align-items: center;
      display: flex;
      justify-content: center;
      @include mq-up(sm) {
        display: inline;
      }
      & > * {
        object-fit: contain;
        width: 100%;
        height: 100%;
        max-height: 56vh;
        @include mq-up(lg) {
          min-height: 56vh;
        }
      }
    }
    .swiper-button-prev,
    .swiper-button-next {
      border: none;
      cursor: pointer;
      outline: none;
      @include hover-transition;
    }
  }
}

// モーダル挙動
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s;
  .modal__window {
    transition: opacity 0.4s, transform 0.4s;
  }
}
.modal-leave-active {
  transition: opacity 0.4s ease 0.2s;
}
.modal-enter,
.modal-leave-to {
  opacity: 0;
  .modal__window {
    opacity: 0;
    transform: translateY(-8px);
  }
}
</style>
