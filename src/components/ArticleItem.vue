<script>
export default {
  data() {
    return {
      publishedAt: null
    }
  },
  created() {
    this.getFormattedPublishedAt()
  },
  props: {
    article: Object
  },
  methods: {
    getFormattedPublishedAt() {
      this.publishedAt = new Date(this.article.published_at).toUTCString()
    }
  }
}
</script>

<template>
  <div class="article">
    <h1>
      <a :href="article.url">{{ article.title }}</a>
    </h1>
    <img :src="article.image_url" />
    <p>{{ article.summary }}</p>
    <p>Published: {{ publishedAt }}</p>
  </div>
</template>

<style scoped>
.article {
  margin-bottom: 20px;
}

.article:not(:last-of-type) {
  padding-bottom: 20px;
  border-bottom: 1px solid #333;
}

img {
  display: block;
  margin: 0 auto;
  width: 50%;
}
</style>
