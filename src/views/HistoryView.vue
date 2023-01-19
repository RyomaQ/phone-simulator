<template lang="">
<div id="main">
    <div v-for = "recent in recents" :key="recent" class="contactInfo">
      <div id="name-num">
        <p v-if="recent.name!=''">{{ recent.name }}</p>
        <p v-else>{{ recent.number }}</p>
        <p>{{ recent.date }}</p>
      </div>
      <div class="numAndCall">
        <!-- <p>{{ recent.time }}</p> -->
        <button id="call"><img src="../assets/call-purple.png" alt=""></button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HistoryView',
  computed: {
    recents() {
      return this.$store.state.recents
    }
  },

  methods: {

  },

}
</script>
<style scoped>
  #name-num {
    display: flex;
    justify-content: space-between;
    width: 444px;
  }
</style>