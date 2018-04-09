<template>
  <div class="card-container">
    <div class="card" v-on:click="onClick">
      <div class="card-image">
        <img :src="image">
      </div>
      <div class="card-text">
        <div class="card-title">
          {{ title }}
        </div>
        <div class="card-description">
          {{description}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['title', 'imageUri', 'description', 'link'],
  data () {
    return {

    }
  },
  computed: {
    image () {
      return this.imageUri ? require('../assets/img/' + this.imageUri + '.png') : null
    }
  },
  methods: {
    onClick: function () {
      if (this.link.includes('https://') || this.link.includes('http://')) {
        window.open(this.link)
      } else {
        this.$router.push(this.link)
      }
    }
  }
}
</script>

<style scoped lang="scss">
$max-tablet-width: 768px;

.card-container {
  flex: 0 0 auto;
  flex-basis: 50%;

  @media screen and (max-width: $max-tablet-width) {
    flex-basis: 100%;
  }

  .card {
    margin: .75rem .75rem .75rem;
    height: calc(100% - 1.5rem);
    border-radius: 5px;
    cursor: pointer;

    .card-image {
      overflow: hidden;
      transition: all .4s ease;

      &:hover {
        // box-shadow: 0 4px 16px rgba(0,0,0,.08);
      }

      img {
        max-width: 100%;
        border-radius: 4px;
        transform: scale(1.01);
        transition: all .4s ease;

        &:hover {
          transform: scale(1.02);
        }
      }
    }

    .card-text {
      padding: .5rem 0;

      .card-title {
        font-size: 1.75rem;
        font-weight: 600;
      }

      .card-description {
        font-size: 1.1rem;
      }
    }
  }
}
</style>
