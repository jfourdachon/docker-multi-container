<template>
  <div class="container">
    <b-row>
      <label>Enter your index:</label>
      <b-form-input v-model="index" type="number"></b-form-input>
      <b-button variant="primary" @click="handleSubmit">Submit</b-button>
    </b-row>
    <div>
      <h3>Indices I have seen:</h3>
      {{ indexes }}
      <h3>Calculated values:</h3>
      <div v-for="(value, key) in values" :key="key">
        For index {{ key }}, I calculated {{ value }}
      </div>
    </div>
  </div>
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
  computed: {
    indexes() {
      return this.seenIndexes.map((index) => index).join(', ')
    },
  },
  mounted() {
    this.fetchValues()
    this.fetchIndexes()
  },
  methods: {
    async fetchValues() {
      const response = await axios.get(process.env.VUE_APP_API_BASE_URL + '/values/current')
      this.values = response.data.data
    },
    async fetchIndexes() {
      const response = await axios.get(process.env.VUE_APP_API_BASE_URL + '/values/all')
      this.seenIndexes = response.data.data[0].values
    },
    async handleSubmit() {
      await axios.post(process.env.VUE_APP_API_BASE_URL + '/values/value', {
        index: this.index,
      })
    },
  },
}
</script>

<style></style>
