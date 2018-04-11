<template>
  <div class="card-container">
    <div class="card">
      <WorkLink :to="link">
        <img :src="image" class="card-image">
        <div class="card-text">
          <div class="card-title">
            {{ title }}
          </div>
          <div class="card-description">
            {{description}}
          </div>
        </div>
      </WorkLink>
    </div>
  </div>
</template>

<script>
import WorkLink from '@/components/WorkLink'

export default {
  name: 'Card',
  props: ['title', 'imageUri', 'description', 'link'],
  data () {
    return {

    }
  },
  components: {
    WorkLink
  },
  computed: {
    image () {
      return this.imageUri ? require('../assets/img/' + this.imageUri + '.png') : null
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

    &:hover {
      .card-image {
        transform: translateY(-.3rem);
      }

      .card-text {
        opacity: 1;
        color: #1e272e;
        transform: translateY(-.25rem);
      }
    }

    .card-image {
      max-width: 100%;
      border-radius: 4px;
      transform: scale3d(1, 1, 1);
      transition: all .4s ease;
    }

    .card-text {
      padding: .5rem 0;
      opacity: .9;
      transition: all .4s ease;

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
