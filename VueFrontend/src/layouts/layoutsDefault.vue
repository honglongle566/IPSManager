<template>
  <a-layout style="min-height: 100vh">
    <side-bar :collapsed="collapsed" :changeSibar="changeSibar" />
    <a-layout>
      <nav-bar />
      <slot />
    </a-layout>
  </a-layout>
</template>
<script>
import NavBar from '@/components/common/NavBar.vue';
import SideBar from '@/components/common/SideBar.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: {
    NavBar,
    SideBar,
  },

  setup() {
    return {
      collapsed: ref(false),
    };
  },
  methods: {
    changeSibar() {
      console.log('changeSibar', this.collapsed);
      this.collapsed = !this.collapsed;
    },
  },
});
</script>
<style></style>
