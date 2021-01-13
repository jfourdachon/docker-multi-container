<template>
  <div class="container"></div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      seenIndexes: [],
      values: {},
      index: '',
    }
  },
  mounted() {
    this.fetchValues()
    this.fetchIndexes()
  },
  methods: {
    async fetchValues() {
      const response = await axios.get('/api/values/current')
      this.values = response.data
    },
    async fetchIndexes() {
      const response = await axios.get('/api/values/all')
      this.seenIndexes = response.data
    },
  },
}
</script>

<style></style>
