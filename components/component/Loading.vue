<template>
  <span class="c-loading">
    <svg class="c-loading__outer" x="0px" y="0px" viewBox="0 0 150 150">
      <circle class="c-loading__inner" cx="75" cy="75" r="60"/>
    </svg>
  </span>
</template>

<style lang="scss" scoped>
// ローディングアニメーション（thumbnailとモーダル/Swiper内の画像部分で使用）
.c-loading {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: #ededed;
  z-index: 1;
  opacity: 1;
  transition: all .3s ease-out;
  .swiper-slide & {
    background-color: $color-white;
  }
  // jsでclass付与して表示消す用
  &.whole-hide {
    opacity: 0;
  }
  &.outer-hide {
    .c-loading__outer {
      transition: all .3s ease;
      opacity: 0;
    }
  }
  // サークルアニメーション部分
  .c-loading__outer {
    width: 34%;
    animation: loading 3s linear infinite;
    opacity: 1;
    .swiper-slide & {
      width: 20%;
    }
    .c-loading__inner {
      stroke: {
        dashoffset: 0;
        dasharray: 300;
        width: 10;
        miterlimit: 10;
        linecap: round;
      }
      animation: loading-circle 2s linear infinite;
      stroke: $color-primary;
      fill: transparent;
    }
  }
  @keyframes loading {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
    }
    @keyframes loading-circle {
    0% {
      stroke-dashoffset: 0
    }
    100% {
      stroke-dashoffset: -600;
    }
  }
}
</style>
