<template>
  <a-layout style="min-height: 100vh">
    <side-bar />
    <a-layout>
      <nav-bar />
      <a-layout-content class="layout-content">
        <slot />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import NavBar from '@/components/common/NavBar.vue';
import SideBar from '@/components/common/SideBar.vue';
import { defineComponent, ref } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  computed: mapGetters(['collapsedSideBar']),

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
<style>
.layout-content {
  margin: 24px 16px;
  padding: 24px;
  background: #fff;
  min-height: '280px';
}
</style>
