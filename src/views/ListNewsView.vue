<script>
import ChangePage from '../components/ChangePage.vue'
import NewsItem from '../components/NewsItem.vue'
import api from '../stores/news'

export default {
  data() {
    return {
      news: [],
      page: 1
    }
  },
  created() {
    // watching to change page by buttons
    this.$watch(
      () => this.$route.params,
      () => this.updateData()
    )

    // on load rendering page
    this.updateData()
  },
  methods: {
    async getNews() {
      this.news = await api.getNews(this.page)
    },
    getCurrentPage() {
      this.page = parseInt(this.$route.params.page)
      if (this.page <= 0 || isNaN(this.page)) this.page = 1
    },
    async updateData() {
      this.getCurrentPage()
      await this.getNews()
    }
  },
  components: { ChangePage, NewsItem }
}
</script>

<template>
  <div class="list">
    <ChangePage :page="page" />

    <div class="news">
      <NewsItem v-for="newsItem in news" :news="newsItem" :key="newsItem.id"></NewsItem>
    </div>

    <ChangePage :page="page" />
  </div>
</template>
