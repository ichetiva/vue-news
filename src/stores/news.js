const apiUrl = 'https://api.spaceflightnewsapi.net/v4'

const api = {
  async getNews(page) {
    return (await (await fetch(`${apiUrl}/articles?limit=10&offset=${page * 10}`)).json()).results
  },
  async searchNews(query, page) {
    return (
      await (
        await fetch(
          `${apiUrl}/articles?title_contains=${query}&summary_contains=${query}&limit=10&offset=${
            page * 10
          }`
        )
      ).json()
    ).results
  }
}

export default api
