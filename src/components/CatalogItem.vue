<template>
  <section class="catalog-item is-flex-tablet" :class="classes">
    <div class="image-section">
      <div class="image-content" data-rellax-speed="4" data-rellax-percentage="0.5">
        <image-slider :images="item.images"/>
      </div>
    </div>
    <div class="text-section is-flex-tablet">
      <div class="text-content">
        <h5 class="label">{{ item.label }}</h5>
        <h1 class="title">{{ item.title }}</h1>
        <div class="description" v-html="item.description"></div>
        <div class="sizes" v-if="item.sizes.length > 0">
          {{ item.sizes }}
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"
import { CatalogItem } from '../services/ContentService'
import ImageSlider from './ImageSlider.vue'

@Component({
  components: {
    ImageSlider,
  }
})
export default class CatalogView extends Vue {
  @Prop(Object) item!: CatalogItem
  @Prop(Number) index!: number

  get classes () {
    return {
      'is-reverse': this.index % 2
    }
  }

}
</script>

<style lang="scss" scoped>
$image-overhang: 35px;

.catalog-item {
  position: relative;
  width: 100%;
  min-height: 100vh;  
}

.image-section {
  position: relative;
  flex: 1 1 50%;
  max-width: 50%;
  display: flex;
  align-items: center;
  margin-right: 50px;

  @media screen and (max-width: 768px) {
    max-width: none;
    margin: 0 !important;
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    right: $image-overhang;
    bottom: 0;
    background: #eee;
    // content: "";
  }
}

.image-content {
  position: relative;
  width: 100%;
}

.text-section {
  flex: 1;
  align-items: center;
}

.text-content {
  padding: 60px 0 80px 0;
}

.sizes {
  font-size: 0.9em;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-top: 20px;
}

.catalog-item.is-reverse {
  flex-direction: row-reverse;

  .image-section {
    margin-left: 50px;
    margin-right: 0;
  }
}
</style>
