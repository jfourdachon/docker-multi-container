<template>
  <div class="container">
    <b-row>
      <label>Enter your index:</label>
      <b-form-input v-model="index" type="number" @click="handleSubmit">
        Submit
      </b-form-input>
      <b-button variant="primary"></b-button>
    </b-row>
    <div>
      <h3>Indices I have seen:</h3>
      {{ indexes }}
      <h3>Calculated value:</h3>
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
      const response = await axios.get('/api/values/current')
      this.values = response.data
    },
    async fetchIndexes() {
      const response = await axios.get('/api/values/all')
      this.seenIndexes = response.data
    },
    methods: {
      async handleSubmit() {
        await axios.post('/api/values/value', {
          index: this.index,
        })
      },
    },
  },
}
</script>

<style></style>
