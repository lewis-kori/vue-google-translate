<script>
import Vue from 'vue';
import { Translator } from '@/entry.esm';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    Translator,
  },
});
</script>

<template>
  <div id="app">
    <Translator />
  </div>
</template>
