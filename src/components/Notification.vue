<template>
  <div></div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Notifier',
  computed: {
    ...mapGetters(['lastMessage']),
  },
  watch: {
    lastMessage: 'showMessage',
  },
  methods: {
    showMessage(value) {
      console.log(value);
      this.$message({ ...value });
    },
  },
};
</script>
