<script>
import { RouterLink } from 'vue-router'

export default {
  props: {
    page: Number
  },
  components: { RouterLink }
}
</script>

<template>
  <div class="change-page">
    <table>
      <tr>
        <td>
          <RouterLink :to="{ name: 'list', params: { page: page > 1 ? page - 1 : 1 } }"
            >Previous</RouterLink
          >
        </td>
        <td>
          <RouterLink :to="{ name: 'list', params: { page: page + 1 } }">Next</RouterLink>
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
table,
td {
  border: 1px solid #333;
  border-collapse: collapse;
  margin-left: auto;
  margin-right: auto;
}
.change-page {
  margin: 10px 0;
}
.change-page * {
  text-transform: uppercase;
  padding: 5px;
}
</style>
