<script>
import { data } from '../firebase/storage.js';

export default {
  data() {
    return {
      items: [],
    };
  },
  async created() {
    this.items = await data();
  },
};
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Parameter Key</th>
        <th>Value</th>
        <th>Description</th>
        <th>Create Date</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item">
        <th>{{ item.key }}</th>
        <th>{{ item.value }}</th>
        <th>{{ item.description }}</th>
        <th>{{ item.date }}</th>
      </tr>
    </tbody>
  </table>
</template>