<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'yogasession',
  created() {
    this.fetchYogasession(this.$route.params.id)
  },
  computed: {
    ...mapState({
      yogasession: state => state.meetups.meetup
    }),
  },
  methods: {
    ...mapActions(['fetchYogasession'])
  },
};
</script>

<template lang="pug">
div
  h2.name {{yogasession.name}}
  div {{yogasession.location}}
</template>

<style>
.name {
  color:rgb(255,20,147);
}
</style>
