<template>
  <div class="__layout__inner">
    <TheHeader />
    <section class="l-error">
      <div class="l-error__inner">
        <h2>404</h2>
      </div>
    </section>
    <TheFooter />
  </div>
</template>

<style lang="scss" scoped>
.__layout__inner {
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
}
.l-error {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  h2 {
    margin-top: -.8em;
    font-size: 10rem;
    font-weight: bold;
    color: $color-gray-light-2;
    line-height: 1;
    @include mq-up(md) {
      font-size: 24rem;
    }
  }
}
</style>
