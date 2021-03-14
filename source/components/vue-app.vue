<template>
  <div class="wrapper">
    <h1>{{ heading }}</h1>
    <message></message>
  </div>
</template>

<script>
import Message from './message.vue';

export default {
  data() {
    return {
      heading: 'Vue App initialized'
    }
  },
  components: {
      Message
  }
}
</script>

<style>

</style>