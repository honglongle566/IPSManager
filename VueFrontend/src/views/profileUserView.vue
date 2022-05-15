<template>
  <a-tree-select
    v-model:value="value"
    show-search
    style="width: 40%"
    :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
    placeholder="Please select"
    allow-clear
    tree-default-expand-all
  >
    <template #suffixIcon
      ><DownOutlined style="pointer-events: none"
    /></template>
    <a-tree-select-node value="parent 1" title="parent 1" key="0-1">
    </a-tree-select-node>
    <a-tree-select-node value="parent 2" title="parent 2" key="0-2">
    </a-tree-select-node>
    <a-tree-select-node value="parent 3" title="parent 3" key="0-3">
    </a-tree-select-node>
    <a-tree-select-node value="parent 4" title="parent 4" key="0-4">
    </a-tree-select-node>
  </a-tree-select>
</template>
<script>
import { DownOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    DownOutlined,
  },

  setup() {
    const value = ref();
    return {
      value,
    };
  },
});
</script>
