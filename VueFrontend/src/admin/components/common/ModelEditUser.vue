<template>
  <div>
    <a-modal
      v-model:visible="isShowEdit"
      title="Basic Modal"
      @ok="TOGGLE_MODEL_SHOW_EDIT"
      @close="TOGGLE_MODEL_SHOW_EDIT"
    >
    <template #footer>
        <a-button key="back" @click="TOGGLE_MODEL_SHOW_EDIT">Return</a-button>
        <a-button key="submit" type="primary" :loading="loading" @click="handleOk">Submit</a-button>
      </template>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { mapMutations, mapGetters } from "vuex";
export default defineComponent({
  computed: mapGetters(["isShowEdit"]),
  methods: mapMutations(["TOGGLE_MODEL_SHOW_EDIT"]),
  setup() {
    const handleOk = (e) => {
      console.log(e);
    };

    return {
      handleOk,
    };
  },
});
</script>
