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
    news: Object
  },
  methods: {
    getFormattedPublishedAt() {
      this.publishedAt = new Date(this.news.published_at).toUTCString()
    }
  }
}
</script>

<template>
  <div class="news-item">
    <h1>{{ news.title }}</h1>
    <p>{{ news.summary }}</p>
    <p>Published: {{ publishedAt }}</p>
  </div>
</template>
