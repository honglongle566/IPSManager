<template>
  <a-layout-content
    :style="{
      margin: '24px 16px',
      padding: '24px',
      background: '#fff',
      minHeight: '280px',
    }"
  >
    <!-- <iframe
      width="100%"
      height="100%"
      seamless
      frameBorder="0"
      scrolling="no"
      src="http://localhost:8088/superset/dashboard/p/2dQ1NgQj9mW/"
    >
    </iframe> -->
  </a-layout-content>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    return {
      checked: ref(false),
    };
  },
});
</script>
