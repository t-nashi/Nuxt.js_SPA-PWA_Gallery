<template>
  <footer class="l-footer">
    <div class="l-footer__inner">
      <p class="copyright">&copy; 2021 Gallery<br> presented by <a href="https://www.koreyome.com">Tsutomu Takanashi</a></p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.l-footer {
  margin-top: auto;
  width: 100%;
  color: $color-primary;
  background-color: $color-secondary;
  &__inner {
    text-align: center;
    padding: 12px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .copyright {
      font-size: 1.4rem;
      line-height: 1.4;
      @include mq-up(sm) {
        line-height: 1;
      }
      br {
        @include mq-up(sm) {
          display: none;
        }
      }
      a {
        &:hover, &:active {
          opacity: .8;
        }
      }
    }
  }
}
</style>