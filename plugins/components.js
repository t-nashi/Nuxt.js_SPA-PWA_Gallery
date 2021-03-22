import Vue from 'vue'

import TheHeader from '~/components/ui/TheHeader'
import TheFooter from '~/components/ui/TheFooter'
import ModalGallery from '~/components/component/ModalGallery'
import Loading from '~/components/component/Loading'

Vue.mixin({
  components: {
    TheHeader,
    TheFooter,
    ModalGallery,
    Loading
  }
})