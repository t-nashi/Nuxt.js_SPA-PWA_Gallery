<template>
  <header class="l-header">
    <div class="l-header__inner">
      <h1>Gallery</h1>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.l-header {
  width: 100%;
  text-align: center;
  color: $color-primary;
  background-color: $color-secondary;
  &__inner {
    height: 160px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    h1 {
      font-size: 5.0rem;
      font-weight: bold;
      line-height: 1;
    }
  }
}
</style>