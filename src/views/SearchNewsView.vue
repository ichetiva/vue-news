<script>
import ArticleItem from '../components/ArticleItem.vue'
import api from '../stores/news'

export default {
  data() {
    return {
      query: '',
      news: [],
      page: 1
    }
  },
  methods: {
    async searchNews() {
      if (this.query == '') this.news = ''
      else this.news = await api.searchNews(this.query, this.page)
    }
  },
  components: { ArticleItem }
}
</script>
<template>
  <div class="search">
    <form>
      <table>
        <tr>
          <td>
            <input type="text" placeholder="SpaceX..." v-model="query" @keyup.enter="searchNews" />
          </td>
          <td>
            <button @click.prevent="searchNews">Search</button>
          </td>
        </tr>
      </table>
    </form>
    <div v-if="news.length" class="list">
      <ArticleItem v-for="article in news" :article="article" :key="article.id" />
    </div>
    <h3 v-else>Type something and click 'Seach' to find matched news</h3>
  </div>
</template>

<style scoped>
input,
button {
  border: none;
  margin: 0;
  font-size: 2vh;
}

form {
  margin: 10px 0;
}

table,
td {
  border: 1px solid #333;
  border-collapse: collapse;
  margin-left: auto;
  margin-right: auto;
}

h3 {
  text-align: center;
}
</style>
